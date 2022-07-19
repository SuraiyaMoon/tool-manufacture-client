import React from 'react';
import Review from './Review';
import people1 from '../../images/people1.png';
import people2 from '../../images/people2.png';
import people3 from '../../images/people3.png';

const Reviews = () => {
    const reviews = [
        {
            _id: 1,
            img: people1,
            clientReview: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more.',
            name: "Assaduzzaman",
            country: "Bangladesh"
        },
        {
            _id: 2,
            img: people2,
            clientReview: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using Content here, content.',
            name: "Amelia",
            country: "Canada"

        },
        {
            _id: 3,
            img: people3,
            clientReview: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using Content here, content.',
            name: "Sophia",
            country: "California"
        }
    ]
    return (
        <section className='px-12'>
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