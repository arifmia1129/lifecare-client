import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";
const Dashboard = () => {
    const [user, loading] = useAuthState(auth);
    const { admin, adminLoading } = useAdmin(user);
    if (loading || adminLoading) {
        return <p className='h-screen flex justify-center items-center'>Loading...</p>;
    }
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col md:m-10">
                <div className='flex justify-end my-2 md:my-0'>
                    <label marginHeight="my-drawer-2" className="border-2 p-1 rounded-lg drawer-button lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                </div>
                <Outlet />
            </div>
            <div className="drawer-side">
                <label marginHeight="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-fit bg-base-100 md:bg-transparent">
                    {
                        !admin && <li>
                            <NavLink className="rounded-lg" to="/dashboard/my-appointment">My Appointment</NavLink>
                        </li>
                    }
                    <li>
                        <NavLink className="rounded-lg" to="/dashboard/profile">My Profile</NavLink>
                    </li>
                    {
                        !admin && <li>
                            <NavLink className="rounded-lg" to="/dashboard/add-review">Add Review</NavLink>
                        </li>
                    }
                    {
                        admin && <li>
                            <NavLink className="rounded-lg" to="/dashboard/users">Users</NavLink>
                        </li>
                    }
                    {
                        admin && <li>
                            <NavLink className="rounded-lg" to="/dashboard/appointments">Appointments</NavLink>
                        </li>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;