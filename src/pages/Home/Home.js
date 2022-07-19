import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import ContactFAq from './ContactFAq';
import Parts from './Parts';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <BusinessSummery></BusinessSummery>
            <Reviews></Reviews>
            <ContactFAq></ContactFAq>
            <Footer></Footer>

        </div>
    );
};

export default Home;