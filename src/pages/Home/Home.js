import React from 'react';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import Parts from './Parts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <BusinessSummery></BusinessSummery>

        </div>
    );
};

export default Home;