import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col md:m-10">
                <div className='flex justify-end my-2 md:my-0'>
                    <label for="my-drawer-2" class="border-2 p-1 rounded-lg drawer-button lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                </div>
                <Outlet />
            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-fit bg-base-100 md:bg-transparent">
                    <li>
                        <Link to="/dashboard/my-appointment">My Appointment</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;