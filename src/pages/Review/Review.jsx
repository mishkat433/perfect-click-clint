import React from 'react';
import { FaStar } from 'react-icons/fa';

const Review = ({ review }) => {
    const { name, email, photo, comment } = review;
    return (
        <div className="card shadow-xl border-2">
            <div className='flex items-center gap-x-5 mt-5 pl-2'>
                <figure><img src={photo} alt="Movie" className='rounded-full h-20 w-20' /></figure>
                <div>
                    <h4 className='text-xl font-semibold'>{name}</h4>
                    <p>{email}</p>
                </div>
            </div>
            <hr className='my-4' />
            <div className="mb-5 mr-3">
                <p className='text-center'>{comment}</p>
                <div className='flex text-orange-600 mt-3 justify-center'>
                    <FaStar /><FaStar /> <FaStar /> <FaStar /><FaStar />
                </div>
            </div>
        </div>
    );
};

export default Review;