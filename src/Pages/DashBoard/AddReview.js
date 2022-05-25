import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth)
    const handelReview=(event)=>{
        event.preventDefault()
        const review =event.target.review.value;
        const userReview = {
            name: user?.displayName,
            img: user?.photoURL,
            review: review
        }

        fetch('http://localhost:5000/addreview',{
           method: 'POST',
           headers:{
               'content-type': 'application/json',
               'authorization': `Bearer ${localStorage.getItem('accessToken')}`
           },
           body: JSON.stringify(userReview)
       })
       .then(res=>res.json())
       .then(data=>{
           if(data.success){
               toast('Thanks for giving your feedback.')
               event.target.reset()
           }
           else{
               toast.error('something has worng plase try again')
           }
       })
    }
    return (
        <div className='h-screen flex justify-center items-center bg-base-200'>
            <div class="card  bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Hello {user?.displayName}!</h2>
                    <p>Share Your experiences and feedback to us.So that we can improve our services for you.</p>
                    <form onSubmit={handelReview}>
                    <textarea  name="review" id="" cols="60" rows="10" className='box-lg' placeholder="Type here"></textarea>
                    <br />
                    <button class="btn btn-neutral" type='submit' >Submit</button>
                    </form>
                  
                </div>
            </div>
        </div>
    );
};

export default AddReview;