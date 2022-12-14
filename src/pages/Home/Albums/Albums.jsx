import React, { useEffect, useState } from 'react';



const Albums = () => {
    const [myShot, setMyShot] = useState([])

    useEffect(() => {
        fetch('https://perfect-click-server.vercel.app/album')
            .then(res => res.json())
            .then(data => setMyShot(data))
    }, [])
    return (
        <div className='my-10'>
            <div className='text-center'>
                <h3 className='text-2xl md:text-4xl font-bold mb-2'>My <span className='text-red-600'>Photography</span></h3>
                <p className='text-md md:text-lg'>See the best shots, that we've arranged into a portfolio</p>
            </div>
            {
                myShot.length === 0 && <div className='flex justify-center mt-20'><button className="btn loading">loading...</button></div>
            }
            <div className='grid grid-cols-2 lg:grid-cols-3 mt-10'>
                {
                    myShot.map((img, index) =>
                        <div key={index} className='' data-aos="flip-left">
                            <figure> <img className='w-full h-[200px] md:h-[300px] lg:h-[400px]' src={img.image} alt="" /></figure>
                        </div>
                    )
                }
            </div>
        </div >
    );
};

export default Albums;