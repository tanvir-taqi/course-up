import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiBars3BottomRight } from "react-icons/hi2";
import { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';
import './Header.css'
import { FaMoon, FaSun, FaUser } from 'react-icons/fa';



const Header = () => {
    const [display, setDisplay] = useState(false)
    const {user,logOut,setIsLoading,dark,setDark} = useContext(AuthContext)
    
    const handleDark=()=>{
        document.body.classList.toggle('light-theme')
        document.body.classList.toggle('dark-theme')
        setDark(!dark)

    }

    const handleLogOut =()=>{
            logOut()
            .then(res => {})
            .catch(err => console.log(err))
            .finally(()=>setIsLoading(false))
    }
    
    return (
        <div >
            <div className={`fixed z-50 w-full header py-5  ${dark ? 'bg-gray-300' : ' bg-gray-600'} flex flex-col md:flex-row justify-around items-center`}>
                <div className="header-logo flex justify-around around items-center w-full  md:w-1/6">
                    <Link to='/' onClick={()=>setDisplay(false)} className={`font-bold flex  ${dark ? 'text-emerald-900':' text-emerald-600'} text-2xl`}>Course<span className=' text-4xl font-extrabold text-gray-900 shadow-sm'>UP</span>  <small className={`premium-badge ${user || 'hidden'}`}>Premium</small>  </Link>
                    <button className='block md:hidden' onClick={()=>setDisplay(!display)}><HiBars3BottomRight></HiBars3BottomRight></button>
                </div>
                <div className={`nav-menu flex  md:items-center flex-col md:flex-row   ${display ? 'flex':'hidden md:flex'}`} onClick={()=>setDisplay(false)}>
                    <div className="nav-menu-link items-start flex flex-col md:flex-row py-12 md:py-1 ">
                        <Link className={`mr-4 text-lg font-semibold  ${dark ? 'text-gray-700 hover:text-black': ' text-black hover:text-gray-400'} `} to='/home'>Home</Link>
                        <Link className={`mr-4 text-lg font-semibold  ${dark ? 'text-gray-700 hover:text-black': ' text-black hover:text-gray-400'} `} to='/courses'>Courses</Link>
                        <Link className={`mr-4 text-lg font-semibold  ${dark ? 'text-gray-700 hover:text-black': ' text-black hover:text-gray-400'} `} to='/blogs' >Blog</Link>
                        <Link className={`mr-4 text-lg font-semibold  ${dark ? 'text-gray-700 hover:text-black': ' text-black hover:text-gray-400'} `} to='/faq' >FAQ</Link>
                        
                    </div>
                    <div className="user  md:mx-2 ">
                        {
                            user ? <div className='flex items-center'>
                              <Link to='/update'> {user?.photoURL ? <img src={user?.photoURL} alt="" className="user-img cursor-pointer" title={user?.displayName} /> : <FaUser></FaUser>} </Link>
                                <button onClick={handleLogOut} className='mx-2'>Log Out</button>

                            </div> : <Link to='/login' className=' font-semibold text-lg'>Log In </Link>
                        }
                        
                    </div>
                    <div className='md:mx-4 md:my-3 text-2xl' onClick={handleDark}>
                        {
                            dark ? <span className='text-blue-800'><FaMoon></FaMoon></span> :  <span className='text-yellow-500'><FaSun></FaSun></span>
                        }
                    </div>
                </div>
            </div>
       
        </div>
    );
};

export default Header;