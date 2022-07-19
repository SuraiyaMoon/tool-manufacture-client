import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import logo from '../../images/logo.png';


const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='flex justify-center items-center h-screen bg-blue-50'>
            <div className="card w-96  bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className=' flex items-center justify-center'>
                        <img
                            style={
                                {
                                    width: '50px',
                                    margin: '15px'
                                }
                            } src={logo} alt="" />
                        <span className='text-center text-primary font-semibold text-2xl'>Signup</span>

                    </div>
                    <form className='justify-center' onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <input {...register("name", {
                                required: {
                                    value: true,
                                    message: "Name is required"
                                }
                            })} type="text" placeholder="Write your Name" className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500 ">{errors.name.message}</span>}
                            </label>
                        </div>
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
                        <input className='text-white btn-primary btn w-full max-w-xs' value="Signup" type="submit" />
                    </form>
                    <p>Already have an account? <Link to="/login" className='text-primary'>Login</Link></p>
                    <div className="divider">OR</div>

                    <div
                        className="btn btn-primary btn-outline">Continue with Google</div>
                </div>
            </div>
        </div>

    );
};

export default Signup;