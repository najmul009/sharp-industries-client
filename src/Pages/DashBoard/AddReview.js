import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth)
    const handelReview = (event) => {
        event.preventDefault()
        const review = event.target.review.value;
        const userReview = {
            name: user?.displayName,
            img: user?.photoURL,
            review: review
        }

        fetch('https://calm-anchorage-26562.herokuapp.com/addreview', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(userReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast('Thanks for giving your feedback.')
                    event.target.reset()
                }
                else {
                    toast.error('something has worng plase try again')
                }
            })
    }
    return (
        <div className='h-screen flex justify-center items-center bg-base-200'>
            <div className="card  bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Hello {user?.displayName}!</h2>
                    <p>Share Your experiences and feedback to us.So that we can improve our services for you.</p>
                    <form onSubmit={handelReview}>
                        <textarea name="review" id="" cols="60" rows="10" className='box-lg' placeholder="Type here"></textarea>
                        <br />
                        <div className="rating my-5">
                            <p className='font-bold'>Rating :</p>
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <br />
                        <button className="btn btn-neutral" type='submit' >Submit</button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddReview;