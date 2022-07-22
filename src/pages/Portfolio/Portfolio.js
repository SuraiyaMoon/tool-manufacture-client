import React from 'react';
import AboutMe from './AboutMe';
import Project from './Project';
import Skill from './Skill';

const Portfolio = () => {
    return (
        <div>
            <h1 className="text-2xl text-primary font-semibold">Welcome to <span className='text-cyan-400'>Suraiya's </span> Portfolio</h1>
            <AboutMe></AboutMe>

            <Project></Project>
            <Skill></Skill>

        </div>
    );
};

export default Portfolio;