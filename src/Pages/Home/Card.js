import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({item}) => {
    const {name,price,minimum,img,description,_id} = item;
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p className='font-bold'>Price: <span className='text-red-500'>${price}</span> </p>
                <p className='font-bold'>Minimum Order:<span className='text-red-500'>{minimum}</span> pis</p>
                <div className="card-actions justify-end">
                    <Link to={`/order/${_id}`}>
                    <button className="btn btn-primary">Order Now</button>
                    </Link>
                    
                </div>
            </div>
        </div>
    );
};

export default Card;