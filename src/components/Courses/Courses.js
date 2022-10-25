import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCourse from '../SingleCourse/SingleCourse';

const Courses = () => {

    const courses  = useLoaderData()

    return (
        <div className='py-32 course-container'>
            
                <div>

                </div>
                <div>
                    {
                        courses.map(course => <SingleCourse key={course._id} course={course}></SingleCourse>)
                    }
                </div>
           
        </div>
    );
};

export default Courses;