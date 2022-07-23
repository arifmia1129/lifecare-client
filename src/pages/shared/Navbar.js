import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ children }) => {
  return (
    <div class="drawer">
      <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col">
        <div class="w-full navbar bg-base-300">
          <div class="flex-none lg:hidden">
            <label for="my-drawer-3" class="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
          </div>
          <div class="flex-1 px-2 mx-2">
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
          <div class="flex-none hidden lg:block">
            <ul class="menu menu-horizontal">
              <li><Link to="/about">About us</Link></li>
              <li><Link to="/doctors">Doctors</Link></li>
              <li><Link to="/doctors">Services</Link></li>
              <li><Link to="/doctors">Courses</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/dashboard">Dashboard</Link></li>
            </ul>
          </div>
        </div>
        {children}
      </div>
      <div class="drawer-side">
        <label for="my-drawer-3" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-fit bg-base-100">
          <li><Link to="/about">About us</Link></li>
          <li><Link to="/doctors">Doctors</Link></li>
          <li><Link to="/doctors">Services</Link></li>
          <li><Link to="/doctors">Courses</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
        </ul>

      </div>
    </div>
  );
};

export default Navbar;