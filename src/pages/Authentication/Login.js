import React, { useEffect } from 'react';
import logo from '../../images/logo.png';
import {
    useSignInWithGoogle, useSignInWithEmailAndPassword
} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { useNavigate, useLocation, Link } from "react-router-dom";



const Login = () => {
    //form data
    const { register, formState: { errors }, handleSubmit } = useForm();

    //sign in with google
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    //sign in with email and pass
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    //redirect user
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from.pathname || '/';

    if (googleUser) {
        navigate(from, { replace: true })
    }
    // useEffect(() => {
    //     if (token) {
    //         navigate(from, { replace: true })
    //     }

    // }, [token, from, navigate])
    //loading
    if (loading || googleLoading) {
        return <Loading></Loading>
    }
    //error result
    let signInErrorMessage;
    if (error || googleError) {
        signInErrorMessage = <p className="text-red-500 text-center mb-4"><small>{error?.message || googleError?.message}</small></p>
    }
    //form submit
    const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;
        signInWithEmailAndPassword(email, password)
    };
    return (
        <div className='flex justify-center items-center h-screen bg-blue-50'>
            <div className="card  bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className=' flex items-center justify-center'>
                        <img
                            style={
                                {
                                    width: '50px',
                                    margin: '15px'
                                }
                            } src={logo} alt="" />
                        <span className='text-center text-primary font-semibold text-2xl'>Login</span>

                    </div>
                    <form className='justify-center' onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <input {...register("email", {
                                required: {
                                    value: true,
                                    message: "Email is required"
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid Email'
                                }
                            })} type="email" placeholder="Enter your email address" className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500 ">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500 ">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <input {...register("password", {
                                required: {
                                    value: true,
                                    message: "password is required"
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Password must be 6 character or longer'
                                }
                            })} type="password" placeholder="Enter your password" className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500 ">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                            </label>
                        </div>
                        {signInErrorMessage}
                        <input className='text-white btn-primary btn w-full max-w-xs' value="Login" type="submit" />
                    </form>
                    <p>New to NebulaManufacture? <Link to="/signup" className='text-primary'>Create New account</Link></p>
                    <div className="divider">OR</div>

                    <div onClick={() => signInWithGoogle()}
                        className="btn btn-primary btn-outline">Continue with Google</div>
                </div>
            </div>
        </div>

    );
};

export default Login;