import { format } from 'date-fns';
import { signOut } from 'firebase/auth';
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
        fetch("https://lifecare-ootb.onrender.com/appointment", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify(appointment)
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return signOut(auth);
                }
                return res.json()
            })
            .then(data => {
                if (data.acknowledged && data.insertedId) {
                    setConfirmStatus(true);
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="confirm-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-500">Are you sure confirm this appointment?</h3>
                    <div className="modal-action">
                        <label onClick={handleEdit} marginHeight="confirm-modal" className="btn btn-error text-white">No</label>
                        <label onClick={handleConfirm} marginHeight="confirm-modal" className="btn btn-success text-white">Yes</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmModal;