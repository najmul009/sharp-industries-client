import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ bokingData }) => {
    const {userName,userEmail, productName, orderQuantity, totalAmount,brand,img,_id } = bokingData;
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState()
    const [clientSecret, setClientSecret] = useState('');
    const [success,setSuccess] = useState('')
    const [paymentData,setPaymentData] = useState('')
    const [processing,setProcessing] = useState(false)

    
    useEffect(() => {
        fetch('https://calm-anchorage-26562.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({totalAmount})
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret)
                }
            })
    }, [totalAmount])
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
        setCardError(error?.message || "");

        //payment confirmation
        setProcessing(true)
        const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: userName,
                  email: userEmail
                 
                },
              },
            },
          );
            if(confirmError){
                setProcessing(false)
                setCardError(confirmError.message)
            }else{
                setCardError('')
                setSuccess('Congratulation! Your paymnet is Success.')
                setPaymentData(paymentIntent.id);
                
                const payment={
                    orderId: _id,
                    transactionId: paymentIntent.id
                }
                fetch(`https://calm-anchorage-26562.herokuapp.com/order/${_id}`,{
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json',
                        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(payment)
                })
                .then(res=>res.json())
                .then(data=>{
                    setProcessing(false)
                })
            }
    }
    return (
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
            <button className='btn btn-natural mt-4 w-full ' type="submit" disabled={!stripe || !clientSecret }>
                Pay
            </button>
            {
                processing && <p className='text-red-500'>Loading..</p>
            }
            {
                cardError && <p className='text-red-500'> {cardError}</p>
            }
            {
                success && <p className='text-green-500 text-xl'> {success}</p>
            }
            {
                paymentData && <p className='text-secondary text-xl'>transaction ID: <span className='text-red-500'> {paymentData}</span></p>
            }
        </form>
    );
};

export default CheckoutForm;