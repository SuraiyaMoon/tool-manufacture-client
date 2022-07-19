import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const EachItem = ({ tittle, about, btnTittle, icon }) => {
    return (
        <div className="card text-neutral-content">
            <div className="card-body items-center text-center">
                <FontAwesomeIcon icon={icon} className='text-6xl' ></FontAwesomeIcon>
                <h2 className="text-2xl">{tittle}</h2>
                <p>{about}</p>
                <button className='btn bg-white text-black'>{btnTittle}</button>
                <div className='sm:w-1/2 lg:w-0'>
                    <hr />
                </div>

            </div>
        </div>
    );
};

export default EachItem;