import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useState } from 'react';
import { useContext } from 'react';
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const { signInSocial, signInUser ,setIsLoading,dark} = useContext(AuthContext)
    const providerGoogle = new GoogleAuthProvider();
    const providerGithub = new GithubAuthProvider();
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const [error,setError] = useState('')

    const handleSocialSignIn = (provider) => {
        signInSocial(provider)
            .then(res => {
                const user = res.user
                
                navigate(from, { replace: true })
            })
            .catch(err => alert(err))
            .finally(()=>setIsLoading(false))
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        signInUser(email,password)
        .then(res=>{
            const user = res.user
            
            navigate(from, { replace: true })
        })
        .catch(() => setError("Wrong Email Or Password"))
        .finally(()=>setIsLoading(false))
    }

    return (
        <div className='py-32 flex justify-center'>
            <form onSubmit={handleLoginSubmit} className={` w-full md:w-1/3 flex flex-col  ${dark?'bg-slate-300' : 'bg-slate-700' } p-20 rounded-3xl`}>
                <div className="form-group flex flex-col py-3">
                    <label className='text-lg font-medium' htmlFor="email" >Email</label>
                    <input required className='border border-gray-700 text-black rounded-lg py-1 px-2' type="email" name="email" id="email" placeholder='Enter Your Email' />
                </div>
                <div className="form-group flex flex-col py-3">
                    <div className='flex justify-between items-center'>
                        <label className='text-lg font-medium' htmlFor="password" >Password</label>
                        <div className="show-icon" onClick={() => setShowPassword(!showPassword)}>
                            {
                                showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                            }
                        </div>
                    </div>
                    <input className='border border-gray-700 text-black rounded-lg py-1 px-2' type={showPassword ? 'text' : 'password'} name="password" id="password" placeholder='Enter Your Password'  required/>
                </div>
                <button className={`mt-6 p-2 rounded-2xl bg-slate-600 hover:bg-slate-800 text-white`} type="submit">Log In</button>
                <p className='text-red-700 py-2 font-medium'>{error}</p>
                <p className='py-2'>Don't have an account ? <Link to='/register' className='text-blue-500'>Create Now</Link></p>
                <br />
                <p className='text-center'>Or</p>
                <br />

                <div className='flex flex-col'>
                    <button className='mt-6 p-2 rounded-2xl bg-blue-500 flex items-center justify-center' onClick={() => handleSocialSignIn(providerGoogle)}> <FaGoogle></FaGoogle> <span className='ml-1'>Sign In With Google</span> </button>
                    <button className='mt-6 p-2 rounded-2xl bg-gray-600 flex items-center justify-center' onClick={() => handleSocialSignIn(providerGithub)}> <FaGithub></FaGithub> <span className='ml-1'>Sign In With Github</span> </button>
                </div>
            </form>

        </div>
    );
};

export default Login;