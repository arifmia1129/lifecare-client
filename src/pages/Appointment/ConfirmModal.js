import { format } from 'date-fns';
import React from 'react';

const ConfirmModal = ({ service, setService, setServiceStatus, dateTime, setDateTime, setDateTimeStatus, details, setDetails, setDetailsStatus, setConfirmStatus }) => {
    const { branch, department, session, consultant } = service;
    const { date, time } = dateTime;
    const { patient, phone, address } = details;
    const formattedDate = format(date, 'PP');
    const appointment = {
        branch,
        department,
        "session length": session,
        consultant,
        "date": formattedDate,
        time,
        patient,
        phone,
        address
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
        setConfirmStatus(true);
        console.log(appointment);
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