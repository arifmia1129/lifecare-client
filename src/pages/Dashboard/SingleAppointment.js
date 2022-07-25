import React from 'react';

const SingleAppointment = ({ appointment, setMyAppointment, setCancelAppointment }) => {
    const { department } = appointment;
    return (
        <div>
            <div className='flex justify-between items-center border-b-4 pt-4 pb-1'>
                <p className='w-16'>{department}</p>
                <p className='w-16'>
                    <label onClick={() => setMyAppointment(appointment)} for="my-modal-3" class="btn modal-button btn-xs btn-primary">Details</label>
                </p>
                <p className='w-16'>
                    <label onClick={() => setCancelAppointment(appointment)} for="cancel-modal" class="btn modal-button btn-xs btn-outline btn-error">Cancel</label>
                </p>
            </div>

        </div>
    );
};

export default SingleAppointment;