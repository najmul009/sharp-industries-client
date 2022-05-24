import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Common/Loading';
import OrderRow from './OrderRow';

const MyOrder = () => {
    const navigate = useNavigate()
    const [user] = useAuthState(auth);
    const [confirmModal, setConfirmModal] = useState(null);
    const { isLoading, error, data,refetch } = useQuery(['myorders'], () =>
        fetch(`http://localhost:5000/myorders?email=${user.email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    navigate('/login');
                    return;
                }
                return res.json()
            })
            
    );
    if (isLoading) {
        return <Loading></Loading>
    }
    let fetchError;
    if (error) {
        fetchError = <p className='text-red-500 text-5xl'><small>{error?.message}</small></p>
    }
    return (
        <div>
            <h1 className='text-center text-secondary text-2xl my-5'>My Orders</h1>
            {fetchError}
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Model</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th>Cancel Order</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((order,index) => <OrderRow
                            key={order._id}
                            index={index}
                            order={order}
                            refetch={refetch}
                            setConfirmModal={setConfirmModal}
                            ></OrderRow>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;