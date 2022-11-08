import React from 'react';
import { FaStar } from 'react-icons/fa';

const Review = ({ review }) => {
    const { name, email, photo, comment } = review;
    return (
        <div className="card shadow-xl pl-5 border-2">
            <div className='flex items-center gap-x-5 mt-5'>
                <figure><img src={photo} alt="Movie" className='rounded-full h-20 w-20' /></figure>
                <div>
                    <h4 className='text-xl font-semibold'>{name}</h4>
                    <p>{email}</p>
                </div>
            </div>
            <div className=" my-5 mr-3">
                <p>{comment}</p>
                <div className='flex text-orange-600 mt-3'>
                    <FaStar /><FaStar /> <FaStar /> <FaStar /><FaStar />
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                </div>
            </div>
        </div>
    );
};

export default Review;