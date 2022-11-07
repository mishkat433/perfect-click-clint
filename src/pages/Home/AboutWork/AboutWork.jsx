import React, { useEffect, useState } from 'react';


const AboutWork = () => {
    const [workInfo, setWorkInfo] = useState([])

    useEffect(() => {
        fetch('http://localhost:5200/workInfo')
            .then(res => res.json())
            .then(data => setWorkInfo(data))
    }, [])
    return (
        <div className=' my-20' data-aos="flip-up">
            {
                workInfo.length === 0 && <div className='flex justify-center mt-20'><button className="btn loading">loading...</button></div>
            }
            <div className='bg-gray-700 flex flex-col md:flex-row justify-around  rounded-xl p-5 md:p-0'>

                {
                    workInfo.map(contact =>
                        <div key={contact._id} className="text-white py-5  text-center md:py-16 items-center gap-5">
                            <h1 className='text-5xl mb-2 font-bold text-warning'>{contact.count}</h1>
                            <p className='text-xl uppercase'>{contact.title}</p>
                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default AboutWork;

