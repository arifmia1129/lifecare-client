import React, { useEffect, useState } from 'react';
import AppointmentDetailsModal from './AppointmentDetailsModal';
import SingleAppointment from './SingleAppointment';

const MyAppointment = () => {
    const [appointments, setAppointments] = useState([]);
    const [myAppointment, setMyAppointment] = useState(null);
    useEffect(() => {
        fetch("http://localhost:5000/appointment")
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, []);
    return (
        <div>
            <h1 className='mb-2'><span className='text-xl font-bold text-primary'>My </span> <span className='text-xl font-bold text-secondary'>Appointments</span></h1>
            <div className='flex justify-between items-center border-b-4 text-gray-500'>
                <p className='w-16'>Appointment</p>
                <p className='w-16'>Details</p>
                <p className='w-16'>Status</p>
            </div>
            {
                appointments.map((appointment, index) => <SingleAppointment
                    key={appointment._id}
                    index={index + 1}
                    appointment={appointment}
                    setMyAppointment={setMyAppointment}
                />)
            }
            {
                myAppointment && <AppointmentDetailsModal myAppointment={myAppointment} setMyAppointment={setMyAppointment} />
            }
        </div>
    );
};

export default MyAppointment;