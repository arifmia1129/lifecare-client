import React from 'react';
import HeaderBanner from '../Header/HeaderBanner';
import Footer from '../shared/Footer';
import Blog from './Blog';
import ClientsFeedback from './ClientsFeedback';
import ClientsPartners from './ClientsPartners';
import CourseBanner from './CourseBanner';
import DetailsSummary from './DetailsSummary';
import Services from './Services';
import TeamBanner from './TeamBanner';

const Home = () => {
    return (
        <div>
            <HeaderBanner />
            <DetailsSummary />
            <CourseBanner />
            <TeamBanner />
            <ClientsPartners />
            <Services />
            <ClientsFeedback />
            <Blog />
            <Footer />
        </div>
    );
};

export default Home;