import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/img/logo.png'
import { BsFillBrightnessLowFill } from "react-icons/bs";
import { AuthContext } from '../../Context/AuthProvider';

const Navbar = () => {

    const {user, logOut}=useContext(AuthContext);
    const handleLogOut=()=>{
        logOut()
        .then(()=>{})
        .catch(error=>console.log(error));
    }

    const menuItem = <>
    <li><Link to={'/'}>Home</Link></li>
    <li><Link to={'/about'}>About</Link></li>
    <li><Link to={'/blog'}>Blog</Link></li>
    <li><Link to={'/contact'}>Contact</Link></li>
    {user?.uid ?
        <li><Link onClick={handleLogOut}>Sign Out</Link></li>
        :
        <li><Link to={'/login'}>Login</Link></li>
    }

</>
    
    return (
        <div className="navbar bg-base-300">
            <div className="navbar-start">
                <div className="dropdown ">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
                <div className="avatar">
                    <div className="w-24 rounded-full">
                        <img src={logo} alt='' />
                    </div>
                </div>

                <Link to={'/'} className=" text-xl">Labib  </Link><BsFillBrightnessLowFill className='animate-ping opacity-70 text-sky-500 mx-2'></BsFillBrightnessLowFill>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItem}
                </ul>
            </div>
            {/* <div className="navbar-end">
                <Link className="btn">Get started</Link>
            </div> */}
        </div>
    );
};

export default Navbar;