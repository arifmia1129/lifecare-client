import React from 'react';
import service1 from "../../assests/images/service-1.png";
import service2 from "../../assests/images/service-2.png";
import service3 from "../../assests/images/service-3.png";
import Service from './Service';

const Services = () => {
    const services = [
        { id: 1, name: "Psychological Counseling", img: service1 },
        { id: 2, name: "Corporate Service", img: service2 },
        { id: 3, name: "Child Development", img: service3 }

    ]
    return (
        <div className='my-10'>
            <h1><span className='text-3xl font-bold text-primary'>Health </span> <span className='text-3xl font-bold text-secondary'>Services</span></h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5'>
                {
                    services.map(service => <Service
                        id={service.id}
                        service={service}
                    />)
                }
            </div>
        </div>
    );
};

export default Services;