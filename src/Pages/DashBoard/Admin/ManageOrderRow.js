import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const ManageOrderRow = ({ order, index, setConfirmModal,refetch }) => {
    const { userEmail, productName, orderQuantity, totalAmount, brand, img, paid, _id } = order;
    const shipping= ()=>{
        fetch(`https://calm-anchorage-26562.herokuapp.com/shipp/${_id}`,{
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json',
                        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                    },
                   
                })
                .then(res=>res.json())
                .then(data=>{                  
                    toast('Product sent for shippment')
                    refetch()
                })
        
    }
    return (
        <tr className="hover">
            <th>{index + 1}</th>
            <td>{userEmail}</td>
            <td>{productName}</td>
            <td>{brand}</td>
            <td>{orderQuantity}</td>
            <td>{totalAmount}</td>


            <td>{
               order.shippment? 
                <span className="text-green-500">on shippment...</span>
                :
                ((totalAmount && !order.paid) ? <span className="text-red-500 font-bold ">Not Paid</span> : 
                <button onClick={shipping} className='btn btn-sm btn-naturel'>Shipp</button>)
           
                    
            }</td>

            <td>{
                order.paid ? <span className="text-green-500">Already Paid!</span> : <label  onClick={() => setConfirmModal(order)} for="delete-confirm-modal" className="btn  btn-sm modal-button btn-warning ">Cancel</label >
            }

            </td>
        </tr>
    );
};

export default ManageOrderRow;