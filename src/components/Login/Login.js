import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useState } from 'react';
import { useContext } from 'react';
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../context/UserContext';

const Login = () => {
const [showPassword, setShowPassword] = useState(false)
const {signInSocial} = useContext(AuthContext)
const providerGoogle = new GoogleAuthProvider();
const providerGithub = new GithubAuthProvider();

const handleSocialSignIn =(provider)=>{
    signInSocial(provider)
    .then(res=>{
        const user = res.user
    })
    .catch(err => console.log(err))
}

const handleLoginSubmit = (e)=>{
e.preventDefault()
}

    return (
        <div className='py-32 flex justify-center'> 
            <form onSubmit={handleLoginSubmit} className=' w-full md:w-1/3 flex flex-col bg-slate-100 p-20 rounded-3xl'>
                <div className="form-group flex flex-col py-3">
                    <label className='text-lg font-medium' htmlFor="email">Email</label>
                    <input className='border border-gray-700 text-black rounded-lg py-1 px-2' type="email" name="email" id="email" placeholder='Enter Your Email' />
                </div>
                <div className="form-group flex flex-col py-3">
                    <div className='flex justify-between items-center'>
                    <label className='text-lg font-medium' htmlFor="password">Password</label>
                    <div className="show-icon" onClick={()=>setShowPassword(!showPassword)}>
                      {
                          showPassword ?  <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                      } 
                    </div>
                    </div>
                    <input className='border border-gray-700 text-black rounded-lg py-1 px-2' type={showPassword ? 'text' : 'password'} name="password" id="password" placeholder='Enter Your Password' />
                </div>
                <button className='mt-6 p-2 rounded-2xl bg-red-500' type="submit">Log In</button>
                      <br />
                      <p className='text-center'>Or</p>
                      <br />

                <div className='flex flex-col'>
                <button className='mt-6 p-2 rounded-2xl bg-blue-500 flex items-center justify-center' onClick={()=>handleSocialSignIn(providerGoogle)}> <FaGoogle></FaGoogle> <span className='ml-1'>Sign In With Google</span> </button>
                <button className='mt-6 p-2 rounded-2xl bg-gray-600 flex items-center justify-center' onClick={()=>handleSocialSignIn(providerGithub)}> <FaGithub></FaGithub> <span className='ml-1'>Sign In With Github</span> </button>
                </div>
            </form>
            
        </div>
    );
};

export default Login;