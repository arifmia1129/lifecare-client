import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const Payment = () => {
    const { id } = useParams();
    const [appointment, setAppointment] = useState({});
    const { address, branch, consultant, date, department, length, patient, phone, time } = appointment;
    const stripePromise = loadStripe('pk_test_51L0drqHjlyVvU0H8WCq85L5S01GNgzi6FPnNqOCaYjqhSDHM985EIVLVhiw6nFnMCGSQDYowAf8tPHF1qhtBvNzh0071TRQkRm');
    useEffect(() => {
        const getAppointment = async () => {
            const { data } = await axios.get(`https://lifecare-ootb.onrender.com/appointment/${id}`, {
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
            setAppointment(data);
        }
        getAppointment();
    }, [id])
    return (
        <div>
            <h1 className='mb-2'><span className='text-xl font-bold text-primary'>Payment </span> <span className='text-xl font-bold text-secondary'>for Appointment</span></h1>
            <div className='my-10'>
                <h1 className='mb-2 text-error font-bold'>Please check your appointment details before payment:</h1>
                <ul>
                    <li><span className='font-bold'>Branch:</span> {branch}</li>
                    <li><span className='font-bold'>Department:</span> {department}</li>
                    <li><span className='font-bold'>Consultant:</span> {consultant}</li>
                    <li><span className='font-bold'>Patient:</span> {patient}</li>
                    <li><span className='font-bold'>Address:</span> {address}</li>
                    <li><span className='font-bold'>Date:</span> {date}</li>
                    <li><span className='font-bold'>Time:</span> {time}</li>
                    <li><span className='font-bold'>Session Length:</span> {length}</li>
                    <li><span className='font-bold'>Phone:</span> {phone}</li>
                </ul>
            </div>
            <div className='card shadow-md p-5 border my-10'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm appointment={appointment} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;