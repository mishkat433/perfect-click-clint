import React from 'react';
import AboutWork from '../AboutWork/AboutWork';
import Albums from '../Albums/Albums';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div className='w-11/12 mx-auto mb-16'>
            <Banner />
            <AboutWork />
            <Albums />
        </div>
    );
};

export default Home;