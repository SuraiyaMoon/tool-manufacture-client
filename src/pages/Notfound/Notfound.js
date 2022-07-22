import React from 'react';
import image404 from '../../images/page-not-found-vector.jpg';

const Notfound = () => {
    return (
        <div className='mx-auto lg:w-3/4 '>
            <img className='' src={image404} alt="Page not found" />
        </div>
    );
};

export default Notfound;