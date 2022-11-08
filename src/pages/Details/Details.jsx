import React from 'react';
import { useLoaderData } from 'react-router-dom';
import serviceHeader from '../../assets/serviceHeader.webp';

const Details = () => {
    const singleServices = useLoaderData()
    // const { image, _id, title, details } = singleServices;
    console.log(singleServices);

    document.title = "services/details";
    return (
        <div className='w-11/12 mx-auto my-16'>
            <div className=' bg-no-repeat h-52 md:h-72 rounded-xl my-5 flex items-center' style={{ background: `linear-gradient(to right, #121212b0 40%,rgba(118, 118, 128, 0.20)), url(${serviceHeader})`, backgroundPosition: "left" }}>
                <h1 className='text-white text-3xl lg:text-5xl font-bold ml-5 lg:ml-24'>Details</h1>
            </div>
            <div className='mt-16'>
                <div className="flex justify-between items-center gap-10 bg-base-100 shadow-xl rounded-xl">
                    <img className='w-1/2 h-full rounded-tl-xl rounded-bl-xl' src="{image}" alt="details" data-aos="fade-right" />
                    <div className="w-1/2 p-10" data-aos="fade-left">
                        <h2 className="text-4xl uppercase mb-2 font-bold ">I'm Mishkat</h2>
                        <p className='mb-5 font-semibold'>a patinated photographer</p>
                        <p className='text-gray-500'>Right after my graduation from the Chattogram University of Photography in Chattogram, MA I began doing my gigs. After first few years of working at the event agency and with dozens of beautiful wedding sets already in my portfolio, I decided to give it a go and opened up my very own wedding photography service.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;