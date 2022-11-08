import React, { useContext } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../../assets/perfectClickLogo.png";
import { AuthContex } from '../../../Contex/AuthProvider';
import notFound from "../../../assets/notFoundImage.png"

const Navbar = () => {
    const { loginUser, logout } = useContext(AuthContex)
    const menuItems = <>
        <li><NavLink className={({ isActive }) => isActive ? "text-black font-bold" : undefined} to="/home">Home</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? "text-black font-bold" : undefined} to="/services">Services</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? "text-black font-bold" : undefined} to="/blog">Blog</NavLink></li>
        {
            loginUser?.uid && <div className='flex'>
                <li><NavLink className={({ isActive }) => isActive ? "text-black font-bold" : undefined} to="/myReviews">My reviews</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? "text-black font-bold" : undefined} to="/addService">Add services</NavLink></li>
                <button className='btn bg-orange-500 capitalize border-none ml-2' onClick={() => logout()} >log out</button>
            </div>
        }
    </>
    return (
        <div className=' bg-base-100  shadow-lg mb-5 sticky top-0 z-20'>
            <div className="navbar w-11/12 mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to="/" className="flex items-center text-xl md:text-3xl gap-1 md:gap-3 font-semibold">
                        <img className='w-14 md:w-20' src={logo} alt="" />Perfect <span className='text-red-600'>Click</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        loginUser?.uid ?
                            <div className='flex items-center'>
                                <div className="dropdown dropdown-bottom dropdown-end ">
                                    <label tabIndex={0} className=" flex items-center gap-3">
                                        <img className='w-10 h-10 rounded-full' src={loginUser?.photoURL ? loginUser?.photoURL : notFound} alt="User" />
                                        <FaAngleDown />
                                    </label>
                                    <ul tabIndex={0} className="dropdown-content  p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                                        <li className='font-semibold uppercase'>{loginUser?.displayName}</li>
                                        <li>{loginUser?.email}</li>

                                        <button onClick={() => logout()} className="mt-3 btn btn-outline w-full text-black">Logout </button>
                                    </ul>

                                </div>
                            </div>
                            : <Link to="/login" className="btn bg-gray-5200 text-white">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;