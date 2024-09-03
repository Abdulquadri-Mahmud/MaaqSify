import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import GoogleAuth from '../components/GoogleAuth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signinFailure, signinStart, signinSuccess } from '../redux/user/userSlice';
import { FaEyeSlash } from "react-icons/fa";
import { Box, Heading, Text } from  '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';

export default function Signin() {
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({ });
    const {loading, error} = useSelector((state) => state.user);

    const inputRef = useRef();
    const lockPassword = useRef();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id] : e.target.value,
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            dispatch(signinStart());

            const response = await fetch('/api/auth/signin', {
                method: 'POST',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (data.success === false) {
                dispatch(signinFailure(data.message));
                return;
            }
            dispatch(signinSuccess(data));
            navigate('/');
        } catch (error) {
            dispatch(signinFailure(error));
            console.log(error);
        }        
    }

    const handleLockPassword = () => {
        let getInputType = inputRef.current.type;
        let getLockPassword = lockPassword.current;
        
        if (getInputType === 'password') {
          inputRef.current.type = 'text';
          if (inputRef.current.type === 'text') {
            getLockPassword.innerHTML = `
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path>
            </svg>              
            `;
          }
        }
        if (getInputType === 'text') {
          inputRef.current.type = 'password';
          if (inputRef.current.type = 'password') {
            getLockPassword.innerHTML = `
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"></path>
            </svg>
            `;
          }
        }
      }

  return (
    <div className='flex justify-center items-center mt-4 p-6'>
      <Box bg={useColorModeValue('#dde1e7')} className="md:w-[60%] w-[100%] p-6 rounded">
        <div className="">
            <Heading color={useColorModeValue('black', 'white')} className='text-center font-semibold text-3xl text-slate-50'>Welcome Back</Heading>
        </div>
        <form className='pt-6' onSubmit={handleSubmit}>
            <div className=" grid gap-2">
                <div className="">
                    <input  onChange={handleChange} id='email' type="email" placeholder='Email' className='w-[100%] outline-none border-none rounded p-3 bg-slate-200 placeholder:text-gray-400 font-semibold'/>
                </div>
                <div className="relative">
                    <input  onChange={handleChange} ref={inputRef} id='password' type="password" placeholder='Password' className='w-[100%] outline-none border-none rounded p-3 bg-slate-200 placeholder:text-gray-400 font-semibold' autoComplete='true'/>
                    <button type='button' onClick={handleLockPassword} ref={lockPassword} className='absolute top-4 right-4'><FaEyeSlash/></button>
                </div>
            </div>
            <div className="">
                <button type='submit' className='mt-5 p-3 w-full bg-slate-800 hover:opacity-80 duration-200 text-slate-100 font-semibold uppercase rounded'>
                    {
                        loading ? 'Loading...' : 'SignIn'
                    }
                </button>
            </div>
            {
                error && (<p className='pt-1 text-red-500 font-bold'>{error}</p>)
            }
            <div className="">
                <GoogleAuth/>
            </div>
            <div className='flex pt-5 gap-2'>
                <Text color={useColorModeValue('black', 'white')} className='font-semibold text-slate-100'>Not have an account?</Text>
                <Link to='/signup'>
                    <span className='font-semibold text-blue-700'>Sign Up</span>
                </Link>
            </div>
        </form>
      </Box>
    </div>
  )
}
