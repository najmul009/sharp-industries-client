import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ order, refetch, setConfirmModal }) => {
    const { productName, orderQuantity, totalAmount, _id } = order
    const cancelOrder = () => {
        fetch(`http://localhost:5000/cancelorder/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to cancel order');
                }
                return res.json()
            })
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    setConfirmModal(null)
                    refetch();
                    toast.success(`Order cancel Successfully`);
                }

            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are you sure you want to cancel this order!</h3>
                    <p class="py-2">Product Name: <span className='text-neutral'>   {productName}</span></p>
                    <p class="py-2">Order Quantity: <span className='text-orange-500'> {orderQuantity} pis</span></p>
                    <p class="py-2">Total Price:<span className='text-orange-500'> ${totalAmount}</span> </p>
                    <div class="modal-action">
                        <label for="delete-confirm-modal" class="btn">NO</label>
                        <button onClick={cancelOrder} class="btn btn-warning">YES</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;