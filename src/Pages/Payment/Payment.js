import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Common/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L13iKFgGFKU0rRKtMMneFMOGndvpd4RFxpTNdU0hnhpZjvwMVztihRFrOlKY5VIO93Xu9Zp7bAe0QwzXY37LM7j00D8U8G45y');

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/order/${id}`;

    const { data: orderInfo, isLoading } = useQuery(['payment', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    const { userName,userEmail, productName, orderQuantity, totalAmount,brand,img } = orderInfo;
    return (
        <div className='bg-base-200 h-screen flex justify-center items-center'>

            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Hello! {userName}</h2>
                    <p>You are paying fro <strong>{productName}</strong></p>
                    <p>Brand: <strong>{brand}</strong></p>
                    <p>Product quantiity: <strong className='text-red-700'> {orderQuantity}</strong> </p>
                    <p>Total Amount: <strong className='text-red-500'>${totalAmount}</strong></p>
                    <br />
                    <br />
                    <br />
                    <Elements stripe={stripePromise}>
                        <CheckoutForm bokingData={orderInfo}/>
                    </Elements>

                </div>

            </div>

        </div>
    );
};

export default Payment;