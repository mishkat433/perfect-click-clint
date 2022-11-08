import React, { useContext, useEffect, useState } from 'react';
import serviceHeader from '../../assets/serviceHeader.webp';
// import { FcFullTrash } from "react-icons/fc";
import { AuthContex } from '../../Contex/AuthProvider';
import MyReviewsTable from './MyReviewsTable';
import { toast } from 'react-toastify';

const MyReviews = () => {
    const { loginUser } = useContext(AuthContex);
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false)
    const [reload, setReload] = useState(true)


    useEffect(() => {
        setLoading(true)
        fetch(`http://localhost:5200/review?email=${loginUser?.email}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
                setLoading(false)
            })
    }, [loginUser?.email, reload])


    const reviewsDeleteHandle = (id) => {
        const confirm = window.confirm("Do you want to delete this Review?")
        if (confirm) {
            fetch(`https://perfect-click-server.vercel.app/deleteReview/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast("Review successfully deleted")
                        setReload(!reload)
                    }
                })
        }
    }

    return (
        <div className='w-11/12 mx-auto my-10'>
            <div className=' bg-no-repeat h-52 md:h-72 rounded-xl my-5 flex items-center' style={{ background: `linear-gradient(to right, #121212b0 40%,rgba(118, 118, 128, 0.20)), url(${serviceHeader})`, backgroundPosition: "left" }}>
                <h1 className='text-white text-3xl lg:text-5xl font-bold ml-5 lg:ml-24'>My Reviews</h1>
            </div>
            <div className=" w-full overflow-x-auto">
                {
                    loading && <div className='flex justify-center mt-10'><button className="btn loading">loading...</button></div>
                }
                <table className="table w-full text-center">

                    <thead>
                        <tr>
                            <th>SL No </th>
                            <th>Service Name</th>
                            <th>Comments</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.map((review, index) => <MyReviewsTable key={index} review={review} index={index} reviewsDeleteHandle={reviewsDeleteHandle} />)
                        }
                    </tbody>
                </table>
                {
                    reviews.length === 0 && <p className='text-center text-red-500 mt-5'>No reviews found</p>
                }
            </div>
        </div>
    );
};

export default MyReviews;