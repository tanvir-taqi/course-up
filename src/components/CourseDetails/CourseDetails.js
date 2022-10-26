import jsPDF from 'jspdf';
import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import './CourseDetails.css'


const CourseDetails = () => {

    const courseDetails = useLoaderData()
    
    const { _id, title, picture, rating, intro, about, name ,price} = courseDetails

    const generatePDF =()=>{
            const doc = new jsPDF()
            doc.text(20,20,`${title}`)
            doc.text(20,40,`Instructor : ${name}`)
            doc.text(20,60,`Course Fee : ${price}`)
            doc.addImage(picture,50,80,120,80)
            doc.save(`${title}.pdf`)
    }

    return (
        <div className=' py-32  '>
            <div className='flex flex-col items-center justify-center my-10'>
                <h1 className='text-2xl py-2'>Here we Present one of the best online course : <span className='text-emerald-900 font-semibold'>{title}</span></h1>

            <button onClick={generatePDF} className='bg-slate-500 px-4 py-2 rounded'>Download PDF</button>
            </div>
          
            <div className=' details-container mx-20 border border-red-700 flex flex-col md:flex-row'>
                <div className='p-0'>
                    <img src={picture} alt="" />
                </div>
                <div className='w-full flex flex-col justify-center items-center'>
                    <h1 className='md:text-4xl lg:text-6xl font-extrabold'>{title}</h1>
                    <p className='font-semibold'>Instructor: <span className='text-lg font-bold'>{name}</span> </p>
                    <p className='flex items-center'>Rating: {rating} <span className='text-red-700'> <FaHeart></FaHeart> </span></p>
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