import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import SingleCourse from '../SingleCourse/SingleCourse';
import './Courses.css'

const Courses = () => {

    const courses  = useLoaderData()


    return (
        <div className='py-32 md:px-10 course-container'>
            
                <div className='flex flex-col'>
                    {
                        courses.map(course => <Link className='text-xl md:p-4 p-2 font-medium' key={course._id}  to={`/courses/${course._id}`}>{course.title}</Link>)
                    }
                </div>
                <div className='grid xl:grid-cols-2 grid-cols-1 gap-4'>
                    {
                        courses.map(course => <SingleCourse key={course._id} course={course}></SingleCourse>)
                    }
                </div>
           
        </div>
    );
};

export default Courses;