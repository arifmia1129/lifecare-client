import React from 'react';
import { Link } from 'react-router-dom';

const Final = () => {
    return (
        <div className='text-center my-10'>
            <h3 className='font-bold text-2xl'>Thank you for your Appointment!</h3>
            <p className='font-bold'>Please go to <Link className='text-blue-500' to="dashboard">Dashboard</Link> to confirm your Appointment.</p>
            <p className='font-bold'><small>Keep staying with us, Enjoy health service always.</small></p>
        </div>
    );
};

export default Final;