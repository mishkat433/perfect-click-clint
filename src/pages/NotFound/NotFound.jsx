import React from 'react';
import { useRouteError } from 'react-router-dom';
import notFoundImg from "../../assets/error.gif";
import Navbar from '../Shared/Navbar/Navbar';

const NotFound = () => {
    const error = useRouteError()
    return (
        <div>
            <Navbar />
            <div className='flex flex-col items-center'>
                <h1 className='text-red-500 text-2xl'>{error.statusText}</h1>
                <h1 className='text-red-500 text-2xl'>{error.status}</h1>
                <img className='w-72 mt-20' src={notFoundImg} alt="not found" />
            </div>
        </div>
    );
};

export default NotFound;