import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from "../../assets/login.gif"
import { AuthContex } from '../../Contex/AuthProvider';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const { loginUserManualy } = useContext(AuthContex)
    const [formData, setFormData] = useState(null)
    const [error, setError] = useState("")

    const location = useLocation();
    const navigate = useNavigate()

    document.title = "Login"

    const from = location.state?.from?.pathname || "/";

    const LoginHandle = (e) => {
        if (formData?.email) {
            if (formData?.password) {
                loginUserManualy(formData.email, formData.password)
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
                    })
                    .catch(err => setError(err.message))
                setError("")
            }
            else {
                setError("password must be uppercase, lowercase and dist")
            }
        }
        else {
            setError("please enter valid email");
        }
        e.preventDefault()
    }

    const formHandle = (e) => {
        let isValid = true
        if (e.target.name === "email") {
            isValid = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e.target.value)
        }
        if (e.target.name === "password") {
            isValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(e.target.value)
        }

        if (isValid) {
            setFormData({ ...formData, [e.target.name]: e.target.value })
            setError("")
        }
        else {
            setError(`Your ${e.target.name} is not valid`)
            setFormData({ ...formData, [e.target.name]: "" })
        }
    }
    return (
        <div className="w-11/12 mx-auto h-full  my-5 md:my-10">
            <div className="flex justify-around items-center gap-10">
                <div className="text-center lg:text-left hidden lg:block" data-aos="fade-right">
                    <img src={loginImg} alt="" />
                </div>
                <div className="card shadow-2xl w-full lg:w-2/5" data-aos="fade-left">
                    <form onSubmit={LoginHandle} className="card-body ">
                        <h1 className='text-center text-3xl font-bold'>Login</h1>
                        {error && <p className='text-center text-red-500'>{error}</p>}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input onChange={formHandle} name="email" type="email" placeholder="your email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input onChange={formHandle} type="password" placeholder="your password" name='password' className="input input-bordered" />
                        </div>
                        <div className='flex items-center gap-3'>
                            <input type="checkbox" name="check" id="" className='w-5 h-5' />
                            <label htmlFor="check">Show password</label>
                        </div>
                        <div>
                            <label className="label">
                                <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <button className="btn bg-orange-600 border-none">Login</button>
                        </div>
                        <h5 className='text-center'>or Sign in with</h5>
                    </form>
                    <SocialLogin />
                    <p to="/" className='text-center text-lg mb-10'>Don't have an account?
                        <Link to="/register" className='font-bold text-orange-600'>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;