import React from 'react';
import notFound from '../../assets/notFound.jpg'
const NotFound = () => {
    return (
        <div className='text-center'>
            <img className='w-full' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;