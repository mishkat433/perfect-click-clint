import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import serviceHeader from '../../assets/serviceHeader.webp';
import WriteComments from './WriteComments';


const Details = () => {
    const singleServices = useLoaderData()
    const { image, title, details, price, rating, totalOrder, _id } = singleServices[0];

    document.title = "services/details";
    return (
        <div className='w-11/12 mx-auto mb-10'>
            <div className=' bg-no-repeat h-52 md:h-72 rounded-xl my-5 flex items-center' style={{ background: `linear-gradient(to right, #121212b0 40%,rgba(118, 118, 128, 0.20)), url(${serviceHeader})`, backgroundPosition: "left" }}>
                <h1 className='text-white text-3xl lg:text-5xl font-bold ml-5 lg:ml-24'>Details</h1>
            </div>
            <div className='mt-16'>
                <div className="flex justify-between  gap-14 bg-base-100 shadow-xl rounded-xl">
                    <img className='w-1/2 h-[500px] rounded-tl-xl rounded-bl-xl' src={image} alt="details" data-aos="fade-right" />
                    <div className="w-1/2 pr-10 mt-10" data-aos="fade-left">
                        <h2 className="text-4xl uppercase mb-10 font-bold text-center text-orange-600">{title}</h2>
                        <p className='text-justify'>{details}</p>
                        <div className='flex justify-between items-center mt-10'>
                            <p className='text-xl font-semibold'>Price: ${price}.00</p>
                            <p className='text-xl'>Total Order : {totalOrder} </p>
                            <div className='flex  items-center text-xl'>Rating : {rating} <FaStar className='text-orange-600' /> </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full'>
                <WriteComments id={_id} />
            </div>
        </div>
    );
};

export default Details;