import React from 'react';
import { FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa';


const Footer = () => {
    return (
        <div className='py-24 md:px-24 p-6' >
            <div className='flex flex-col text-center'>
                <h1 className="text-3xl  font-bold">Contact Me</h1>
                <p className='my-6'>Rochester,North Dakota, United States</p>
                <p>Email : fakemail@email.com</p>
                <div className='flex my-6'>
                    <div className={`mx-2 hover:text-gray-700`}><FaFacebook></FaFacebook></div>
                    <div className={`mx-2 hover:text-gray-700`}><FaGithub></FaGithub> </div>
                    <div className={`mx-2 hover:text-gray-700`}><FaTwitter></FaTwitter></div>
                </div>
               

            </div>

            <p className='text-center'><small>Copyrights reserved: 2022</small></p>
        </div>
    );
};

export default Footer;