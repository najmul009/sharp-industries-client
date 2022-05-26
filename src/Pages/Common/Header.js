import React, { useEffect, useState } from 'react';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from './Loading';
import logo from '../../assets/logo.png'
const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const [userName,setUserName] = useState('')
    useEffect(()=>{
        if(user){

        const name = user.displayName;
        const myArray = name.split(" ");
        setUserName(myArray[0])
    }
    },[user])
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };

    if (loading) {
        return <Loading></Loading>
    }
    let signInError;
    if (error) {
        signInError = <p className='text-red-500'><small>{error?.message}</small></p>
    };
    
    
    return (
        <div className="navbar  lg:px-20 pt-5 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 fnt-os font-bold">
                        <li><Link to='/'>HOME</Link></li>
                        <li><Link to='/products'>PRODUCTS</Link></li>
                        <li><Link to='/protfolio'>PORTFOLIO</Link></li>
                        <li><Link to='/dashboard'>DashBoard</Link></li>
                        <li><Link to='/blogs'>Blogs</Link></li>

                    </ul>
                </div>
                <Link to='/' className="     normal-case text-xl">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="ml-96 navbar-center  hidden lg:flex">
                <ul className="menu menu-horizontal ml-20 p-0 fnt-os font-bold">
                    <li><Link to='/'>HOME</Link></li>
                    <li><Link to='/products'>PRODUCTS</Link></li>
                    <li><Link to='/protfolio'>PORTFOLIO</Link></li>
                    <li><Link to='/dashboard'>DashBoard</Link></li>
                    <li><Link to='/blogs'>Blogs</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                {signInError}
                {!user && <Link to='/login' className="btn btn-sm text-white">Login</Link>}
                {user && <div className='flex items-center hover:border  rounded-full pr-2 hover:bg-base-200'>
                   
                    <div className="dropdown dropdown-end">
                        <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user.photoURL || "https://api.lorem.space/image/face?hash=33791"} alt='' />
                            </div>
                        </label>
                        <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            
                            <li>
                                <Link to='/dashboard' className="justify-between">
                                    Profile

                                </Link>
                            </li>

                            <li><button onClick={logout} >Logout</button></li>
                        </ul>
                    </div>
                    <h1 className='text-center font-bold text-accent'>{userName}</h1>
                </div>}
            </div>

        </div>
    );
};

export default Header;