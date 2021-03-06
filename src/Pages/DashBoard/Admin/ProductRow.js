import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProductRow = ({ product, index, setConfirmModal, refetch }) => {
    const { name, brand, minimum, available, price, img, _id } = product;
    const shipping = () => {
    
    }
    return (
        <tr className="hover">
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{brand}</td>
            <td>{price}</td>
            <td>{minimum}</td>
            <td>{available}</td>


            <td>
                <button onClick={shipping} className='btn btn-sm btn-naturel'>Edit</button>
            </td>

            <td>
                <label onClick={() => setConfirmModal(product)} for="delete-confirm-modal" className="btn btn-sm modal-button btn-warning ">Delete</label >

            </td>
        </tr>
    );
};

export default ProductRow;