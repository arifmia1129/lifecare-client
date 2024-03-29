import React from 'react';

const Doctor = ({ doctor }) => {
    const { name, designation, department, photo } = doctor;
    return (
        <div className="card card-compact bg-base-100 shadow-xl border">
            <figure><img className="h-96 w-full" src={photo} alt="doctor" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{designation}</p>
                <p>Department: {department}</p>
            </div>
        </div>
    );
};

export default Doctor;