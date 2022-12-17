import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import { useQuery } from '@tanstack/react-query'
const UserProfile = () => {
    const [user, loading] = useAuthState(auth);
    const [status, setStatus] = useState(false);
    const { isLoading, data: userInfo, refetch } = useQuery(['user', user], () =>
        fetch(`https://lifecare-ootb.onrender.com/user?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }).then(res => {
            if (res.status === 401 || res.status === 403) {
                localStorage.removeItem("token");
                return signOut(auth);
            }
            return res.json()
        })
    )

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const phone = e.target.phone.value;
        const address = e.target.address.value;
        fetch(`https://lifecare-ootb.onrender.com/user/${userInfo?._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({
                name,
                phone,
                address
            })
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    localStorage.removeItem("token");
                    return signOut(auth);
                }
                return res.json()
            })
            .then(data => {
                if (data.acknowledged) {
                    toast.success("Profile updated!");
                    setStatus(false);
                    refetch();
                }
            })
    }

    if (loading || isLoading) {
        return <p className='h-screen flex justify-center items-center'>Loading...</p>;
    }
    return (
        <div>
            {
                !status && <div>
                    <div className="card bg-base-100 shadow-xl border">
                        <div className="card-body">
                            <h1 className='mb-2'><span className='text-xl font-bold text-primary'>Your </span> <span className='text-xl font-bold text-secondary'>Profile</span></h1>
                            <p>Email: {userInfo?.email}</p>
                            <p>Name: {userInfo?.name}</p>
                            {
                                (userInfo?.phone) && <p>Phone: {userInfo?.phone}</p>
                            }
                            {
                                (userInfo?.address) && <p>Address: {userInfo?.address}</p>
                            }
                        </div>
                    </div>
                    <button onClick={() => setStatus(true)} className='btn btn-primary m-2'>Edit</button>
                </div>
            }
            {
                status && <div>
                    <form onSubmit={handleSubmit}>
                        <div className="card bg-base-100 shadow-xl border">
                            <div className="card-body">
                                <h1 className='mb-2'><span className='text-xl font-bold text-primary'>Edit </span> <span className='text-xl font-bold text-secondary'>Profile</span></h1>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input name='name' defaultValue={userInfo?.name} type="text" placeholder="Enter your name" className="input input-bordered w-full max-w-xs" />
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Phone</span>
                                    </label>
                                    <input name='phone' defaultValue={userInfo?.phone} type="text" placeholder="Enter your phone" className="input input-bordered w-full max-w-xs" />
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Address</span>
                                    </label>
                                    <input name='address' defaultValue={userInfo?.address} type="text" placeholder="Enter your address" className="input input-bordered w-full max-w-xs" />
                                </div>
                            </div>
                            <input className='btn btn-secondary w-32 m-2' type="submit" value="Save" />
                        </div>
                    </form>

                </div>
            }

        </div>
    );
};

export default UserProfile;