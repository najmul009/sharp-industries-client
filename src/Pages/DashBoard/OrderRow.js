import React from 'react';
import { Link } from 'react-router-dom';

const OrderRow = ({ order, index, setConfirmModal }) => {
    return (
        <tr class="hover">
            <th>{index + 1}</th>
            <td>{order.productName}</td>
            <td>{order.orderQuantity}</td>
            <td>{order.totalAmount}</td>
            <td>
                <label onClick={() => setConfirmModal(order)} for="delete-confirm-modal" class="btn modal-button btn-warning ">Cancel</label>
            </td>
            <td>{
                (order.totalAmount && !order.paid) ? <Link to={`/dashboard/payment/${order._id}`}>
                    <button className='btn btn-naturel'>Pay</button>
                </Link>
                    : "Paid"
            }</td>
        </tr>
    );
};

export default OrderRow;