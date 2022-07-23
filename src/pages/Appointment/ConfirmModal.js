import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const ConfirmModal = ({ service, setService, setServiceStatus, dateTime, setDateTime, setDateTimeStatus, details, setDetails, setDetailsStatus, setConfirmStatus }) => {
    const [user, loading] = useAuthState(auth);
    if (loading) {
        return <p className='h-screen flex justify-center items-center'>Loading...</p>;
    }
    const { branch, department, session, consultant } = service;
    const { date, time } = dateTime;
    const { patient, phone, address } = details;
    const formattedDate = format(date, 'PP');
    const appointment = {
        branch,
        department,
        length: session,
        consultant,
        date: formattedDate,
        time,
        patient,
        phone,
        address,
        email: user.email
    }

    const handleEdit = () => {
        setService({});
        setServiceStatus(false);
        setDateTime({});
        setDateTimeStatus(false);
        setDetails({});
        setDetailsStatus(false);
    }
    const handleConfirm = () => {
        fetch("http://localhost:5000/appointment", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(appointment)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged && data.insertedId) {
                    setConfirmStatus(true);
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="confirm-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Are you sure confirm this appointment?</h3>
                    <div class="modal-action">
                        <label onClick={handleEdit} for="confirm-modal" class="btn btn-error text-white">No</label>
                        <label onClick={handleConfirm} for="confirm-modal" class="btn btn-success text-white">Yes</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmModal;