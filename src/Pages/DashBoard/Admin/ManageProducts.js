import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Common/Loading';
import DeleteConfirmModal from '../DeleteConfirmModal';
import DeleteProduct from './DeleteProduct';
import ProductRow from './ProductRow';


const ManageProducts = () => {
    const navigate = useNavigate()
    const [user] = useAuthState(auth);
    const [confirmModal, setConfirmModal] = useState(null);
    const { isLoading, error, data,refetch } = useQuery(['tools'], () =>
        fetch(`http://localhost:5000/tools`)
            .then(res =>res.json())          
    );
    if (isLoading) {
        return <Loading></Loading>
    }
    let fetchError;
    if (error) {
        fetchError = <p className='text-red-500 text-3xl'><small>{error?.message}</small></p>
    }
    return (
        <div>
            <h1 className='text-center text-secondary text-2xl my-5'>Manage Products</h1>
            {fetchError}
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr className='mark'>
                            <th>#</th>
                            <th>Model</th>
                            <th>Brand</th>
                            <th>Price</th>
                            <th>Minimum <br /> quantity</th>
                            <th>Available <br /> quantity</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((product,index) => <ProductRow
                            key={product._id}
                            index={index}
                            product={product}
                            setConfirmModal={setConfirmModal}
                            refetch={refetch}
                            ></ProductRow>)
                        }


                    </tbody>
                </table>
            </div>
            {confirmModal && <DeleteProduct 
            product={confirmModal}
            refetch={refetch}
            setConfirmModal={setConfirmModal}
            ></DeleteProduct>}
        </div>
    );
};

export default ManageProducts;