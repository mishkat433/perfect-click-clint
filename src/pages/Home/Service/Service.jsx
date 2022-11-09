import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServicesCard from './ServicesCard';

const Service = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://perfect-click-server.vercel.app/services?limit=3')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h3 className='text-2xl md:text-4xl font-bold mb-2'>My <span className='text-red-600'>Services</span></h3>
                <p className='text-md md:text-lg'>…the sweetest memories captured on film!</p>
            </div>
            {
                services.length === 0 && <div className='flex justify-center mt-20'><button className="btn loading">loading...</button></div>
            }
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 my-10'>
                {
                    services.map(service => <ServicesCard service={service} key={service._id} />)
                }
            </div>
            <div className='flex justify-center'>
                <Link to="/services" className='"btn bg-orange-500 py-3 px-5 rounded-lg text-white hover:bg-black duration-300 '> Show More</Link>
            </div>
        </div>
    );
};

export default Service;