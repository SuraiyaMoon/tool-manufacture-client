import { signOut } from 'firebase/auth';
import React from 'react';
import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {

    const [user, loading] = useAuthState(auth);
    const [order, setOrder] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            const email = user?.email;
            fetch(`http://localhost:5000/order?email=${email}`, {
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


                    setOrder(data)
                })
        }

    }, [user])



    return (
        <div>
            <h3>{order.length}</h3>



        </div>
    );
};

export default MyOrders;