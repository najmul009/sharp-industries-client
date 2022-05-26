import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <div className='bg-base-200'>
                <h1 className='text-3xl border-b-4 p-3 border-accent'>My Profile <div class="badge bg-green-500">online</div>  
                </h1>




                <div className='flex justify-between'>
                    <div className='w-96 '>
                        <img className='h-56 m-5' src={user.photoURL || "https://api.lorem.space/image/face?hash=33791"} alt="" />

                        <div className='p-5'>
                            <h1 className='border-b border-accent'>Skils</h1>
                            <p className='font-bold text-xl'>Branding</p>
                            <p className='font-bold text-xl'>UI/UX</p>
                            <p className='font-bold text-xl'>Wev-Development</p>
                            <p className='font-bold text-xl'>Print \& Editorial </p>
                        </div>

                        <div className='p-5'>
                            <h1 className='border-b border-accent'>Woks</h1>
                            <div className='my-3'>
                                <p className='font-bold text-xl'>Spotify New York <div class="badge bg-neutral">Primary</div></p>
                                <p>170 Willam Street</p>
                                <p>New York, NY 10038-78 212-312</p>
                            </div>

                            <div className='my-3'>
                                <p className='font-bold text-xl'>TechLand BD <div class="badge bg-neutral">Secondary</div></p>
                                <p>Multiplan Elephant Road</p>
                                <p>69, 71 New Elephant Road, Dhaka 1205</p>
                            </div>


                        </div>
                    </div>

                    <div className='w-full ml-10 p-5'>
                        <div>
                            <h1 className='text-2xl font-bold'>{user.displayName}
                                <div class="badge bg-neutral mx-3">Pro</div>
                            </h1>
                            <p className='text-neutral py-2'>Full Stack Devloper</p>

                            <div class="rating">
                                <p>Rating: </p>
                                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>

                        <div className='py-5'>
                            <h1 className='border-b border-accent font-bold'>Contact</h1>
                            <p className='py-2'>Phone--: <span className='text-neutral'> +1 242 231 2321</span> </p>
                            <p className='py-2'>Email-- : <span className='text-neutral'> {user.email}</span> </p>
                            <p className='py-2'>Address: <span className=''> 170 Willam Street, NY 10038-78 212-312</span> </p>
                            <p className='py-2'>Site--- : <span className='text-neutral'>https://web.programming-hero.com/</span> </p>
                            <p className='py-2'>Linkdin : <span className='text-neutral'>https://www.linkedin.com/in/najmul-hossain-753a961b8/</span> </p>
                            <p className='py-2'>GitHub-: <span className='text-neutral'>https://github.com/najmul009</span> </p>
                        </div>

                        <div className='py-5'>
                            <h1 className='border-b border-accent font-bold'>About</h1>
                            <p className='my-3'>The name's {user.displayName}. I am a tireless seeker of knowledge, occassional purveyor of wisdom and also, coincidentally, a graphic designer.</p>
                            <p className='my-3'>In as circuitous a reason as a philosopher is wont to offer, my school of thought is reliant on schooling my thought - thoroughly, regularly; keeping abreast of design, branding, advertising trends and solutions.</p>
                            <p className='my-3'>I am a graduate of the lauded design program at the prestigious California State University at Fullerton. I should hope my work reflects that.</p>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default MyProfile;