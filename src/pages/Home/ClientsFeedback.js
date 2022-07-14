import React from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
const ClientsFeedback = () => {
    const comments = [
        { id: 1, name: "Binu", comment: "This clinic is the best for health. There are many experience doctor and nurse. They are helpful for patient." },
        { id: 2, name: "Arif", comment: "This clinic is the best for health. There are many experience doctor and nurse. They are helpful for patient." },
        { id: 3, name: "Shahin", comment: "This clinic is the best for health. There are many experience doctor and nurse. They are helpful for patient." },
        { id: 4, name: "Naim", comment: "This clinic is the best for health. There are many experience doctor and nurse. They are helpful for patient." },
        { id: 5, name: "Shuvo", comment: "This clinic is the best for health. There are many experience doctor and nurse. They are helpful for patient." },
    ]

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className='my-10'>
            <h1><span className='text-3xl font-bold text-primary'>Clients </span> <span className='text-3xl font-bold text-secondary'>Feedback</span></h1>
            <div className='px-7 md:px-0'>
                <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    responsive={responsive}
                    ssr={true}
                    infinite={true}
                    autoPlay={this?.props?.deviceType !== "mobile" ? true : false}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={1000}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                    deviceType={this?.props?.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    {
                        comments.map(comment => <div className='mb-10 md:border md:p-5 m-5'>
                            <h1 className='font-bold md:border-b-2 border-black'>{comment.name}</h1>
                            <p>{comment.comment}</p>
                        </div>)
                    }
                </Carousel>
            </div>
        </div>
    );
};

export default ClientsFeedback;