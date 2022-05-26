import React from 'react';
import me from '../../assets/me.png'
import server from '../../assets/server.png'
import uiux from '../../assets/uiux.png'
import web from '../../assets/web.png'
import demo1 from '../../assets/demo-1.JPG'
import demo2 from '../../assets/demo-2.JPG'
import demo3 from '../../assets/demo-3.JPG'
import { Link } from 'react-router-dom';


const PortFolio = () => {
    return (
        <div className='bg-[#000000] '>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <img src={me} className="max-w-sm border-4 border-primary basis-1/2" alt='' />
                    <div className='basis-1/2'>
                        <h1 className="text-xl font-bold text-primary">Hello!</h1>
                        <h1 className="text-5xl my-10 text-white ">I Am <span className='font-bold border-r-2 px-2 border-white'>Najmul Hossain</span> </h1>
                        <p className='text-white'>I'm a Front-End Developer.
                            I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.
                            <br />
                            Let's make something special.</p>
                        <button className='btn btn-primary my-5 rounded-full px-10'>Hair ME</button>
                    </div>
                </div>
            </div>


            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse ">

                    <div className='basis-1/2 ml-20'>

                        <h1 className="text-3xl my-10 text-white ">About ME </h1>
                        <p className='text-base-300'>Passionate to work as a MERN Stack Web Developer for a software firm where I can leverage my talents in Web Design, Front-End and Back-End Web Development to give excellent customer service</p>
                        <div className='my-10 flex '>
                            <div className='text-xl text-white grid gap-2 pr-5'>
                                <h1>Name</h1>
                                <h1>Age</h1>
                                <h1>Email</h1>
                                <h1>Address</h1>
                                <h1>Phone</h1>
                            </div>
                            <div className='text-sm text-base-300 grid gap-4 mt-1'>
                                <h1>: Najmul Hossain</h1>
                                <h1>: 22</h1>
                                <h1>: najmul.tk16@gmail.com</h1>
                                <h1>: Pallabi,Mirpur Dhaka</h1>
                                <h1>: +8801878538321</h1>
                            </div>
                        </div>
                    </div>
                    <img src={me} className="max-w-sm border-4 border-primary basis-1/2" alt='' />
                </div>
            </div>

            <h1 className='text-center my-10 text-3xl font-bold text-white'>My Awesome <span className='text-primary' >Services</span></h1>


            <div className='cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-20 gap-5 '>

                <div className="card  bg-accent shadow-xl hover:bg-primary">
                    <div className="card-body w-96 text-white">
                        <img className='w-20' src={web} alt="" />
                        <h2 className="card-title my-3">Web Development</h2>
                        <p>Fast load times and lag free interaction, my highest priority.</p>

                    </div>
                </div>



                <div className="card  bg-accent shadow-xl hover:bg-primary">
                    <div className="card-body w-96 text-white">
                        <img className='w-20' src={uiux} alt="" />
                        <h2 className="card-title my-3">UI/UX Design</h2>
                        <p>Strong preference for easy to use, intuitive UX/UI.</p>

                    </div>
                </div>



                <div className="card  bg-accent shadow-xl hover:bg-primary">
                    <div className="card-body w-96 text-white">
                        <img className='w-20' src={server} alt="" />
                        <h2 className="card-title my-3">Strong Backend</h2>
                        <p>Websites don't have to be static, I love making pages come to life.</p>

                    </div>
                </div>



            </div>


            <div className='text-center'>
                <h1 className='mt-20 my-10 text-3xl font-bold text-white'>My  <span className='text-primary' >Skils</span></h1>
                <h1 className='text-white text-xl my-3 font-bold'>HTML : <progress className="progress progress-warning w-96 h-5" value="100" max="100"></progress> </h1>

                <h1 className='text-white text-xl my-3 font-bold'>CSS : <progress className="progress progress-warning w-96 h-5" value="100" max="100"></progress> </h1>

                <h1 className='text-white text-xl my-3 font-bold'>JavaScript : <progress className="progress progress-warning w-96 h-5" value="80" max="100"></progress> </h1>

                <h1 className='text-white text-xl my-3 font-bold'>React JS : <progress className="progress progress-warning w-96 h-5" value="80" max="100"></progress> </h1>

                <h1 className='text-white text-xl my-3 font-bold'>GitHub : <progress className="progress progress-warning w-96 h-5" value="80" max="100"></progress> </h1>

                <h1 className='text-white text-xl my-3 font-bold'>Tailwindcss : <progress className="progress progress-warning w-96 h-5" value="80" max="100"></progress> </h1>
                <h1 className='text-white text-xl my-3 font-bold'>Bootstrap : <progress className="progress progress-warning w-96 h-5" value="80" max="100"></progress> </h1>

                <h1 className='text-white text-xl my-3 font-bold'>Node JS : <progress className="progress progress-warning w-96 h-5" value="65" max="100"></progress> </h1>


                <h1 className='text-white text-xl my-3 font-bold'>Express : <progress className="progress progress-warning w-96 h-5" value="65" max="100"></progress> </h1>


                <h1 className='text-white text-xl my-3 font-bold'>MongoDB : <progress className="progress progress-warning w-96 h-5" value="65" max="100"></progress> </h1>



            </div>

            <h1 className='text-center mt-20 my-10 text-3xl font-bold text-white'>My  <span className='text-primary' >Projects</span></h1>
            <div className='cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-20 gap-5 py-10'>
                <div className="card w-96 bg-base-100 shadow-xl h-fit">
                    <figure><img src={demo1} alt="Shoes" /></figure>
                    <Link to='https://purepd.netlify.app/' className="btn btn-primary">CheckOut</Link>
                </div>


                <div className="card w-96 bg-base-100 shadow-xl h-fit">
                    <figure><img src={demo2} alt="Shoes" /></figure>
                    <Link to='https://rocky-fitness-44935.web.app/' className="btn btn-primary">CheckOut</Link>
                </div>


                <div className="card w-96 bg-base-100 shadow-xl h-fit">
                    <figure><img src={demo3} alt="Shoes" /></figure>
                    <Link to='https://leptop-db.firebaseapp.com/' className="btn btn-primary">CheckOut</Link>

                </div>
            </div>

            <div className="h-96 bg-primary flex flex-col items-center justify-center">
                <h1 className='text-center text-3xl font-bold'>Contact <span className='text-white'>Me</span></h1>

                <div className="form-control ">
                    <label className="label">
                        <span className="label-text font-bold">Your Email</span>
                    </label>
                    <label className="input-group">
                        <span>Email</span>
                        <input type="text" placeholder="info@site.com" className="input input-bordered" />
                        <input className='btb btn-accent p-2' type="submit" value="Send" />
                    </label>
                </div>
            </div>
        </div>
    );
};

export default PortFolio;