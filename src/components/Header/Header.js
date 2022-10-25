import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiBars3BottomRight } from "react-icons/hi2";
import { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';

const Header = () => {
    const [display, setDisplay] = useState(false)
    const bgh = useContext(AuthContext)

    
    return (
        <div>
            <div className=" fixed w-full header py-5 bg-emerald-200 flex flex-col md:flex-row justify-around items-center">
                <div className="header-logo flex justify-around around items-center w-full  md:w-1/6">
                    <Link to='/' onClick={()=>setDisplay(false)} className='font-bold text-emerald-900 text-2xl'>Course<span className=' text-4xl font-extrabold text-gray-900 shadow-sm'>UP</span> </Link>
                    <button className='block md:hidden' onClick={()=>setDisplay(!display)}><HiBars3BottomRight></HiBars3BottomRight></button>
                </div>
                <div className={`nav-menu flex  md:items-center flex-col md:flex-row  ${display ? 'flex':'hidden md:flex'}`} onClick={()=>setDisplay(false)}>
                    <div className="nav-menu-link items-start flex flex-col md:flex-row py-12 md:py-1 ">
                        <Link className='mr-4 text-lg font-semibold text-gray-700 hover:text-black' to='/home'>Home</Link>
                        <Link className='mr-4 text-lg font-semibold text-gray-700 hover:text-black' to='/courses'>Courses</Link>
                        <Link className='mr-4 text-lg font-semibold text-gray-700 hover:text-black' >Blog</Link>
                    </div>
                    <div className="user  mx-0 ">
                        <Link className=''>Log In </Link>
                    </div>
                </div>
            </div>
       
        </div>
    );
};

export default Header;