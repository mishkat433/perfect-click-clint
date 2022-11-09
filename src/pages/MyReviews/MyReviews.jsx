import React, { useContext, useEffect, useState } from 'react';
import serviceHeader from '../../assets/serviceHeader.webp';
// import { FcFullTrash } from "react-icons/fc";
import { AuthContex } from '../../Contex/AuthProvider';
import MyReviewsTable from './MyReviewsTable';
import { toast } from 'react-toastify';

const MyReviews = () => {
    const { loginUser, logout } = useContext(AuthContex);
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false)
    const [reload, setReload] = useState(true)
    const [close, setClose] = useState(false)
    const [change, setChange] = useState(null);

    document.title = "My reviews"

    useEffect(() => {
        setLoading(true)
        fetch(`https://perfect-click-server.vercel.app/myReview?email=${loginUser?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("photo-token")}`
            }
        })
            .then(res => {
                if (res.status === 403 || res.status === 401) {
                    return logout()
                }
                return res.json()
            })
            .then(data => {
                setReviews(data)
                setLoading(false)
            })
    }, [loginUser?.email, reload, logout])

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

    const submitHandle = (e) => {
        fetch(`https://perfect-click-server.vercel.app/updateService/${change?._id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(change)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast("Review update successfully")
                    setClose(false)
                    setReload(!reload)
                }
            })
        e.preventDefault()

    }

    const editHandle = (e) => {
        setChange({ ...change, [e.target.name]: e.target.value })
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
                            reviews.map((review, index) => <MyReviewsTable key={index} review={review} index={index} setClose={setClose} reviewsDeleteHandle={reviewsDeleteHandle} setChange={setChange} />)
                        }
                    </tbody>
                </table>
                {
                    reviews.length === 0 && <p className='text-center text-red-500 mt-5'>No reviews found</p>
                }
            </div>

            {/* Modal start */}
            {close &&
                <div>
                    <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box relative">
                            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <div>
                                <h4 className='text-center font-semibold text-4xl my-3'>Update Review</h4>
                                <div className="w-full mx-auto">
                                    <form onSubmit={submitHandle} className="card-body">
                                        <div className="form-control">
                                            <label className="label" htmlFor='name'>
                                                <span className="label-text">Comments : </span>
                                            </label>
                                            <textarea onChange={editHandle} name="comment" value={change?.comment} placeholder='write your comments here : ' className='h-[150px] border-2 p-3 resize-none rounded-lg'></textarea>
                                        </div>
                                        <div className="form-control mt-6">
                                            <button type='submit' className="btn btn-primary">Update review</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {/* Modal end */}
        </div>
    );
};

export default MyReviews;