import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServicesCard from '../Home/Service/ServicesCard';
import serviceHeader from '../../assets/serviceHeader.webp';

const ServicePage = () => {
    const allServices = useLoaderData();

    document.title = "Services";

    return (
        <div className='w-11/12 mx-auto'>
            <div className=' bg-no-repeat h-52 md:h-72 rounded-xl my-5 flex items-center' style={{ background: `linear-gradient(to right, #121212b0 40%,rgba(118, 118, 128, 0.20)), url(${serviceHeader})`, backgroundPosition: "left" }}>
                <h1 className='text-white text-3xl lg:text-5xl font-bold ml-5 lg:ml-24'>My Services</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 my-10'>
                {
                    allServices.map(service => <ServicesCard service={service} key={service._id} />)
                }
            </div>
        </div>
    );
};

export default ServicePage;