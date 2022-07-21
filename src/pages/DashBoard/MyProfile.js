import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth)
    return (
        <div className='flex justify-center items-center  bg-blue-50 p-12'>
            <div className="">
                <div className="">
                    <form className='justify-center'  >
                        <div>
                            <h3 className="text-2xl">Name: {user?.displayName}</h3>
                            <h3 className="text-2xl">Email: {user?.email}</h3>

                        </div>



                        <div className="form-control w-full max-w-xs my-2">
                            <input type="text" placeholder="Enter your Address" className="input input-bordered w-full max-w-xs"
                                name='address' />

                        </div>
                        <div className="form-control w-full max-w-xs my-2 ">
                            <input type="text" placeholder="Enter your Phone Number" className="input input-bordered w-full max-w-xs"
                                name='phoneNumber' />

                        </div>
                        <div className="form-control w-full max-w-xs my-2 ">
                            <textarea type="text" placeholder="Enter your Educational background" className="input input-bordered w-full max-w-xs"
                                name='phoneNumber' >
                            </textarea>

                        </div>
                        <input className='text-white btn-primary btn w-full max-w-xs my-2' value="Add" type="submit" />
                    </form>
                </div>
            </div>
        </div>

    );
};

export default MyProfile;