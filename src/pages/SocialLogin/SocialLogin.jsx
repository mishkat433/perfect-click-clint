import React, { useContext, useState } from 'react';
import { FaGithubAlt, FaGoogle, FaLinkedinIn } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContex } from '../../Contex/AuthProvider';

const SocialLogin = () => {
    const { googleSiginIn, githubLogin } = useContext(AuthContex)
    const [error, setError] = useState("")

    const location = useLocation();
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || "/";

    const googleSiginHandle = () => {
        googleSiginIn()
            .then(result => {
                const user = result.user;
                const currentUser = {
                    email: user.email
                }
                fetch('https://perfect-click-server.vercel.app/jwt', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                }).then(res => res.json())
                    .then(data => {
                        localStorage.setItem("photo-token", data.token)
                        navigate(from, { replace: true })
                    })
                setError("")
            })
            .catch(err => setError(err.message))
    }

    const githubLoginhandle = () => {
        githubLogin()
            .then(result => {
                const user = result.user;
                const currentUser = {
                    email: user.email
                }
                fetch('https://perfect-click-server.vercel.app/jwt', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                }).then(res => res.json())
                    .then(data => {
                        localStorage.setItem("photo-token", data.token)
                        navigate(from, { replace: true })
                    })
                setError("")
            })
            .catch(err => setError(err.message))
    }
    return (
        <div>
            {error && <p className='text-center text-red-600 my-3'>{error}</p>}
            <div className='flex justify-evenly mb-3 mt-3'>
                <button onClick={googleSiginHandle} className='bg-gray-300 p-3 rounded-full text-orange-600 text-xl' ><FaGoogle /></button>
                <button onClick={githubLoginhandle} className='bg-gray-300 p-3 rounded-full text-gray-600 text-xl'><FaGithubAlt /></button>
                <button className='bg-gray-300 p-3 rounded-full text-blue-800 text-xl'><FaLinkedinIn /></button>
            </div>
        </div>
    );
};

export default SocialLogin;