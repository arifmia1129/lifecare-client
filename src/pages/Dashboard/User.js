import { signOut } from 'firebase/auth';
import React from 'react';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const User = ({ user,refetch }) => {
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/${user?._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({
                role: "admin"
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
                    toast.success("Successfully added admin!");
                    refetch();
                }
            })
    }
    const cancelAdmin = () => {
        fetch(`http://localhost:5000/user/${user?._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({
                role: "user"
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
                    toast.success("Successfully canceled admin!");
                    refetch();
                }
            })
    }
    return (
        <tr>
            <td>{user?.name}</td>
            <td>
                {
                    !(user.role === "admin") && <button onClick={makeAdmin} className='btn btn-xs btn-primary'>Make Admin</button>
                }
                {
                    (user.role === "admin") && <button onClick={cancelAdmin} className='btn btn-xs btn-secondary'>Cancel Admin</button>
                }
            </td>
        </tr>
    );
};

export default User;