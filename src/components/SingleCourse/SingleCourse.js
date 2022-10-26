import React from 'react';
import { Link } from 'react-router-dom';
import './SingleCourse.css'
import { FaArrowRight, FaHeart } from "react-icons/fa";
const SingleCourse = ({course}) => {

    const {_id,title,picture,rating,intro,isActive} = course

    return (
        <div className='course-card p-6 border border-slate-100 relative'>
            {
                isActive && <div className='absolute inset-x-3/4 -inset-y-1    w-20 h-10 '><p className='font-medium text-center text-white shadow-lg  bg-red-600 rounded-3xl '>Trending</p></div>
            }
            
            <img src={picture} alt="" />
            <h1 className='text-xl font-semibold py-2'>{title}</h1>
            <p>{intro.lenght < 150 ? intro : intro.slice(0,150)}...</p>
            <div className=' py-6 flex md:flex-row flex-col justify-between items-center '>
                <p className='flex items-center'>Rating: {rating} <span className='text-red-700'> <FaHeart></FaHeart> </span></p>
                <Link to={`/courses/${_id}`} className='w-52 flex items-center justify-center py-1 rounded-tr-full rounded-br-lg font-semibold bg-stone-600'><p>See Details</p>  <span> <FaArrowRight ></FaArrowRight></span></Link>
            </div>
        </div>
    );
};

export default SingleCourse;