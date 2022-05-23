import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Order = () => {
    const [user] = useAuthState(auth);
    const handleSubmit = event => {
        event.preventDefault()
        console.log('lkdsjdslkda');
    };
    return (
        <div className='bg-base-200 px-4 lg:px-20'>
            <h1 className='py-4 text-neutral'>Tools  {'>'}  Shop  {'>'}  Product  {'>'}  Sneakers</h1>
            <div className='flex  bg-base-100 '>
                <div>
                    <img className='p-4' src="https://s.alicdn.com/@sc04/kf/HTB1nPXTBH5YBuNjSspo762eNFXa0.png_300x300.png" alt="" />
                </div>
                <div className='w-5/12 p-4 px-4'>
                    <h1 className='text-xl'>Running Sneakers White Color Shoes Casual Lace-up Winter and Summer Men's Shoes</h1>
                    <h1 className='my-3 text-2xl '>Model: <span className='text-neutral'>LY-Z1601</span> </h1>
                    <h1 className='my-3 text-xl '>Brand: <span className='text-primary'>Xperst</span></h1>
                    <h1 className='my-3 text-xl '>Price per unit: <span className='text-orange-500'>$100</span></h1>
                    <h1 className='my-3 text-xl '>Minimum quantity: <span className='text-orange-500'>10 pis</span></h1>
                    <h1 className='my-3 text-xl '>Available quantity: <span className='text-orange-500'>1000 pis</span></h1>
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
                                    type="number"
                                    name='quantity'
                                    className="input input-bordered w-full max-w-xs"
                                    placeholder='minimum 10'
                                    />
                                    
                            </div>


                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-bold text-white">Total Amount</span>
                                </label>
                                <input
                                    type="number"
                                    name='amount'
                                    disabled
                                    className="input input-bordered w-full max-w-xs"
                                    value={user?.email}
                                    />
                            </div>


                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-bold text-white">Address</span>
                                </label>
                                <input
                                    type="text"
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
                                    name='phone'
                                    className="input input-bordered w-full max-w-xs"
                                    />
                            </div>
                            <input className='btn mt-4 w-full max-w-xs' type="submit" value="Place Order" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;