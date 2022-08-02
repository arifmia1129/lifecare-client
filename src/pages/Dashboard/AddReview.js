import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const AddReview = () => {
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const handleAdded = () => {
        fetch("http://localhost:5000/review", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({ name, comment }),
        })
            .then((res) => {
                if (res.status === 401 || res.status === 403) {
                    localStorage.removeItem("token");
                    return signOut(auth);
                }
                return res.json()
            })
            .then((data) => {
                if (data.insertedId) {
                    toast.success("Successfully added your review!")
                }
            });
    }
    return (
        <div className='p-2'>
            <h1 className='mb-2'><span className='text-xl font-bold text-primary'>Add </span> <span className='text-xl font-bold text-secondary'>Review</span></h1>
            <div class="form-control w-full max-w-xs">
                <label class="label">
                    <span class="label-text">Name or Company Name</span>
                </label>
                <input onChange={e => setName(e.target.value)} type="text" placeholder="Name or Company Name" class="input input-bordered w-full max-w-xs" />
            </div>
            <div class="form-control">
                <label class="label">
                    <span class="label-text">Review</span>
                </label>
                <textarea onChange={e => setComment(e.target.value)} class="textarea textarea-bordered h-24" placeholder="Review"></textarea>
            </div>
            <button onClick={handleAdded} className='btn btn-primary rounded-lg mt-3'>Add Review</button>
        </div>
    );
};

export default AddReview;