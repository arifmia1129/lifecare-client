import React from 'react';
import HeaderBanner from '../Header/HeaderBanner';
import ClientsPartners from './ClientsPartners';
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
            <ClientsPartners />
        </div>
    );
};

export default Home;