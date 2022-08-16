import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';
import Appointment from './Appointment';

const Appointments = () => {
    const { isLoading, data: appointments, refetch } = useQuery(['appointments'], () =>
        fetch(`https://lifecare-health.herokuapp.com/appointments`, {
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
    if (isLoading) {
        return <p className='h-screen flex justify-center items-center'>Loading...</p>;
    }
    return (
        <div>
            <div>
                {
                    appointments?.map((appointment, index) => <Appointment
                        key={appointment._id}
                        index={index + 1}
                        appointment={appointment}
                        refetch={refetch}
                    />)
                }
            </div>
        </div>
    );
};

export default Appointments;