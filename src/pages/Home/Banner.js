import React from 'react';
import banner from '../../images/banner.jpg';

const Banner = () => {
    return (
        <div className='mb-16'>
            <div className="hero min-h-screen" style={{
                background: `url(${banner})`,
                backgroundSize: "cover",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
            }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">NebulaManufacture is a reliable tool brand offering a comprehensive range of high performance and superior quality tool selections to meet the demands of today’s professional users. In this latest edition of NebulaManufacture product tool catalogue, new developed and innovative tools, tool sets, trolleys and automotive specialty tools are also introduced for professionals.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Banner;