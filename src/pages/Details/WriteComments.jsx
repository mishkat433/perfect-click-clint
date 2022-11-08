import React from 'react';

const WriteComments = () => {
    return (
        <div>
            <div className="hero mt-14">
                <div className="card  w-full  shadow-2xl ">
                    <form className="card-body" >

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg">Write a comments</span>
                            </label>
                            <textarea name="" placeholder='write your comments here : ' className='h-[150px] border-2 p-3 resize-none rounded-lg'></textarea>
                        </div>

                        <div className="form-control mt-6 w-32">
                            <button className="btn btn-primary">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default WriteComments;