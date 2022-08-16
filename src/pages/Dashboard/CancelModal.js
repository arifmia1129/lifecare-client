import { signOut } from 'firebase/auth';
import React from 'react';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const CancelModal = ({ cancelAppointment, setCancelAppointment, refetch }) => {
    const { _id, address, branch, consultant, date, department, length, patient, phone, time } = cancelAppointment;
    const handleConfirm = () => {
        fetch(`https://lifecare-health.herokuapp.com/appointment/${_id}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    localStorage.removeItem("token");
                    return signOut(auth);
                }
                return res.json()
            })
            .then(data => {
                if (data.deletedCount) {
                    refetch();
                    toast.success("Successfully canceled!")
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="cancel-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-xl text-red-500">Are you sure cancel this appointment:</h3>
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
                    <div className="modal-action">
                        <label onClick={() => setCancelAppointment(null)} marginHeight="cancel-modal" className="btn btn-secondary">No</label>
                        <label onClick={handleConfirm} marginHeight="cancel-modal" className="btn btn-primary">Yes</label>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CancelModal;