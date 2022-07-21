import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user, loading] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };

    const navItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/purchase">Purchase</Link></li>

        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/portfolio">MyPortfolio</Link></li>
        {
            user ? <>

                <li><Link to="/dashboard">DashBoard</Link></li>
                <button onClick={logout} className='btn btn-primary'>Logout</button>

            </>
                :
                <li><Link to="/login">Login</Link></li>
        }
    </>
    return (
        <div className="navbar lg:bg-primary lg:text-white sm:bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">
                    NebulaManufacture</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <label htmlFor="dashboard-sidebar" tabIndex="0
                1" className="btn btn-ghost lg:hidden">

                </label>
            </div>
        </div>
    );
};

export default Navbar;