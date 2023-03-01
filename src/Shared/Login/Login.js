import React, { useContext } from 'react';
import login from '../../Assets/img/login.jpg'
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';


const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
   
    const [loginError, setLoginError]=useState('');
    const {signIn}=useContext(AuthContext);
    // redirect
    const location=useLocation();
    const navigate=useNavigate();

    const from=location.state?.from?.pathname || '/';

    const handleLogin=data=>{
        console.log(data);
        setLoginError('');

        signIn(data.mail, data.password)
        .then(result=>{
            const user=result.user;
            console.log(user);
            navigate(from, {replace:true})
        })
        .catch(error=>{
            console.log(error.message)
            setLoginError(error.message);

        });
    }

    return (
        <div className='hero m-10'>

            <form onSubmit={handleSubmit(handleLogin)}>

                <div className='card shadow-2xl p-10 w-96'>
                    <h1 className='text-center text-4xl font-bold font-serif'>Login</h1>
                    <div className="w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register("mail",{ required: "Email Address is required" })} type="email" placeholder="Email" className="input input-bordered input-primary w-full max-w-xs" />
                        {errors.mail && <p className='text-red-500' role="alert">{errors.mail?.message}</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input {...register("password", { required: "Password Address is required", minLength: { value: 6, message: "Password must be 6 characters"} })} type="password" placeholder="Password" className="input input-bordered input-primary w-full max-w-xs" />
                        {errors.password && <p className='text-red-500' role="alert">{errors.password?.message}</p>}
                    </div>
                    <label className="label">
                        <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                    </label>


                    {loginError && <p className='text-red-500'>{loginError}</p>}
                    <input className="btn btn-primary my-5" type="submit" value="Login"/>
                    <p>New to Delicious <Link className='text-rose-700' to={'/signUp'}>Please Singup</Link></p>
                </div>
                <div className="flex flex-col w-full border-opacity-50">
                    <div className="divider">OR</div>
                    <Link className='btn btn-outline btn-primary'>Login With Google</Link>
                    <Link className='btn btn-outline btn-primary mt-5'>Login With GitHub</Link>
                </div>
            </form>



            {/* <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Login;