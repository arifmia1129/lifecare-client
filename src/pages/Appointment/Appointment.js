import React from 'react';
import { useState } from 'react';
import Confirm from './Confirm';
import Details from './Details';
import Final from './Final';
import Service from './Service';
import Time from './Time';

const Appointment = () => {
    const [service, setService] = useState({});
    const [serviceStatus, setServiceStatus] = useState(false);
    const [dateTime, setDateTime] = useState({});
    const [dateTimeStatus, setDateTimeStatus] = useState(false);
    const [details, setDetails] = useState({});
    const [detailsStatus, setDetailsStatus] = useState(false);
    const [confirmState, setConfirmStatus] = useState(false);
    return (
        <div className='my-10'>
            <h1 className='md:text-5xl text-2xl text-center font-bold'>Book an Appointment</h1>
            <div className='md:text-center my-5 md:border-4 rounded-lg py-5'>
                <p className='text-xl font-bold'>For urgent consultation please contact:</p>
                <p className='text-xl font-bold'>+8801849676331</p>
            </div>
            <div>
                <ul className="steps md:w-full">
                    <li className={`step ${serviceStatus && "step-primary"}`}>Service</li>
                    <li className={`step ${dateTimeStatus && "step-primary"}`}>Time</li>
                    <li className={`step ${detailsStatus && "step-primary"}`}>Details</li>
                    <li className={`step ${confirmState && "step-primary"}`}>Done</li>
                </ul>
            </div>
            {
                (!serviceStatus) && <Service setService={setService} setServiceStatus={setServiceStatus} />
            }
            {
                (serviceStatus && !dateTimeStatus) && <Time setDateTime={setDateTime} setDateTimeStatus={setDateTimeStatus} />
            }
            {
                (serviceStatus && dateTimeStatus && !detailsStatus) && <Details setDetails={setDetails} setDetailsStatus={setDetailsStatus} />
            }
            {
                (serviceStatus && dateTimeStatus && detailsStatus && confirmState) && <Final />
            }
            {
                (serviceStatus && dateTimeStatus && detailsStatus && !confirmState) && <Confirm service={service} setService={setService} setServiceStatus={setServiceStatus} dateTime={dateTime} setDateTime={setDateTime} setDateTimeStatus={setDateTimeStatus} details={details} setDetails={setDetails} setDetailsStatus={setDetailsStatus} setConfirmStatus={setConfirmStatus} />
            }
        </div>
    );
};

export default Appointment;