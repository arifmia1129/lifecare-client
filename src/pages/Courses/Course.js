import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

const Course = ({course}) => {
     const { name, image, description, price } = course;
    return (
        <div class="card card-compact w-[95vw] md:w-full bg-base-100 shadow-xl border">
            <figure><img src={image} alt="course" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p className="text-gray-500">{description}</p>
                <h3 className="text-xl text-green-500 font-bold">৳ {price}</h3>
                <button class="btn btn-success text-white">
                    Add To Cart
                    <BsArrowRight className='ml-2' />
                </button>
            </div>
        </div>
    );
};

export default Course;