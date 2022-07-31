import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const UserProfile = () => {
    const [user, loading] = useAuthState(auth);
    const [userInfo, setUserInfo] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/user?email=${user?.email}`, {
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }, [user])

    if (loading) {
        return <p className='h-screen flex justify-center items-center'>Loading...</p>;
    }
    return (
        <div>
            Hello
        </div>
    );
};

export default UserProfile;