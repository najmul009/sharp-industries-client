import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';


const DashBoard = () => { 
    const [user] = useAuthState(auth)
    const  [admin] = useAdmin(user)
    return (
        <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content relative lg:flex">
                <label for="my-drawer" className="btn btn-neutral rounded-none drawer-button sticky top-0 lg:h-full lg:p-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 lg:h-10 w-5 lg:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                {/* <!-- Page content here --> */}
                <div className='px-4 md:px-10 w-full'>
                    <h1 className='text-neutral font-bold my-3 text-4xl text-center'>DashBoard</h1>
                    <Outlet></Outlet>
                </div>

            </div>
            <div className="drawer-side">
                <label for="my-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-40 md:w-60 lg:w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Profile </Link></li>
                    {(!admin && user) && <> <li><Link to='/dashboard/myorder'>My Orders </Link></li>
                    <li><Link to='/dashboard/addreview'>Add Review</Link></li> </>}
                    {admin && <>
                        <li><Link to='/dashboard/manageorders'>Manage Orders</Link></li>
                        <li><Link to='/dashboard/manageproducts'>Manage Products</Link></li>
                        <li><Link to='/dashboard/manageusers'>Manage Users</Link></li>
                        <li><Link to='/dashboard/addproduct'>Add Product</Link></li>
                       
                    </> }

                </ul>
            </div>
        </div>

    );
};

export default DashBoard;