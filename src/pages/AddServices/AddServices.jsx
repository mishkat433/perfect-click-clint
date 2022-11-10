import React, { useState } from 'react';
import { toast } from 'react-toastify';

const AddServices = () => {
    const [services, setServices] = useState({});
    document.title = "Add services"

    const submitHandle = (e) => {
        fetch("https://perfect-click-server.vercel.app/addServices", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(services)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast("Services added Successfully")
                    setServices({})
                    e.target.reset()
                }
                else {
                    alert("services is not created")
                }
            })

        e.preventDefault()
    }
    const addProductHandle = (e) => {
        setServices({ ...services, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <h4 className='text-center font-semibold text-4xl my-3'>Add Services</h4>
            <div className=" w-full lg:w-3/5 mx-auto">
                <form onSubmit={submitHandle} className="card-body ">
                    <div className="form-control">
                        <label className="label" htmlFor='name'>
                            <span className="label-text">Service Name : </span>
                        </label>
                        <input type="text" onBlur={addProductHandle} defaultValue={services?.title} placeholder="Service name : " name='title' className="input input-bordered" required />
                    </div>

                    <div className='flex flex-col md:flex-row justify-between gap-6'>
                        <div className="form-control w-full">
                            <label className="label" htmlFor='price'>
                                <span className="label-text">Services Price : </span>
                            </label>
                            <input type="number" onBlur={addProductHandle} defaultValue={services?.price} placeholder="services price" name='price' className="input input-bordered" required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label" htmlFor='rating'>
                                <span className="label-text">Services Rating : </span>
                            </label>
                            <input type="number" onBlur={addProductHandle} defaultValue={services?.rating} placeholder="rating only number" name='rating' className="input input-bordered" required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label" htmlFor='totalOrder'>
                                <span className="label-text">Total Clients : </span>
                            </label>
                            <input type="number" onBlur={addProductHandle} defaultValue={services?.totalOrder} placeholder="total clint" name='totalOrder' className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label" htmlFor='photo'>
                            <span className="label-text">Services Phot URL : </span>
                        </label>
                        <input type="text" onBlur={addProductHandle} defaultValue={services?.photo} placeholder="services photo url" name='image' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label" htmlFor='photo'>
                            <span className="label-text">Details : </span>
                        </label>
                        <textarea name="details" onBlur={addProductHandle} className=' resize-none input input-bordered h-24' placeholder='details' required></textarea>
                    </div>
                    <div className="form-control mt-6">
                        <button type='submit' className="btn btn-primary">Add Product</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddServices;