import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const Register = () => {
    const { createUser, setIsLoading, profileUpdate, dark } = useContext(AuthContext)
    const [authErr , setAUthErr] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'


  

    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const name = form.name.value
        const photo = form.photo.value
        const password = form.password.value
        const confirm = form.confirm.value


        if (password === confirm) {
            createUser(email, password)
                .then(res => {
                    const user = res.user
                    const profile = {
                        displayName: name,
                        photoURL: photo
                    }
                    profileUpdate(profile)
                        .then(() => {
                            navigate(from, { replace: true })
                            setIsLoading(false)
                            form.reset()
                        })
                        .catch(err => console.log(err))

                })
                .catch(err => {
                    if(err){
                        setAUthErr("Password should be at least 6 characters ")
                    }
                 
                  
                })
                
        }else{
            setAUthErr('Password did not match.')
        }

    }


    return (
        <div className='py-32 flex justify-center'>
            <form onSubmit={handleRegister} className={` w-full md:w-1/3 flex flex-col  ${dark ? 'bg-slate-300' : 'bg-slate-700'} p-20 rounded-3xl`}>
                <div className="form-group flex flex-col py-3">
                    <label className='text-lg font-medium' htmlFor="name">Full Name</label>
                    <input className='border border-gray-700 text-black rounded-lg py-1 px-2' type="text" name="name" id="name" placeholder='Enter Your Full Name' />
                </div>
                <div className="form-group flex flex-col py-3">
                    <label className='text-lg font-medium' htmlFor="email">Email</label>
                    <input required className='border border-gray-700 text-black rounded-lg py-1 px-2' type="email" name="email" id="email" placeholder='Enter Your Email' />
                </div>
                <div className="form-group flex flex-col py-3">
                    <label className='text-lg font-medium' htmlFor="for">Photo URL</label>
                    <input className='border border-gray-700 text-black rounded-lg py-1 px-2' type="text" name="photo" id="photo" placeholder='Enter Your Photo URL' />
                </div>
                <div className="form-group flex flex-col py-3">
                    <label className='text-lg font-medium' htmlFor="password" >Password </label>
                    <input required  className='border border-gray-700 text-black rounded-lg py-1 px-2' type='password' name="password" id="password" placeholder='Enter Your Password' />
               

                </div>
                <p className='text-red-500'>{authErr}</p>
                <div className="form-group flex flex-col py-3">
                    <label className='text-lg font-medium' htmlFor="confirm">Confirm Password </label>
                    <input required className='border border-gray-700 text-black rounded-lg py-1 px-2' type='password' name="confirm" id="confirm" placeholder='Confirm Your Password' />
                </div>
                <button className='mt-6 p-2 mb-3 rounded-2xl bg-slate-600 hover:bg-slate-800 text-white' type="submit">Register</button>
                <p>Already have an account ? <Link to='/login' className='text-blue-500'>Sign In Now</Link></p>

            </form>

        </div>
    );
};

export default Register;