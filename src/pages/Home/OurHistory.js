import React from 'react';
import history from '../../images/history.jpg'
import ReadMoreBtn from '../Shared/ReadMoreBtn';

const OurHistory = () => {
    return (
        <section className='my-12'>
            <h4 className="text-3xl text-center text-primary font-semibold mb-4">Our History</h4>
            <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-10 flex justify-center items-center px-12'>
                <div>
                    <img src={history} alt="history of nebulaManufacture" />
                </div>
                <div>
                    <p>NebulaManufacture company was established in 1899.We are among the country's largest family-owned tools manufacture companies and a leading diversified global tools manufacturer. </p>
                    <ReadMoreBtn></ReadMoreBtn>

                </div>
                <div>
                    <p> Now lead by the fourth generation, nebulaManufacture remains deeply committed to the principles upon which we were founded: high business standards.</p>
                    <ReadMoreBtn></ReadMoreBtn>
                </div>
            </div>

        </section>
    );
};

export default OurHistory;