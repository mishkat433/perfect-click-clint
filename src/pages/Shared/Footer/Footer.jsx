import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../assets/perfectClickLogo.png";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-slate-500 p-10">
            <div className='w-11/12 mx-auto footer text-neutral-content flex justify-between'>
                <div>
                    <Link to="/" className=" text-3xl gap-3 font-semibold">
                        <img className='w-20' src={logo} alt="" />Perfect <span className='text-red-600'>Click</span></Link>
                    <p >It's a self owner services.  <br /> From Chattogram</p>
                </div>
                <div>
                    <span className="footer-title">Contact</span>
                    <div>
                        <p>Phone : 01521xxxxxx</p>
                        <p>mail : mishkat433@gmail.com</p>
                    </div>
                    <p>or</p>
                    <div className="grid grid-flow-col gap-4 mt-2">
                        <Link to="/" className='text-3xl hover:text-red-200 duration-300 hover:scale-110'><FaFacebookF /></Link>
                        <Link to="/" className='text-3xl hover:text-red-200 duration-300 hover:scale-110'><FaTwitter /></Link>
                        <Link to="/" className='text-3xl hover:text-red-200 duration-300 hover:scale-110'><FaLinkedinIn /></Link>
                    </div>
                </div>
            </div>
            <hr className='border-1 border-gray-600 mt-10' />
            <h4 className='text-white text-center text-lg mt-3'>Copyright &copy; All right reserved by Mishk@t - {new Date().getFullYear()} </h4>
        </footer>
    );
};

export default Footer;