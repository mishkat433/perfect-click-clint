import React from 'react';
import photographer from "../../../assets/photographer.webp";

const AboutMe = () => {
    return (
        <div className='mb-20'>
            <div className='text-center' >
                <h3 className='text-2xl md:text-4xl font-bold mb-2'><span className='text-red-600'>About</span> Me</h3>
                <p className='text-md md:text-lg'>I've been working as a professional wedding photographer all my adult life.</p>
            </div>
            <div className="flex justify-between items-center gap-10 bg-base-100 shadow-xl mt-10 rounded-xl" >
                <img className='w-1/2 h-full rounded-tl-xl rounded-bl-xl' src={photographer} alt="Movie" data-aos="fade-right" />
                <div className="w-1/2" data-aos="fade-left">
                    <h2 className="text-4xl uppercase mb-2 font-bold ">I'm Mishkat</h2>
                    <p className='mb-5 font-semibold'>a patinated photographer</p>
                    <p className='text-gray-500'>Right after my graduation from the Chattogram University of Photography in Chattogram, MA I began doing my gigs. After first few years of working at the event agency and with dozens of beautiful wedding sets already in my portfolio, I decided to give it a go and opened up my very own wedding photography service.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;