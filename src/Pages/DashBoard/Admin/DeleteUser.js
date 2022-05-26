import React from 'react';
import { toast } from 'react-toastify';

const DeleteUser = ({ user, refetch, setConfirmModal }) => {
    const { email,role } = user;
    const deleteUser=()=>{
        console.log(email);
        fetch(`https://calm-anchorage-26562.herokuapp.com/deleteuser/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if(res.status === 403){
                    toast.error('Failed to Delete user');
                }
                return res.json()})
            .then(data => {
                if (data.deletedCount > 0) {
                    setConfirmModal(null)
                    refetch();
                    toast.success(`User deleted Successfully`);
                }

            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-500">Are you sure you want to delete the user!</h3>
                    <p className="py-2">User Email: <span className='text-neutral'>   {email}</span></p>
                    <p className="py-2">Role: <span className='font-bold '> {role?'Admin':'Normal User'}</span></p>
                    <div className="modal-action">
                        <label for="delete-confirm-modal" className="btn">NO</label>
                        <label onClick={deleteUser} className="btn btn-warning">YES</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteUser;