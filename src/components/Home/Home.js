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
            <div className='absolute md:inset-x-96 md:inset-y-52 inset-20 text-white flex justify-center items-center flex-col  z-50'>
                <h1 className=' font-bold text-3xl'>WelCome To CourseUP</h1>
                <p>The Programming Courses Online!!</p>
                <Link to='/courses' className='bg-gray-700 px-6 py-1 rounded-l-full '>Courses</Link>
            </div>
                <div className='slider-bg rounded-lg'  >
                <AwesomeSlider animation="cubeAnimation">
          <div data-src="https://i.ibb.co/2cYGz55/8289968-25328.jpg" />
          <div data-src="https://i.ibb.co/7kDVyfy/4239567-90440.jpg" />
          <div data-src="https://i.ibb.co/Fb25zM8/12686644-SL-103020-37400-03.jpg" />
        </AwesomeSlider>
                </div>
         
            </div>

        </div>
    );
};

export default Home;