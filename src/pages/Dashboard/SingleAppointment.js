import React from 'react';
import { Link } from 'react-router-dom';

const SingleAppointment = ({ appointment, setMyAppointment, setCancelAppointment }) => {
    const { _id, department, status, tnxId } = appointment;
    return (
        <div>
            <div className='flex justify-between items-center border-b-4 pt-4 pb-1'>
                <p className='w-16'>{department}</p>
                <p>
                    <label onClick={() => setMyAppointment(appointment)} for="my-modal-3" class="btn modal-button btn-xs btn-primary">Details</label>
                </p>
                {
                    !tnxId && <p className='w-40'>
                        <label onClick={() => setCancelAppointment(appointment)} for="cancel-modal" class="btn modal-button btn-xs btn-outline btn-error mx-1">Cancel</label>
                        <Link to={`/dashboard/payment/${_id}`} className='btn btn-xs btn-outline btn-success mx-1'>Pay</Link>
                    </p>
                }
                {
                    tnxId && <div className='text-center w-44'>
                        <p className='text-red-500 text-2xs'>{status}</p>
                        <p className='text-green-500 text-2xs'>tnxId: {tnxId}</p>
                    </div>
                }
            </div>
        </div>
    );
};

export default SingleAppointment;