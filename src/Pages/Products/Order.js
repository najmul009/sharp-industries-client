import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const Order = () => {
    const [user] = useAuthState(auth);
    const [product,setProduct] = useState({});
    const [orderQuantity,setOrderQuantity] = useState(null);
    const [totalPrice,setTotalPrice] = useState(null);
    const [error,setError] = useState('');
    const { id } = useParams();
    useEffect(()=>{
        const url = `http://localhost:5000/tools/${id}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])
    const {name,img,brand,minimum,price,description,available}= product;
    const updateAmount = event=>{
        const quantity = event.target.value;
        if(quantity>=minimum && quantity<=available){
            setOrderQuantity(quantity);
            const totalAmount = quantity*price;
            setTotalPrice(totalAmount)
            setError('')
        }else{
            setError('Please add minimum or available quantity')
        }
    }
    const handleSubmit = event => {
        event.preventDefault()
        const address = event.target.address.value;
        const phone = event.target.phone.value;
        const order = {
            
        }
        
    };
    console.log(orderQuantity,totalPrice);
    return (
        <div className='bg-base-200 px-4 lg:px-20'>
            <h1 className='py-4 text-neutral'>Tools  {'>'}  Shop  {'>'}  Product  {'>'}  {name}</h1>
            <div className='flex  bg-base-100 '>
                <div>
                    <img className='p-4' src={img} alt="" />
                </div>
                <div className='w-5/12 p-4 px-4'>
                    <h1 className='text-xl'>{description}</h1>
                    <h1 className='my-3 text-2xl '>Model: <span className='text-neutral'>{name}</span> </h1>
                    <h1 className='my-3 text-xl '>Brand: <span className='text-primary'>{brand}</span></h1>
                    <h1 className='my-3 text-xl '>Price per unit: <span className='text-orange-500'>${price}</span></h1>
                    <h1 className='my-3 text-xl '>Minimum Order quantity: <span className='text-orange-500'>{minimum} pis</span></h1>
                    <h1 className='my-3 text-xl '>Available quantity: <span className='text-orange-500'>{available} pis</span></h1>
                </div>

                <div className='bg-accent w-4/12 flex flex-col items-center'>
                    <h1 className='my-3 text-2xl text-center text-white py-3'>Order Summary</h1>
                    <div className="w-full max-w-xs ">
                        <form onSubmit={handleSubmit}>
                            {/* Email  */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-bold text-white">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name='email'
                                    disabled
                                    className="input input-bordered w-full max-w-xs"
                                    value={user?.email}
                                    />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-bold text-white">Quantity</span>
                                </label>
                                <input
                                onChange={updateAmount}
                                    type="number"
                                    name='quantity'
                                    required
                                    className="input input-bordered w-full max-w-xs font-bold"
                                    placeholder={`minimun order quantity ${minimum}`}
                                    />
                                    <label className="label">
                                    {error && <span className="label-text-alt text-red-500">{error}</span>}</label>
                                    
                            </div>


                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-bold text-white">Total Amount</span>
                                </label>
                                <input
                                    type="number"
                                    name='amount'
                                    disabled
                                    className="input input-bordered w-full max-w-xs font-bold "
                                    value={totalPrice}
                                    />
                            </div>


                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-bold text-white">Address</span>
                                </label>
                                <input
                                    type="text"
                                    required
                                    name='address'  
                                    className="input input-bordered w-full max-w-xs"
                                    />
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-bold text-white">Phone</span>
                                </label>
                                <input
                                    type="number"
                                    required
                                    name='phone'
                                    className="input input-bordered w-full max-w-xs"
                                    />
                            </div>
                            <input className={`${error?'disabled':''}btn mt-4 w-full max-w-xs`} type="submit" value="Place Order" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;