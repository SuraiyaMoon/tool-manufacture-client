import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const SummeryItem = ({ icon, tittle }) => {
    return (
        <div className="card  bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
                <FontAwesomeIcon className='text-6xl' icon={icon}></FontAwesomeIcon>
                <h2 className="text-2xl">{tittle}</h2>

            </div>
        </div>
    );
};

export default SummeryItem;