import React from 'react';
import { Link } from 'react-router-dom';

const OrderRow = ({ order, index, setConfirmModal }) => {
    const {productName,orderQuantity,totalAmount,_id}= order
    return (
        <tr class="hover">
            <th>{index + 1}</th>
            <td>{productName}</td>
            <td>{orderQuantity}</td>
            <td>{totalAmount}</td>
            <td>
                <label onClick={() => setConfirmModal(order)} for="delete-confirm-modal" class="btn modal-button btn-warning ">Cancel</label>
            </td>
            <td>{
                (totalAmount && !order.paid) ? <Link to={`/dashboard/payment/${_id}`}>
                    <button className='btn btn-naturel'>Pay</button>
                </Link>
                    : "Paid"
            }</td>
        </tr>
    );
};

export default OrderRow;