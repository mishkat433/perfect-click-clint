import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import serviceHeader from '../../assets/serviceHeader.webp';
import Review from '../Review/Review';
import WriteComments from './WriteComments';


const Details = () => {
    const singleServices = useLoaderData()
    const { image, title, details, price, rating, totalOrder, _id } = singleServices[0];
    const [review, setReview] = useState([])
    const [reload, setReload] = useState(true)

    useEffect(() => {
        fetch(`https://perfect-click-server.vercel.app/review?id=${_id}`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [reload, _id])

    document.title = "services/details";
    return (
        <div className='w-11/12 mx-auto mb-10'>
            <div className=' bg-no-repeat h-52 md:h-72 rounded-xl my-5 flex items-center' style={{ background: `linear-gradient(to right, #121212b0 40%,rgba(118, 118, 128, 0.20)), url(${serviceHeader})`, backgroundPosition: "left" }}>
                <h1 className='text-white text-3xl lg:text-5xl font-bold ml-5 lg:ml-24'>Details</h1>
            </div>
            <div className='mt-16'>
                <div className="flex flex-col lg:flex-row justify-between  gap-14 bg-base-100 shadow-xl rounded-xl">
                    <img className='w-full lg:w-1/2 h-[300px] md:h-[500px] rounded-tl-xl rounded-tr-xl lg:rounded-tr-none md:rounded-bl-xl' src={image} alt="details" data-aos="fade-right" />
                    <div className="w-full lg:w-1/2 p-3 lg:pr-10 lg:mt-10" data-aos="fade-left">
                        <h2 className="text-4xl uppercase mb-10 font-bold text-center text-orange-600">{title}</h2>
                        <p className='text-justify'>{details}</p>
                        <div className='flex justify-between flex-wrap items-center mt-10'>
                            <p className='text-xl font-semibold'>Price: ${price}.00</p>
                            <p className='text-xl'>Total Order : {totalOrder} </p>
                            <div className='flex  items-center text-xl mb-2'>Rating : {rating} <FaStar className='text-orange-600' /> </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full'>
                <WriteComments id={_id} setReload={setReload} reload={reload} />
            </div>
            <div className='mt-16'>
                <h3 className='text-3xl font-semibold text-center text-orange-600 mb-10'>Review</h3>
                <div className='grid grid-col-1 md:grid-cols-2 gap-10 '>
                    {
                        review?.map(rvw => <Review review={rvw} key={rvw._id} />)
                    }
                </div>

                {review.length === 0 && <div className='flex justify-center mt-32'><button className="btn loading">loading...</button></div>}
                {review.length === 0 && <p className='text-center text-red-500'>no review found</p>}
            </div>
        </div>
    );
};

export default Details;