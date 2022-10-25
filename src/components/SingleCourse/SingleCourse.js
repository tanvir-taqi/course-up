import React from 'react';
import './SingleCourse.css'

const SignleCourse = ({course}) => {

    const {_id,name,title,picture,rating,intro} = course

    return (
        <div className='course-card p-6 border'>
            <img src={picture} alt="" />
            <h1 className='text-xl font-semibold'>{course.title}</h1>
        </div>
    );
};

export default SignleCourse;