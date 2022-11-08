import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import AboutWork from '../AboutWork/AboutWork';
import Albums from '../Albums/Albums';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div className='w-11/12 mx-auto mb-16'>
            <Banner />
            <AboutWork />
            <AboutMe />
            <Albums />
        </div>
    );
};

export default Home;