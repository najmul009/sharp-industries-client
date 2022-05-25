import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ index, user, refetch ,setConfirmModal}) => {
    const { email} = user;
    const makeAdmin=()=>{
        fetch(`http://localhost:5000/makeadmin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if(res.status === 403){
                    toast.error('Failed to Make an admin');
                }
                return res.json()})
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`);
                }

            })
    }
    
    return (
        <tr class="hover">
            <td>{index + 1}</td>
            <td>{user.email}</td>
            <td>{(user.role!== 'admin')? <button onClick={makeAdmin} class="btn btn-accent">Make Admin</button> : <span className="text-green-500 font-bold">Admin</span>}</td>
            <td><label onClick={() => setConfirmModal(user)} for="delete-confirm-modal" class="btn modal-button btn-warning ">Delete</label ></td>
        </tr>
    );
};

export default UserRow;