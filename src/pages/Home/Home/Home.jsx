import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import AboutWork from '../AboutWork/AboutWork';
import Albums from '../Albums/Albums';
import Banner from '../Banner/Banner';
import Service from '../Service/Service';

const Home = () => {
    document.title = "Home";
    return (
        <div className='w-11/12 mx-auto mb-16'>
            <Banner />
            <Service />
            <AboutWork />
            <AboutMe />
            <Albums />
        </div>
    );
};

export default Home;