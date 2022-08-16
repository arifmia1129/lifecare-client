import React from 'react';
import team from "../assests/images/header-2.jpg";

const About = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row">

                <div>
                    <h1 className="text-3xl font-bold text-primary">About Us</h1>
                    <div>
                        <p className="py-3">
                            LifeCare started its journey in 2017 with the goal to redefine mental health care and become country’s top community-based organization dedicated to serving those suffering from physical and mental disorders.
                        </p>
                        <p className="py-3">
                            It has been working to flourish Bangladesh’s total healthcare ecosystem through advice, education, research and services in order to make healthcare more accessible and affordable. It provides services both in rural and urban areas of this country and is trying to create awareness about the importance of mental well-being among the people. LifeCare believes in the social integration of mental health services and a gender-inclusive approach, and its programs and strategies are committed to promoting mental health awareness, removing social stigmas and ensuring the accessibility of mental health services via digital platforms whenever and wherever needed. It thrives to work for healing many hearts and changing lives. As it is committed to bringing change, it keeps collaborating with researchers, practitioners, policy experts, legal advisers  and other community leaders to provide the best comprehensive health care.
                        </p>
                        <p className="py-3">
                            Every week LifeCare provides 4 to 5 educational videos regarding physical and mental health on its Facebook page and YouTube channel to create awareness among people. Also it’s working with so many talented yet unrecognized doctors to serve top-notch service in every department. By creating doctors’ profiles it’s been  successful in promoting those low profiled but highly qualified doctors.
                        </p>
                        <p className="py-3">
                            Team LifeCare is diligently and continuously working towards achieving its goal of turning our society into a place where mental health will be given as much importance as physical health and mental illnesses will be fought with proper care and courage.
                        </p>
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-primary">Our Mission</h1>
                        <div>
                            <p className="py-3">
                                LifeCare strives to serve health care services locally and globally. Its goal is to be easily accessible to everyone who needs health support, be it mental or physical. Moreover, it really wants to educate people about mental health, cure mental disorders, and achieve victory over mental illness.
                            </p>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-primary">Our Vision</h1>
                        <div>
                            <p className="py-3">
                                LifeCare wants to be the leading health organization in the country that provides top-class comprehensive health services in 64 districts of Bangladesh. We are working to eradicate superstitions, stigmas about mental illness from the society and encourage people to fight against mental disorders with love, care, courage and proven scientific knowledge. It yearns to be the first choice of people regarding physical health services too in the coming years.
                            </p>
                        </div>
                    </div>
                </div>
                <img src={team} className="max-w-sm rounded-lg shadow-2xl w-full" alt='' />
            </div>
        </div>
    );
};

export default About;