import React from 'react';
import { toast } from 'react-toastify';

const DeleteProduct = ({ product, refetch, setConfirmModal }) => {
    const { name, brand, minimum, available, price, img, _id } = product;
    const deleteProduct = () => {
        fetch(`http://localhost:5000/deletetool/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to delete product');
                }
                return res.json()
            })
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    setConfirmModal(null)
                    refetch();
                    toast.success(`Product Delete Successfully`);
                }

            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Are you sure you want to delete this product!</h3>
                    <p class="py-2">Product Name: <span className='text-neutral'>   {name}</span></p>
                    <p class="py-2">Brand: <span className=''> {brand} pis</span></p>
                    <p class="py-2">Available Quantity:<span className='text-orange-500'> {available}</span> </p>
                    <div class="modal-action">
                        <label for="delete-confirm-modal" class="btn">NO</label>
                        <label onClick={deleteProduct} class="btn btn-warning">YES</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteProduct;