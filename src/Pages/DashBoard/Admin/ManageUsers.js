import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Common/Loading';
import DeleteUser from './DeleteUser';
import UserRow from './UserRow';

const ManageUsers = () => {
    const navigate = useNavigate()
    const [confirmModal, setConfirmModal] = useState(null);
    const { isLoading, error, data: users, refetch } = useQuery('allusers', () =>
        fetch(`https://calm-anchorage-26562.herokuapp.com/allusers`,{
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
    if(isLoading){
        return <Loading></Loading>
    }
    let fetchError;
    if(error){
        fetchError = <p className='text-red-500 text-5xl'><small>{error?.message}</small></p>
    }
    return (
        <div>
            <h1 className='w-fit mx-auto border-b-4  border-primary text-secondary text-2xl my-5 '>All Users</h1>
            {fetchError}
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr className='mark'>
                            <th>#</th>
                            <th>User Email</th>
                            <th>User Role</th>
                            <th>Delete User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) => <UserRow
                            key={user._id}
                            user={user}
                            index={index}
                            refetch={refetch}
                            setConfirmModal={setConfirmModal}
                            ></UserRow>)
                        }


                    </tbody>
                </table>
            </div>
            {confirmModal && <DeleteUser 
            user={confirmModal}
            refetch={refetch}
            setConfirmModal={setConfirmModal}
            ></DeleteUser>}
        </div>
    );
};

export default ManageUsers;