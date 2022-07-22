import React from 'react';
import { Outlet, Link } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user)

    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <h2 className='text-2xl text-primary font-semibold'>Welcome to Your dashboard {user.displayName}</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-68 bg-base-100 text-base-content">
                    {
                        !admin && <>
                            <li className='text-primary'><Link to="/dashboard">My order</Link></li>

                    <li className='text-primary'><Link to="/dashboard/addReview">Add review</Link></li>
                        </>
                    }
                    <li className='text-primary'><Link to="/dashboard/myProfile">My Profile</Link></li>
                    {
                        admin && <>
                            <li className='text-primary'><Link to="/dashboard/users">Make admin</Link></li>
                            <li className='text-primary'><Link to="/dashboard/manageOrder">Manage All orders</Link></li>
                            <li className='text-primary'><Link to="/dashboard/addProduct">Add products</Link></li>
                            <li className='text-primary'><Link to="/dashboard/manageProduct">Manage Product</Link></li>
                        </>
                    }

                </ul>
            </div>
        </div>
    );
};

export default Dashboard;