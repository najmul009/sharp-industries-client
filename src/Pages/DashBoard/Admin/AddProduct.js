import React from 'react';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const handelAddProduct=event=>{
        event.preventDefault()
        const name = event.target.Model.value;
        const brand = event.target.Brand.value;
        const available = event.target.Stock.value;
        const price = event.target.Price.value;
        const minimum = event.target.Minimum.value;
        const description = event.target.Description.value;
        const image = event.target.imageUrl.value
       const newProduct = {
        name:name,
        brand: brand,
        minimum: minimum,
        available: available,
        price: price,
        img: image,
        description: description
       }
       fetch('https://calm-anchorage-26562.herokuapp.com/addproduct',{
           method: 'POST',
           headers:{
               'content-type': 'application/json',
               'authorization': `Bearer ${localStorage.getItem('accessToken')}`
           },
           body: JSON.stringify(newProduct)
       })
       .then(res=>res.json())
       .then(data=>{
           if(data.success){
               toast('product added successfuly')
               event.target.reset()
           }
           else{
               toast.error('something has worng plase try again')
           }
       })
    }
    return (
        <div className='bg-base-200'>
            <h1 className='text-3xl border-b-4 p-3 border-accent'>Add a product <div className="badge bg-green-500">online</div></h1>
            <form onSubmit={handelAddProduct} className='px-3 lg:px-20 flex flex-col '>

                <div className='flex flex-col lg:flex-row justify-between'>
                    <div className='w-full'>

                        <div className="form-control w-full max-w-xs mt-2">
                            <label className="label">
                                <span className="label-text font-bold">Model Name</span>
                            </label>
                            <input name='Model' required type="text" placeholder="Model Name" className="input input-bordered rounded-none w-full max-w-xs" />

                        </div>

                        <div className="form-control w-full max-w-xs mt-2">
                            <label className="label">
                                <span className="label-text font-bold">Brand Name</span>
                            </label>
                            <input name='Brand' required type="text" placeholder="Brand Name" className="input input-bordered rounded-none w-full max-w-xs" />

                        </div>


                        <div className="form-control w-full max-w-xs mt-2">
                            <label className="label">
                                <span className="label-text font-bold">Stock Quantity</span>
                            </label>
                            <input name='Stock' required type="number" placeholder="Stock Quantity" className="input input-bordered rounded-none w-full max-w-xs" />

                        </div>


                        <div className="form-control w-full max-w-xs mt-2">
                            <label className="label">
                                <span className="label-text font-bold">Price per unit</span>
                            </label>
                            <input name='Price' required type="number" placeholder="$$" className="input input-bordered rounded-none w-full max-w-xs" />

                        </div>


                        <div className="form-control w-full max-w-xs mt-2">
                            <label className="label">
                                <span className="label-text font-bold">Minimun order qunatity</span>
                            </label>
                            <input name='Minimum' required type="number" placeholder="Minimun order qunatity" className="input input-bordered rounded-none w-full max-w-xs" />

                        </div>
                    </div>

                    <div  className='w-full'>
                        <div className="form-control w-full max-w-xs mt-2">
                            <label className="label">
                                <span className="label-text font-bold">Description</span>
                            </label>

                            <textarea name="Description" id="" cols="30" rows="8" placeholder='Description' className='p-3 w-full max-w-xs'></textarea>
                        </div>

                        
                        <div className="form-control w-full max-w-xs mt-2">
                            <label className="label">
                                <span className="label-text font-bold">Add a photo url</span>
                            </label>
                            <input name='imageUrl' required type="url" placeholder="photo url" className="input input-bordered rounded-none w-full max-w-xs" />

                        </div>

                        <div  className="border-dashed  border-4 border-neutral my-5 w-7/12">
                        <h1 className='bg-base-300 p-3 font-bold'>Upload a product cover image</h1>
                        <input disabled type="file" name="image" id="" className='p-4' />
                        </div>
                    </div>
                </div>

                <button type="submit" className='btn btn-netural w-1/2 my-5 mx-auto'>Add</button>
            </form>
        </div>
    );
};

export default AddProduct;