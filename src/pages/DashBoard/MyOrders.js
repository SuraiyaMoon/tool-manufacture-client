import { signOut } from 'firebase/auth';
import React from 'react';
import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import OrderRow from './OrderRow';
import Loading from '../Shared/Loading'

const MyOrders = () => {

    const [user, loading] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            const email = user?.email;
            fetch(`http://localhost:5000/orderByEmail?email=${email}`, {
                method: "GET",
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        navigate('/home')
                        signOut(auth)

                    }


                    return res.json()
                })
                .then(data => {


                    setOrders(data)
                })
        }

    }, [user])
    if (loading) {
        return <Loading></Loading>
    }



    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Total price</th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) =>
                            <OrderRow
                                key={index}
                                order={order}
                                index={index}
                            ></OrderRow>
                        )}

                    </tbody>
                </table>
            </div>



        </div>
    );
};

export default MyOrders;