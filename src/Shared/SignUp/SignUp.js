import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [signUpError, setsignUpError]=useState('');
    const {createUser,updateUser}=useContext(AuthContext);

    const handleSignUp = data => {
        console.log(data);
        setsignUpError('');
        createUser(data.mail, data.password)
        .then(result=>{
            const user=result.user;
            console.log(user);
            toast('User Create Successfully')
            const userInfo={
                displayName:data.name
            }
            updateUser(userInfo)
            .then(()=>{})
            .catch(error=>console.log(error));
        })
        .catch(error=> {
            console.log(error.message)
            setsignUpError(error.message);
        });
    }
    return (
        <div className='hero m-10'>
            <form onSubmit={handleSubmit(handleSignUp)}>

                <div className='card shadow-2xl p-10 w-96'>
                    <h1 className='text-center text-4xl font-bold font-serif'>Sign Up</h1>
                    <div className="w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input {...register("name", { required: "Name is required" })} type="text" placeholder="Name" className="input input-bordered input-primary w-full max-w-xs" />
                        {errors.name && <p className='text-red-500' role="alert">{errors.name?.message}</p>}
                    </div>
                    <div className="w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register("mail", { required: "Email Address is required" })} type="email" placeholder="Email" className="input input-bordered input-primary w-full max-w-xs" />
                        {errors.mail && <p className='text-red-500' role="alert">{errors.mail?.message}</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input {...register("password", { required: "Password Address is required", minLength: { value: 6, message: "Password must be 6 characters" } })} type="password" placeholder="Password" className="input input-bordered input-primary w-full max-w-xs" />
                        {errors.password && <p className='text-red-500' role="alert">{errors.password?.message}</p>}
                    </div>
                    
                        {signUpError && <p className='text-red-500'>{signUpError}</p>}
                    <input className="btn btn-primary my-5" type="submit" value="Sign Up" />
                    <p>All ready have an account <Link className=' text-rose-700' to={'/login'}>Please Login</Link></p>
                </div>
                <div className="flex flex-col w-full border-opacity-50">
                    <div className="divider">OR</div>
                    <Link className='btn btn-outline btn-primary'>Login With Google</Link>
                    <Link className='btn btn-outline btn-primary mt-5'>Login With GitHub</Link>
                </div>
            </form>
        </div>
    );
};

export default SignUp;