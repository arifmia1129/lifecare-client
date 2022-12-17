import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import auth from '../../firebase.init';
import AppointmentDetailsModal from './AppointmentDetailsModal';
import CancelModal from './CancelModal';
import SingleAppointment from './SingleAppointment';
import { useQuery } from '@tanstack/react-query';
import { useAuthState } from 'react-firebase-hooks/auth';
const MyAppointment = () => {
    const [myAppointment, setMyAppointment] = useState(null);
    const [cancelAppointment, setCancelAppointment] = useState(null);
    const [user, loading] = useAuthState(auth);
    const { isLoading, data: appointments, refetch } = useQuery(['appointments', user], () =>
        fetch(`https://lifecare-ootb.onrender.com/appointment?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }).then(res => {
            if (res.status === 401 || res.status === 403) {
                localStorage.removeItem("token");
                return signOut(auth);
            }
            return res.json()
        })
    )
    if (isLoading || loading) {
        return <p className='h-screen flex justify-center items-center'>Loading...</p>;
    }
    return (
        <div>
            <h1 className='mb-2'><span className='text-xl font-bold text-primary'>My </span> <span className='text-xl font-bold text-secondary'>Appointments</span></h1>

            {
                appointments?.map((appointment, index) => <SingleAppointment
                    key={appointment._id}
                    index={index + 1}
                    appointment={appointment}
                    setMyAppointment={setMyAppointment}
                    setCancelAppointment={setCancelAppointment}
                />)
            }
            {
                myAppointment && <AppointmentDetailsModal myAppointment={myAppointment} setMyAppointment={setMyAppointment} />
            }
            {
                cancelAppointment && <CancelModal cancelAppointment={cancelAppointment} refetch={refetch} setCancelAppointment={setCancelAppointment} />
            }
        </div>
    );
};

export default MyAppointment;