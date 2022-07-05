import React from 'react';
import HeaderBanner from '../Header/HeaderBanner';
import CourseBanner from './CourseBanner';
import DetailsSummary from './DetailsSummary';
import TeamBanner from './TeamBanner';

const Home = () => {
    return (
        <div>
            <HeaderBanner />
            <DetailsSummary />
            <CourseBanner />
            <TeamBanner />
        </div>
    );
};

export default Home;