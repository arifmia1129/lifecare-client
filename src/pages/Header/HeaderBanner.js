import React from 'react';
import img1 from "../../assests/images/header-1.jpg"
import img2 from "../../assests/images/header-2.jpg"
import img3 from "../../assests/images/health-3.jpg"

const HeaderBanner = () => {
    return (
        <div>
            <div className="carousel w-full h-[80vh]">
                <div id="item1" className="carousel-item w-full">
                    <img src={img1} className="w-full" alt='' />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={img2} className="w-full" alt='' />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={img3} className="w-full" alt='' />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs btn-primary">1</a>
                <a href="#item2" className="btn btn-xs btn-secondary">2</a>
                <a href="#item3" className="btn btn-xs btn-primary">3</a>
            </div>
        </div>
    );
};

export default HeaderBanner;