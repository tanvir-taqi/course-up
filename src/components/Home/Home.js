import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/styles.css';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {

  
    return (
        <div className='py-32 '>
            
            <div className='md:mx-20 relative  '>
            <div className='absolute z-10 md:inset-x-96 md:inset-y-52 inset-20 text-white flex justify-center items-center flex-col '>
                <h1 className=' font-bold text-3xl my-3'>WelCome To <span className='text-4xl font-extrabold'>CourseUP</span></h1>
                <p className='my-3'>The Programming Courses Online!!</p>
                <Link to='/courses' className='bg-gray-700 px-6 py-1 rounded-l-full '>Courses</Link>
            </div>
                <div className='slider-bg rounded-lg'  >
                <AwesomeSlider animation="cubeAnimation">
          <div data-src="assets/4239567_90440.png" />
          <div data-src="assets/8289968_25328.png" />
          <div data-src="assets/13311405_v627-aew-23-technologybackground.png" />
          <div data-src="assets/12686644_SL-103020-37400-03.png" />
        </AwesomeSlider>
                </div>
         
            </div>

        </div>
    );
};

export default Home;