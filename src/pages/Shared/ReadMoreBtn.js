import React from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ReadMoreBtn = () => {
    return (
        <button className='btn my-4 btn-primary'>
            <span className='mx-2'>Read More</span>
            <FontAwesomeIcon className='' icon={faArrowRight}></FontAwesomeIcon>
        </button>
    );
};

export default ReadMoreBtn;