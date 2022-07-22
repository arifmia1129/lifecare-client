import React from 'react';
import { format } from 'date-fns';
import ConfirmModal from './ConfirmModal';

const Confirm = ({ service, dateTime, details, setService, setServiceStatus, setDateTime, setDateTimeStatus, setDetails, setDetailsStatus, setConfirmStatus }) => {
    const { branch, department, session, consultant } = service;
    const { date, time } = dateTime;
    const { patient, phone, address } = details;
    const formattedDate = format(date, 'PP');
    return (
        <div>
            <h1>Check your information</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10'>
                <div className='md:border-2 rounded-lg p-5'>
                    <p className='font-bold text-xl'>Service:</p>
                    <p>Branch:{branch}</p>
                    <p>Department:{department}</p>
                    <p>Session length:{session}</p>
                    <p>Consultant: Dr. {consultant}</p>
                </div>
                <div className='md:border-2 rounded-lg p-5'>
                    <p className='font-bold text-xl'>Date & Time:</p>
                    <p>Date:{formattedDate}</p>
                    <p>Time:{time}</p>
                </div>
                <div className='md:border-2 rounded-lg p-5'>
                    <p className='font-bold text-xl'>Details:</p>
                    <p>Patient Name:{patient}</p>
                    <p>Phone:{phone}</p>
                    <p>Address:{address}</p>
                </div>
            </div>
            <div className='flex justify-center items-center my-5'>
                <label for="confirm-modal" class="btn modal-button btn-primary">Next</label>
            </div>
            {
                (service && dateTime && details) && <ConfirmModal service={service} setService={setService} setServiceStatus={setServiceStatus} dateTime={dateTime} setDateTime={setDateTime} setDateTimeStatus={setDateTimeStatus} details={details} setDetails={setDetails} setDetailsStatus={setDetailsStatus} setConfirmStatus={setConfirmStatus} />
            }
        </div>
    );
};

export default Confirm;