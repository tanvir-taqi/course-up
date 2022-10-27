import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';

const ProfileUpdate = () => {
    const {user,profileUpdate,setIsLoading,dark} = useContext(AuthContext)


    const handleUpdateProfile = (e)=>{
        e.preventDefault()
        const form = e.target 
       
        const name = form.name.value
        const photo = form.photo.value
        const profile = {
            displayName: name,
             photoURL: photo
        }
        profileUpdate(profile)
        .then(()=>{})
        .catch(err => console.log(err))
        .finally(()=>setIsLoading(false))
        

    }

    return (
        <div className='py-32 flex justify-center'>
            <form onSubmit={handleUpdateProfile} className={` w-full md:w-1/3 flex flex-col  ${dark?'bg-slate-300' : 'bg-slate-700' } p-20 rounded-3xl`}>
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
               
                <button className='mt-6 p-2 rounded-2xl bg-red-500' type="submit">Update</button>
                
            </form>
            
        </div>
    );
};

export default ProfileUpdate;