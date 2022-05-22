import React, { useEffect } from 'react';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Common/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import google from '../../assets/google.png'
// import useToken from '../../Hooks/useToken';

const Login = () => {
    const [user ] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle,gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        eUser,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    // const [token] = useToken(user || gUser ||eUser);
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    useEffect(()=>{
        if(user || gUser ||eUser){
            navigate(from, { replace: true })
        };
    },[user,gUser,eUser,from,navigate])
    let signInError;
    if (loading || gLoading) {
        return <Loading></Loading>
    }
    
    if(error || gError){
        signInError= <p className='text-red-500'><small>{error?.message || gError?.message }</small></p>
    };
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
    };
    return (
        <div className='flex  h-screen justify-center items-center '>
            <div className="card w-96 bg-base-100  text-center rounded-md border-2  border-gray-300">
                <div className="card-body">
                    <h2 className='text-center font-bold text-3xl fnt-os'>Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            
                            <input 
                            type="email" 
                            placeholder="Your Email" 
                            className="box w-full max-w-xs"
                            {...register("email", {
                                required:{
                                    value:true,
                                    message:'Email is Required'
                                },
                                pattern: {
                                    value:/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message:'Provied a valid email'
                                }
                            })}
                            />
                            <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                           
                            <input 
                            type="password" 
                            placeholder="Password" 
                            className="box w-full max-w-xs"
                            {...register("password", {
                                required:{
                                    value:true,
                                    message:'Provied Your Password'
                                },
                                minLength: {
                                    value:6,
                                    message:'Password Must be 6 characters or longer'
                                }
                            })}
                            />
                            <label className="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                
                            </label>
                        </div>
                        {signInError}
                        <input className='btn w-full max-w-xs mt-5' type="submit" value="Login"/>
                    </form>
                    <p><small>New to Doctors Portal? <Link className='text-primary' to="/signup">Create New Account</Link></small></p>
                    <div className="divider">OR</div>

                    <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-accent w-full max-w-xs">
                        <img className='w-8 mr-3' src={google} alt="" />
                        SignInWithGoogle</button>
                </div>
            </div>
        </div>
    );
};

export default Login;