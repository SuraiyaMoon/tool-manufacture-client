import React from 'react';

const Review = ({ review }) => {
    const { img, name, clientReview, country } = review;
    return (
        <div className="card  bg-base-100 shadow-xl">
            <div className="card-body">

                <div className='flex items-center justify-center'>
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-3 ">
                            <img src={img} />
                        </div>
                    </div>


                    <div>
                        <h2 className='text-2xl'>{name}</h2>
                        <p>{country}</p>
                    </div>
                </div>
                <p className='mb-2'>{clientReview}</p>
            </div>
        </div>
    );
};

export default Review;