import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import usePartDetail from '../../Hooks/usePartDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import 'react-toastify/dist/ReactToastify.css';



const Purchase = () => {


    const { id } = useParams()
    const [part, setPart] = usePartDetail(id);
    const [user, loading] = useAuthState(auth);
    const minimumQuantity = part.minimumQuantity;
    // const [quantity, setQuantity] = useState(minimumQuantity)
    // const increaseQuantity = () => {
    //     let quantity = minimumQuantity + 1;
    //     setQuantity(quantity)
    // }
    const increaseQuantity = () => {
        const minimumQuantity = part.minimumQuantity;
        let availableQuantity = part.availableQuantity;
        let quantity = part.minimumQuantity;
        if (quantity < minimumQuantity || quantity > availableQuantity) {
            alert(`You cannnot order more or less than minimum and availableQuantity`)
        }
    }





    const handlePlaceOrder = e => {
        e.preventDefault()

        const order = {
            email: user.email,
            tool: part.name,
            address: e.target.address.value,
            phone: e.target.phoneNumber.value,
            quantity: e.target.quantity.defaultValue
        }
        console.log(order)
        fetch('http://localhost:5000/order', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(order)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    toast('Your order is placed.Please make your payment');

                }
            })
    }





    return (
        <div className=' mx-auto my-3'>

            <div className='flex justify-center items-center h-screen bg-blue-50'>
                <div className="card w-96  bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2>Please order: {part.name}</h2>
                        <form className='justify-center' onSubmit={handlePlaceOrder} >
                            <div className="form-control w-full max-w-xs my-2">
                                <input type="text" placeholder="Write your Name"
                                    value={user.displayName} name='name' className="input input-bordered w-full max-w-xs" readOnly />

                            </div>
                            <div className="form-control w-full max-w-xs my-2">
                                <input type="text" placeholder="Write your Name" value={part.name} className="input input-bordered w-full max-w-xs" readOnly />

                            </div>
                            <div className="form-control w-full max-w-xs my-2">

                                <div className='flex '>
                                    <button onClick={increaseQuantity}

                                        className="btn btn-default m-2"><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></button>
                                    <input name='quantity' type="number" defaultValue={1} className="input input-bordered w-full m-2 max-w-xs" readOnly />
                                    <button className="btn btn-default m-2"><FontAwesomeIcon icon={faMinus}></FontAwesomeIcon></button>

                                </div>

                            </div>
                            <div className="form-control w-full max-w-xs my-2">
                                <input type="email" value={user.email} className="input input-bordered w-full max-w-xs"
                                    name='email' readOnly />

                            </div>
                            <div className="form-control w-full max-w-xs my-2">
                                <input type="text" placeholder="Enter your Address" className="input input-bordered w-full max-w-xs"
                                    name='address' required />

                            </div>
                            <div className="form-control w-full max-w-xs my-2 ">
                                <input type="text" placeholder="Enter your Phone Number" className="input input-bordered w-full max-w-xs"
                                    name='phoneNumber' required />

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