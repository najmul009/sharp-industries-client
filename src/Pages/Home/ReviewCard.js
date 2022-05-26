import React from 'react';

const ReviewCard = ({feedback}) => {
    const {name,img,review} = feedback;
    return (
        <div class="card bg-base-100 shadow-xl">
            <div class="avatar mt-2 justify-center ">
                <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2  ">
                    <img src={img?img:"https://api.lorem.space/image/face?hash=33791"} alt='' />
                </div>
            </div>
            <div class="card-body items-center text-center">
                <h2 class="card-title text-2xl fnt-i">{name}</h2>
                <p className='text-sm'>{review}</p>
                
            </div>
        </div>
    );
};

export default ReviewCard;