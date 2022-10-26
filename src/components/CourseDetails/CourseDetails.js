import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import './CourseDetails.css'

const CourseDetails = () => {

    const  courseDetails = useLoaderData()

        const {_id,title,picture,rating,intro,about,name} = courseDetails

    return (
        <div className=' py-32  '>
           <div className=' details-container mx-20 border border-red-700 flex flex-col md:flex-row'>
           <div className='p-0'>
                <img src={picture} alt="" />
            </div>
            <div className='w-full flex flex-col justify-center items-center'>
                <h1 className='md:text-4xl lg:text-6xl font-extrabold'>{title}</h1>
                <p className='font-semibold'>Instructor: <span className='text-lg font-bold'>{name}</span> </p>
                <p className='flex items-center'>Rating: {rating} <span> <FaHeart></FaHeart> </span></p>
                <br />
                <p className='p-6'>{intro}</p>
                <Link to={`/courses/premium/${_id}`}>
                <button >Get Premium Access</button>
                </Link>
           </div>

            </div>
        </div>
    );
};

export default CourseDetails;