import React, { useContext, useState } from 'react';
import { AuthContex } from '../../Contex/AuthProvider';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const WriteComments = ({ id, setReload, reload }) => {
    const { loginUser } = useContext(AuthContex)
    const [comments, setComments] = useState({
        name: loginUser?.displayName,
        email: loginUser?.email,
        photo: loginUser?.photoURL,
        serviceId: id,
        time: new Date().getTime()
    })

    const commentsHandle = (e) => {
        if (comments.comment) {
            fetch("https://perfect-click-server.vercel.app/addComment", {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(comments)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        toast("Review successfully added")
                        e.target.reset();
                        comments.comment = "";
                        setReload(!reload)
                    }
                })
        }
        e.preventDefault()
    }

    const handlecommentSet = (e) => {
        setComments({ ...comments, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <div className="hero mt-14">
                <div className="card  w-full  shadow-2xl ">
                    {
                        loginUser?.uid ? <form onSubmit={commentsHandle} className="card-body" >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg">Write a comments</span>
                                </label>
                                <textarea onChange={handlecommentSet} name="comment" placeholder='write your comments here : ' className='h-[150px] border-2 p-3 resize-none rounded-lg'></textarea>
                            </div>
                            {/* <div className="rating">
                                <input defaultValue={1} type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" readOnly />
                                <input defaultValue={2} type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked readOnly />
                                <input defaultValue={3} type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" readOnly />
                                <input defaultValue={4} type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" readOnly />
                                <input defaultValue={5} type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" readOnly />
                            </div> */}
                            <div className="form-control mt-6 w-32">
                                <button className="btn btn-primary">Send</button>
                            </div>
                        </form>
                            :
                            <p className='text-red-500 text-center text-xl card-body inline'>Please <Link className='underline text-blue-500' to="/login">Login</Link> to add a review.</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default WriteComments;