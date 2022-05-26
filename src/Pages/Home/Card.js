import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({item}) => {
    const {name,price,minimum,img,description,_id} = item;
    return (
        <div class="card card-compact  bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
                <p className='font-bold'>Price: <span className='text-red-500'>${price}</span> </p>
                <p className='font-bold'>Minimum Order:<span className='text-red-500'>{minimum}</span> pis</p>
                <div class="card-actions justify-end">
                    <Link to={`/order/${_id}`}>
                    <button class="btn btn-primary">Order Now</button>
                    </Link>
                    
                </div>
            </div>
        </div>
    );
};

export default Card;