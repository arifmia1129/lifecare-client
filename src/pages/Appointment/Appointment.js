import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Service from './Service';
import Time from './Time';

const Appointment = () => {
    const [service, setService] = useState({});
    const [serviceStatus, setServiceStatus] = useState(false);
    const [dateTime, setDateTime] = useState({});
    const [dateTimeStatus, setDateTimeStatus] = useState(false);
    return (
        <div className='my-10'>
            <h1 className='md:text-5xl text-2xl text-center font-bold'>Book an Appointment</h1>
            <div className='md:text-center my-5 md:border-4 rounded-lg py-5'>
                <p className='text-xl font-bold'>For urgent consultation please contact:</p>
                <p className='text-xl font-bold'>+8801849676331</p>
            </div>
            <div>
                <ul class="steps md:w-full">
                    <li className={`step ${serviceStatus && "step-primary"}`}>Service</li>
                    <li class="step step-primary">Time</li>
                    <li class="step">Details</li>
                    <li class="step">Done</li>
                </ul>
            </div>
            {/* <Service setService={setService} setServiceStatus={setServiceStatus} /> */}
            <Time setDateTime={setDateTime} setDateTimeStatus={setDateTimeStatus} />
        </div>
    );
};

export default Appointment;