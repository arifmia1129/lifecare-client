import React from 'react';
import img1 from "../../assests/images/header-1.jpg"
import img2 from "../../assests/images/header-2.jpg"
import img3 from "../../assests/images/health-3.jpg"

const HeaderBanner = () => {
    return (
        <div>
            <div class="carousel w-full h-[80vh]">
                <div id="item1" class="carousel-item w-full">
                    <img src={img1} class="w-full" alt='' />
                </div>
                <div id="item2" class="carousel-item w-full">
                    <img src={img2} class="w-full" alt='' />
                </div>
                <div id="item3" class="carousel-item w-full">
                    <img src={img3} class="w-full" alt='' />
                </div>
            </div>
            <div class="flex justify-center w-full py-2 gap-2">
                <a href="#item1" class="btn btn-xs btn-primary">1</a>
                <a href="#item2" class="btn btn-xs btn-secondary">2</a>
                <a href="#item3" class="btn btn-xs btn-primary">3</a>
            </div>
        </div>
    );
};

export default HeaderBanner;