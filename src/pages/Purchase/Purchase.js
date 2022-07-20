import React from 'react';
import { useParams } from 'react-router-dom';
import usePartDetail from '../../Hooks/usePartDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Purchase = () => {


    const { id } = useParams()
    const [part] = usePartDetail(id);
    const [user, loading] = useAuthState(auth)

    const handlePlaceOrder = e => {
        e.preventDefault()

        const order = {
            email: user.email,
            tool: part.name,
            address: e.target.address.value,
            phone: e.target.phoneNumber.value,
        }
    }





    return (
        <div className=' mx-auto my-3'>

            <div className='flex justify-center items-center h-screen bg-blue-50'>
                <div className="card w-96  bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2>Please order: {part.name}</h2>
                        <form className='justify-center' onSubmit={handlePlaceOrder} >
                            <div className="form-control w-full max-w-xs my-2">
                                <input type="text" placeholder="Write your Name" className="input input-bordered w-full max-w-xs" readOnly />

                            </div>
                            <div className="form-control w-full max-w-xs my-2">
                                <input type="email" placeholder="Enter your email address" className="input input-bordered w-full max-w-xs" readOnly />

                            </div>
                            <div className="form-control w-full max-w-xs my-2">
                                <input type="text" placeholder="Enter your Address" className="input input-bordered w-full max-w-xs" required />

                            </div>
                            <div className="form-control w-full max-w-xs my-2 ">
                                <input type="text" placeholder="Enter your Phone Number" className="input input-bordered w-full max-w-xs" required />

                            </div>
                            <input className='text-white btn-primary btn w-full max-w-xs my-2' value="Order" type="submit" />
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Purchase;