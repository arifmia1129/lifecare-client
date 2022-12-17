import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Doctor from './Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch("https://lifecare-ootb.onrender.com/doctors")
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, []);
    if (doctors.length === 0) {
        return <p className='h-screen flex justify-center items-center'>Loading...</p>;
    }
    return (
        <div className='my-10'>
            <h1 className='mb-5'><span className='text-3xl font-bold text-primary'>Our </span> <span className='text-3xl font-bold text-secondary'>Doctors</span></h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10 gap-5'>
                {
                    doctors.map(doctor => <Doctor
                        key={doctor._id}
                        doctor={doctor}
                    />)
                }
            </div>
        </div>
    );
};

export default Doctors;