import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServicesCard = ({ service }) => {
    const { _id, title, details, image, price, rating } = service
    return (
        <div className="card card-compact bg-base-100 shadow-xl" data-aos="flip-left">
            <PhotoProvider>
                <PhotoView src={image}>
                    <figure><img className='w-full h-[280px] lg:h-[300px] hover:scale-110 duration-300' src={image} alt="service" /></figure>
                </PhotoView>
            </PhotoProvider>
            <div className="card-body">
                <h2 className="card-title text-2xl">{title}</h2>
                <p>{details.slice(0, 100)} ...</p>
                <div className='flex justify-between items-center'>
                    <p className='text-lg lg:text-xl font-semibold'>Price: ${price}.00</p>
                    <div className='flex text-lg  items-center lg:text-xl'>Rating : {rating} <FaStar className='text-orange-600' /> </div>
                </div>
                <div className="card-actions justify-end mt-5">
                    <Link to={`/services/details/${_id}`} className="btn btn-primary">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;