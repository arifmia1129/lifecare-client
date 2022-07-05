import React from 'react';
import doctor from '../../assests/images/doctor.png'

const CourseBanner = () => {
    return (
        <div className='my-10'>
            <div className='md:flex justify-between items-center mb-5'>
                <h1><span className='text-3xl font-bold text-primary'>Our </span> <span className='text-3xl font-bold text-secondary'>Courses</span></h1>
                <button className='btn btn-outline btn-primary'>View Courses</button>
            </div>
            <div className='lg:flex justify-between items-center lg:bg-primary'>
                <div className='flex-1 lg:mt-[-50px]'>
                    <img src={doctor} alt="" />
                </div>
                <div className='flex-1 lg:text-white pr-20'>
                    <h1 className='text-3xl font-bold mb-3'>Take Training With Our Experienced Team</h1>
                    <p>We have special doctors team who have training you for your good health, fitness. If you join with our course our team build you as a good and fit. Our team member are experienced and best team. So you can try with us for your good physical and mental health.</p>
                </div>
            </div>
        </div>
    );
};

export default CourseBanner;