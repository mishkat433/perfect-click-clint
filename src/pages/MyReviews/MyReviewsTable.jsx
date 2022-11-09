import React, { useEffect, useState } from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import { FcFullTrash } from 'react-icons/fc';


const MyReviewsTable = ({ review, index, reviewsDeleteHandle, setClose, setChange }) => {
    const [services, setServices] = useState([]);


    useEffect(() => {
        fetch(`https://perfect-click-server.vercel.app/singleService/${review?.serviceId}`)
            .then(res => res.json())
            .then(data => {
                setServices(data[0])
            })
    }, [review?.serviceId])

    return (
        <tr  >
            <td>{index + 1}</td>
            <td>{services.title}</td>
            <td>{review.comment}</td>
            <td><span className='flex justify-center items-center cursor-pointer gap-4' >
                <label htmlFor="my-modal-3" className="" onClick={() => setChange(review)} ><FaPencilAlt onClick={() => setClose(true)} className=' text-xl cursor-pointer text-info' /></label>
                <FcFullTrash className='text-2xl' onClick={() => reviewsDeleteHandle(review._id)} /> </span> </td>
        </tr>
    );
};

export default MyReviewsTable;