import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const CheckoutForm = ({ order }) => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [startLoading, setStartLoading] = useState('');
    const [success, setSuccess] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const { price, email, _id } = order;
    useEffect(() => {
        fetch('https://gentle-taiga-09287.herokuapp.com/create-payment-intent', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price })

        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
                console.log(data)
            })
    }, [])


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {

            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }


        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });


        setCardError(error?.message || '')
        setSuccess('');
        setStartLoading(true);

        //confirm payment

        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user.displayName,
                        email: email,
                    },
                },
            },
        );
        if (intentError) {
            setCardError(intentError?.message)
            setStartLoading(false)

        }
        else {
            setCardError('')
            setTransactionId(paymentIntent.id)
            console.log(paymentIntent)
            const payment = {
                product: _id,
                transactionId: paymentIntent.id
            }

            fetch(`https://gentle-taiga-09287.herokuapp.com/order/${_id}`, {
                method: "PATCH",
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)

            })
                .then(res => res.json())
                .then(data => {
                    setStartLoading(false)
                    console.log(data)
                })
            setSuccess('Your payment is completed')
            navigate('/dashboard')
            toast.success(`${user.displayName} your Payment successfully placed`)
        }


    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-success btn-xs' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-error'>{cardError}</p>
            }
            {
                success && <div className='text-success'>
                    <p>{success}</p>
                    <p>Your Transaction id : <span className='font-bold'>{transactionId}</span> </p>
                </div>
            }

        </>
    );
};

export default CheckoutForm;