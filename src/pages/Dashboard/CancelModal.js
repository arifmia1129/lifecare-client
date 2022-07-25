import { signOut } from 'firebase/auth';
import React from 'react';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const CancelModal = ({ cancelAppointment, setCancelAppointment }) => {
    const { _id, address, branch, consultant, date, department, length, patient, phone, time } = cancelAppointment;
    const handleConfirm = () => {
        fetch(`http://localhost:5000/appointment/${_id}`, {
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
                    toast.success("Successfully canceled!")
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="cancel-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-xl text-red-500">Are you sure cancel this appointment:</h3>
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
                    <div class="modal-action">
                        <label onClick={() => setCancelAppointment(null)} for="cancel-modal" class="btn btn-secondary">No</label>
                        <label onClick={handleConfirm} for="cancel-modal" class="btn btn-primary">Yes</label>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CancelModal;