import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = ({ children }) => {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="w-full navbar bg-base-300">
          <div className="flex-none lg:hidden">
            <label marginHeight="my-drawer-3" className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">
            <div>
              <p className='text-2xl font-bold ml-1'>
                <Link to="/">
                  <span className='text-primary'>Life </span>
                  <span className='text-secondary'>Care</span>
                </Link>
              </p>
              <small>Make <span className='text-primary'>Life</span> Beautiful</small>
            </div>
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              <li><NavLink className="rounded-lg" to="/about">About us</NavLink></li>
              <li><NavLink className="rounded-lg" to="/doctors">Doctors</NavLink></li>
              <li><NavLink className="rounded-lg" to="/all-services">Services</NavLink></li>
              <li><NavLink className="rounded-lg" to="/courses">Courses</NavLink></li>
              <li><NavLink className="rounded-lg" to="/blog">Blog</NavLink></li>
              <li><NavLink className="rounded-lg" to="/dashboard">Dashboard</NavLink></li>
            </ul>
          </div>
        </div>
        {children}
      </div>
      <div className="drawer-side">
        <label marginHeight="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-fit bg-base-100">
          <li><NavLink className="rounded-lg" to="/about">About us</NavLink></li>
          <li><NavLink className="rounded-lg" to="/doctors">Doctors</NavLink></li>
          <li><NavLink className="rounded-lg" to="/all-services">Services</NavLink></li>
          <li><NavLink className="rounded-lg" to="/courses">Courses</NavLink></li>
          <li><NavLink className="rounded-lg" to="/blog">Blog</NavLink></li>
          <li><NavLink className="rounded-lg" to="/dashboard">Dashboard</NavLink></li>
        </ul>

      </div>
    </div>
  );
};

export default Navbar;