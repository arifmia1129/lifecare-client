import React from 'react';
import HeaderBanner from '../Header/HeaderBanner';
import CourseBanner from './CourseBanner';
import DetailsSummary from './DetailsSummary';

const Home = () => {
    return (
        <div>
            <HeaderBanner />
            <DetailsSummary />
            <CourseBanner />
        </div>
    );
};

export default Home;