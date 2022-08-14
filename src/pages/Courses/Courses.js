import React from 'react';
import pic1 from "../../assests/images/course-1.jpg";
import pic2 from "../../assests/images/course-2.jpg";
import pic3 from "../../assests/images/course-3.jpg";
import Course from "./Course";

const Courses = () => {
    const courses = [
        {id:1, name:"Clinical Mental Health", description:"Are you medical student?", price:10000, image:pic1},
        {id:2, name:"Happy Family", description:"Do you want a good family?", price:5500,image:pic2},
        {id:3, name:"Child Care", description:"Do you want fully take care your baby?", price:3000,image:pic3}
    ]
    return (
        <div className="my-5">
            <h1><span className='text-3xl font-bold text-primary'>Our </span> <span className='text-3xl font-bold text-secondary'>Courses</span></h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    courses.map(course => <Course 
                    key={course.id}
                    course={course}
                    />)
                }
            </div>
        </div>
    );
};

export default Courses;