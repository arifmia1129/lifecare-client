import { useQuery } from '@tanstack/react-query';
import { signOut } from 'firebase/auth';
import React from 'react';
import auth from '../../firebase.init';
import User from './User';

const Users = () => {
    const { isLoading, data: users, refetch } = useQuery(['users'], () =>
        fetch(`https://lifecare-health.herokuapp.com/users`, {
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
    if (isLoading) {
        return <p className='h-screen flex justify-center items-center'>Loading...</p>;
    }
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th className='w-full'>Users</th>
                        <th className='w-full'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users?.map(user => <User
                            key={user._id}
                            user={user}
                            refetch={refetch}
                        />)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Users;