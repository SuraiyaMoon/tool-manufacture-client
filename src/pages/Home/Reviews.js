import React from 'react';
import Review from './Review';
import people1 from '../../images/people1.png';
import people2 from '../../images/people2.png';
import people3 from '../../images/people3.png';
import useReview from '../../Hooks/useReview';

const Reviews = () => {
    const [reviews, setReviews] = useReview()

    return (
        <section className='p-12 bg-blue-50'>
            <div className='flex justify-center'>
                <div>
                    <h4 className="text-3xl text-center text-primary font-semibold mb-4">What our Customer say</h4>
                </div>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-10 flex justify-center'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Reviews;