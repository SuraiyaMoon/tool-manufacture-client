import React from 'react';
import AboutMe from './AboutMe';
import Project from './Project';

const Portfolio = () => {
    return (
        <div>
            <h1 className="text-2xl text-primary font-semibold">Welcome to <span className='text-cyan-400'>Suraiya's </span> Portfolio</h1>
            <AboutMe></AboutMe>




            <Project></Project>

        </div>
    );
};

export default Portfolio;