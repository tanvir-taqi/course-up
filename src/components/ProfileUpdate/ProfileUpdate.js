import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';

const ProfileUpdate = () => {
    const {user} = useContext(AuthContext)

    return (
        <div className='py-32 flex justify-center'>
            <form  className=' w-full md:w-1/3 flex flex-col bg-slate-100 p-20 rounded-3xl'>
                <div className="form-group flex flex-col py-3">
                    <label className='text-lg font-medium' htmlFor="name">Full Name</label>
                    <input defaultValue={user?.displayName} className='border border-gray-700 text-black rounded-lg py-1 px-2' type="text" name="name" id="name" placeholder='Enter Your Full Name' />
                </div>
                <div className="form-group flex flex-col py-3">
                    <label className='text-lg font-medium' htmlFor="email">Email</label>
                    <input defaultValue={user?.email} readOnly className='border border-gray-700 text-black rounded-lg py-1 px-2' type="email" name="email" id="email" placeholder='Enter Your Email' />
                </div>
                <div className="form-group flex flex-col py-3">
                    <label className='text-lg font-medium' htmlFor="for">Photo URL</label>
                    <input defaultValue={user?.photoURL} className='border border-gray-700 text-black rounded-lg py-1 px-2' type="text" name="photo" id="photo" placeholder='Enter Your Photo URL' />
                </div>
                <div className="form-group flex flex-col py-3">
                    <label className='text-lg font-medium' htmlFor="password">Password </label>
                    <input className='border border-gray-700 text-black rounded-lg py-1 px-2' type='text' name="password" id="password" placeholder='Enter Your Password' />
                </div>
                <div className="form-group flex flex-col py-3">
                    <label className='text-lg font-medium' htmlFor="confirm">Confirm Password </label>
                    <input className='border border-gray-700 text-black rounded-lg py-1 px-2' type='password' name="confirm" id="confirm" placeholder='Confirm Your Password' />
                </div>
                <button className='mt-6 p-2 rounded-2xl bg-red-500' type="submit">Update</button>
                

            </form>
            
        </div>
    );
};

export default ProfileUpdate;