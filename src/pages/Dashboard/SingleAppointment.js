import React from 'react';
import { useState } from 'react';
import AppointmentDetailsModal from './AppointmentDetailsModal';

const SingleAppointment = ({ appointment }) => {
    const [myAppointment, setMyAppointment] = useState(null);
    const { department } = appointment;
    return (
        <div>
            <div className='flex justify-between items-center border-b-4 pt-4 pb-1'>
                <p className='w-16'>{department}</p>
                <p className='w-16'>
                    <label onClick={() => setMyAppointment(appointment)} for="my-modal-3" class="btn modal-button btn-xs btn-primary">Details</label>
                </p>
                <p className='w-16'>
                    <button className='btn btn-xs btn-outline'>unpaid</button>
                </p>
            </div>
            {
                myAppointment && <AppointmentDetailsModal myAppointment={myAppointment} />
            }
        </div>
    );
};

export default SingleAppointment;