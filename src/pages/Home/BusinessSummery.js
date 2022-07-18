import React from 'react';
import SummeryItem from './SummeryItem';
import { faPeopleLine, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';


const BusinessSummery = () => {

    return (
        <div className='my-16'>
            <h2 className="text-3xl">Millions Business Trust Us</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mx-8 my-4'>
                <SummeryItem tittle='100+ Customer' icon={faPeopleLine}></SummeryItem>
                <SummeryItem tittle='60+ Tools' icon={faScrewdriverWrench}></SummeryItem>
                <SummeryItem tittle='90+ Reviews' icon={faThumbsUp}></SummeryItem>
            </div>


        </div>
    );
};

export default BusinessSummery;