import React from 'react';

const Project = () => {
    return (
        <div className=''>
            <h2>My projects</h2>
            <div className="stack mx-2">
                <h2 className='text-white'>Project-1</h2>
                <a target="_blank" href="https://lustrous-sunburst-343cdd.netlify.app/">
                    <img src="https://placeimg.com/112/112/arch" alt="Image 1" className="rounded" />
                </a>
                <img src="https://placeimg.com/112/112/arch" alt="Image 2" className="rounded" />
                <img src="https://placeimg.com/112/112/arch" alt="Image 3" className="rounded" />
            </div>
            <div className="stack mx-2">
                <h2 className='text-white'>Project-2</h2>
                <img src="https://placeimg.com/112/112/arch" alt="Image 1" className="rounded" />
                <img src="https://placeimg.com/112/112/arch" alt="Image 2" className="rounded" />
                <img src="https://placeimg.com/112/112/arch" alt="Image 3" className="rounded" />
            </div>
            <div className="stack mx-2">
                <h2 className='text-white'>Project-3</h2>
                <img src="https://placeimg.com/112/112/arch" alt="Image 1" className="rounded" />
                <img src="https://placeimg.com/112/112/arch" alt="Image 2" className="rounded" />
                <img src="https://placeimg.com/112/112/arch" alt="Image 3" className="rounded" />
            </div>

        </div>
    );
};

export default Project;