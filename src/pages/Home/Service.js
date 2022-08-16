import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

const Service = ({ service }) => {
    const { name, img } = service;
    return (
        <div className="card card-compact w-[95vw] md:w-full bg-base-100 shadow-xl border">
            <figure><img src={img} alt="services" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <button className="btn btn-primary hover:btn-secondary">
                    Learn More
                    <BsArrowRight className='ml-2' />
                </button>
            </div>
        </div>
    );
};

export default Service;