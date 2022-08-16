import React from 'react';

const AppointmentDetailsModal = ({ myAppointment, setMyAppointment }) => {
    const { address, branch, consultant, date, department, length, patient, phone, time } = myAppointment;
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label onClick={() => setMyAppointment(null)} marginHeight="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-secondary">Check your appointment details!</h3>
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
            </div>
        </div>
    );
};

export default AppointmentDetailsModal;