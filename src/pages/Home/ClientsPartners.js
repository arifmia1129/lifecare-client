import React from 'react';
import Marquee from "react-fast-marquee";
import p1 from "../../assests/images/partner-1.jpg"
import p2 from "../../assests/images/partner-2.jpg"
import p3 from "../../assests/images/partner-3.jpg"
import p4 from "../../assests/images/partner-4.jpg"
import p5 from "../../assests/images/partner-5.jpg"
import p6 from "../../assests/images/partner-6.jpg"
const ClientsPartners = () => {
    return (
        <div>
            <h1><span className='text-3xl font-bold text-primary'>Clients & </span> <span className='text-3xl font-bold text-secondary'>Partners</span></h1>
            <Marquee gradient={false}>
                <img src={p1} alt="" />
                <img src={p2} alt="" />
                <img src={p3} alt="" />
                <img src={p4} alt="" />
                <img src={p5} alt="" />
                <img src={p6} alt="" />
            </Marquee>
        </div>
    );
};

export default ClientsPartners;