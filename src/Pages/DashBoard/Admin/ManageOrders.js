import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Common/Loading';
import DeleteConfirmModal from '../DeleteConfirmModal';
import ManageOrderRow from './ManageOrderRow';

const ManageOrders = () => {
    const navigate = useNavigate()
    const [user] = useAuthState(auth);
    const [confirmModal, setConfirmModal] = useState(null);
    const { isLoading, error, data,refetch } = useQuery(['manageOrders'], () =>
        fetch(`https://calm-anchorage-26562.herokuapp.com/orders`, {
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
            <h1 className='w-fit mx-auto border-b-4  border-primary text-secondary text-2xl my-5 '>Manage Orders</h1>
            {fetchError}
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr className='mark'>
                            <th>#</th>
                            <th>User</th>
                            <th>Model</th>
                            <th>Brand</th>
                            <th>Quantity</th>
                            <th>Total$</th>
                            <th>Payment</th>
                            <th>Cancel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((order,index) => <ManageOrderRow
                            key={order._id}
                            index={index}
                            order={order}
                            setConfirmModal={setConfirmModal}
                            refetch={refetch}
                            ></ManageOrderRow>)
                        }


                    </tbody>
                </table>
            </div>
            {confirmModal && <DeleteConfirmModal 
            order={confirmModal}
            refetch={refetch}
            setConfirmModal={setConfirmModal}
            ></DeleteConfirmModal>}
        </div>
    );
};

export default ManageOrders;