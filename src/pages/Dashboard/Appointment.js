import { signOut } from 'firebase/auth';
import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
const Appointment = ({ appointment, refetch }) => {
    const { _id, department, status, tnxId } = appointment;
    const handleAccept = () => {
        fetch(`https://lifecare-ootb.onrender.com/appointment/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({ status: "accepted" })
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    localStorage.removeItem("token");
                    return signOut(auth);
                }
                return res.json();
            })
            .then(data => {
                if (data.acknowledged && (data.modifiedCount || data.upsertedCount)) {
                    toast.success("Appointment accepted!");
                    refetch();
                }
            })
    }
    const handlePending = () => {
        fetch(`https://lifecare-ootb.onrender.com/appointment/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({ status: "pending" })
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    localStorage.removeItem("token");
                    return signOut(auth);
                }
                return res.json();
            })
            .then(data => {
                if (data.acknowledged && (data.modifiedCount || data.upsertedCount)) {
                    toast.success("Appointment accepted!");
                    refetch();
                }
            })
    }
    const handleDelete = () => {
        fetch(`https://lifecare-ootb.onrender.com/appointment/${_id}`, {
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
                    toast.success("Successfully deleted!")
                }
            })
    }
    return (
        <div>
            <div className='flex justify-between items-center border-b-4 pt-4 pb-1'>
                <p className='w-16'>{department}</p>
                {
                    status && <div className='text-center w-44'>
                        <p className='text-red-500 text-2xs'>{status}</p>
                        <p className='text-green-500 text-2xs'>tnxId: {tnxId}</p>
                    </div>
                }
                {
                    status === "pending" && <button onClick={handleAccept} className='btn btn-xs btn-primary'>Accept</button>
                }
                {
                    status === "accepted" && <button onClick={handlePending} className='btn btn-xs btn-secondary'>Pending</button>
                }
                {
                    !status && <button onClick={handleDelete} className='btn btn-xs btn-error text-white'>Delete</button>
                }

            </div>
        </div>
    );
};

export default Appointment;