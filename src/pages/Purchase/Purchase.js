import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import usePartDetail from '../../Hooks/usePartDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import 'react-toastify/dist/ReactToastify.css';





const Purchase = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [part] = usePartDetail(id);
    const [user] = useAuthState(auth);
    const [quantity, setQuantity] = useState(null)


    const handlePlaceOrder = e => {
        e.preventDefault()

        const order = {
            email: user.email,
            tool: part.name,
            address: e.target.address.value,
            phone: e.target.phoneNumber.value,
            quantity: e.target.quantity.defaultValue,
            price: part.price * quantity
        }
        console.log(order)
        fetch('https://gentle-taiga-09287.herokuapp.com/order', {
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
                    navigate('/dashboard')

                }
            })
    }

    const handleIncrease = e => {
        e.preventDefault()
        if (quantity === part.availableQuantity) {
            alert(`You cant order more than available Quantity ${part.availableQuantity} `)

        }
        else {
            setQuantity(quantity + 1)
        }
    }
    const handleDecrease = e => {
        e.preventDefault()
        if (quantity <= part.minimumQuantity) {
            alert(`You have to order at least ${part.minimumQuantity} piece `)

        }
        else {
            setQuantity(quantity - 1)
        }
    }

    useEffect(() => {

        setQuantity(part.minimumQuantity)
    }, [part.minimumQuantity])


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
                                    <button 
                                        onClick={(e) =>
                                            handleIncrease(e)
                                        }
                                        className="btn btn-default m-2"><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></button>
                                    <input name='quantity' type="number" value={quantity} className="input input-bordered w-full m-2 max-w-xs" readOnly />
                                    <button onClick={(e) =>
                                        handleDecrease(e)
                                    }
                                        className="btn btn-default m-2"><FontAwesomeIcon icon={faMinus}></FontAwesomeIcon></button>

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