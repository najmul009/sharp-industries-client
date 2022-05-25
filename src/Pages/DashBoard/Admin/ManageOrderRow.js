import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const ManageOrderRow = ({ order, index, setConfirmModal }) => {
    const { userEmail, productName, orderQuantity, totalAmount, brand, img, paid, _id } = order;
    const [shipp, setShipp] = useState(false)
    const shipping= ()=>{
        setShipp(true)
        toast('Product sent for shippment')
    }
    return (
        <tr class="hover">
            <th>{index + 1}</th>
            <td>{userEmail}</td>
            <td>{productName}</td>
            <td>{brand}</td>
            <td>{orderQuantity}</td>
            <td>{totalAmount}</td>


            <td>{
                shipp? 
                <span className="text-green-500">on shippment</span>
                :
                ((totalAmount && !order.paid) ? <span className="text-red-500 font-bold ">Not Paid</span> : 
                <button onClick={shipping} className='btn btn-naturel'>Shipp</button>)
           
                    
            }</td>

            <td>{
                order.paid ? <span className="text-green-500">Already Paid!</span> : <label  onClick={() => setConfirmModal(order)} for="delete-confirm-modal" class="btn modal-button btn-warning ">Cancel</label >
            }

            </td>
        </tr>
    );
};

export default ManageOrderRow;