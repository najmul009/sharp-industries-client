import React from 'react';
import Footer from '../Common/Footer';
import Banner from './Banner';
import Brands from './Brands';
import BusinessSummary from './BusinessSummary';
import Comming from './Comming';
import Contact from './Contact';
import Reviews from './Reviews';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Brands></Brands>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <Comming></Comming>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;