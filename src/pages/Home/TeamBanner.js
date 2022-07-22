import React from 'react';
import { Link } from 'react-router-dom';
import team from "../../assests/images/header-2.jpg"

const TeamBanner = () => {
    return (
        <div className='my-10'>
            <div className='md:flex justify-between items-center mb-5'>
                <h1><span className='text-3xl font-bold text-primary'>Our </span> <span className='text-3xl font-bold text-secondary'>Team</span></h1>
                <Link to="doctors" className='btn btn-outline btn-primary'>View Team</Link>
            </div>
            <div className='lg:flex justify-between items-center lg:bg-secondary'>
                <div className='flex-1 lg:text-white lg:p-10'>
                    <h1 className='text-3xl font-bold mb-3'>We have a beautiful and experienced team for your services</h1>
                    <p>Our all of team member are experienced and helpful for patient. The main commitment of our team is "Service for Patient". We try to help patient with our team.</p>
                </div>
                <div className='flex-1'>
                    <img src={team} alt="" />
                </div>
            </div>
        </div>
    );
};

export default TeamBanner;