import React, { useEffect, useState } from 'react';
import { FcFullTrash } from 'react-icons/fc';


const MyReviewsTable = ({ review, index, reviewsDeleteHandle }) => {
    const [services, setServices] = useState([]);


    useEffect(() => {
        fetch(`https://perfect-click-server.vercel.app/singleService/${review?.serviceId}`)
            .then(res => res.json())
            .then(data => {
                setServices({ ...services, data: data[0] })
            })
    }, [])

    return (
        <tr  >
            <td>{index + 1}</td>
            <td></td>
            <td>{review.comment}</td>
            <td><span className='flex justify-center items-center cursor-pointer gap-4' onClick={() => reviewsDeleteHandle(review._id)}>Delete <FcFullTrash className='text-2xl' /> </span> </td>
        </tr>
    );
};

export default MyReviewsTable;