import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

const Service = ({ service }) => {
    const { name, img } = service;
    return (
        <div class="card card-compact w-[95vw] md:w-full bg-base-100 shadow-xl border">
            <figure><img src={img} alt="services" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <button class="btn btn-primary hover:btn-secondary">
                    Learn More
                    <BsArrowRight className='' />
                </button>
            </div>
        </div>
    );
};

export default Service;