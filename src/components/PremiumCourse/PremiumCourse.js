import React from 'react';
import { useContext } from 'react';
import { FaHeart } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const PremiumCourse = () => {
    const course = useLoaderData()
    const {user} = useContext(AuthContext)
   const {_id,title,picture,rating,intro,about,name,price} = course

    return (
        <div className='py-32 px-3 md:px-32'>
           <div className="premium-header">
            <h1 className="text-center text-2xl">Welcome <Link to='/update' className='font-medium text-emerald-700'> {user?.displayName}</Link> to Our Premium course <span className='text-4xl font-extrabold text-emerald-900'>{title}</span> </h1>
            <p className='my-4 text-3xl font-bold text-center'>Course Fee : {price}</p>

            <div className='my-6 mb-10 flex justify-center'>
            <button className='mx-auto bg-slate-500 py-3 px-7 rounded-xl font-semibold'>Enroll Now</button>
           </div>
           </div>
           <img className='mx-auto my-4' src={picture} alt="" />
           <p className='font-semibold my-2'>Instructor: <span className='text-lg font-bold'>{name}</span> </p>
           
           <div>
           <p>{intro}</p>
           <p>{about}</p>
           </div>
           <p className='my-5 text-lg font-medium flex items-center'>Rating: {rating} <span className='text-red-700'> <FaHeart></FaHeart> </span></p>

           <p className='my-4 text-3xl font-bold'>Course Fee : {price}</p>
           <div className='my-6 flex justify-center'>
            <button className='mx-auto bg-slate-500 py-3 px-7 rounded-xl font-semibold'>Enroll Now</button>
           </div>
        </div>
    );
};

export default PremiumCourse;