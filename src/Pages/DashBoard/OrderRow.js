import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const OrderRow = ({ order, index, setConfirmModal }) => {
    const [trnscationID,setTrnscationID] = useState('')
    const {productName,orderQuantity,totalAmount,_id}= order;
    
    return (
        <tr class="hover">
            <th>{index + 1}</th>
            <td>{productName}</td>
            <td>{orderQuantity}</td>
            <td>{totalAmount}</td>
            <td>{
                order.paid? <span className="text-red-500">You can't cancel after pay</span> : <label onClick={() => setConfirmModal(order)} for="delete-confirm-modal" class="btn modal-button btn-warning ">Cancel</label >
                }
                
            </td>
            <td>{
                (totalAmount && !order.paid) ? <Link to={`/payment/${_id}`}>
                    <button className='btn btn-naturel'>Pay</button>
                </Link>
                    : <span className="text-green-500 font-bold ">Paid</span>
            }</td>
            <td>
               {order.transactionId ?<span className="text-green-500  "> {order.transactionId}</span>:<span className="text-red-500 font-bold ">Null</span>}
            </td>
        </tr>
    );
};

export default OrderRow;