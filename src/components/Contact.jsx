"use client";
import axios from 'axios';
import Link from 'next/link'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {

    const [firstName,setFirstName] = useState('');
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    }

    const [lastName,setLastName] = useState('');
    const handleLastName = (e) => {
        setLastName(e.target.value);
    }

    const [email,setEmail] = useState('');
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const [message,setMessage] = useState('');
    const handleMessage = (e) => {
        setMessage(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (firstName == '') {
            toast.error('First Name Required');
        } else if (lastName == '') {
            toast.error('Last Name Required');
        } else if (email == '') {
            toast.error('Email Required');
        } else if (message == '') {
            toast.error('Message Required');
        } else {
            const x = await axios.post('/api/contact',{fname:firstName,lname:lastName,email:email,msg:message}); //object
            toast.success('Done!');

        }
    }

  return (
    <div>
        <section id='contact' className='bg-gray-50 py-20'>
            <div className='max-w-container m-auto px-2'>
                <div className='sm:flex items-center justify-center -mx-4'>

                    <div className='sm:w-1/2 px-4'>
                        <Link className='mb-6 inline-block' href='/'><img src="/contact-logo.svg" alt="" /></Link>
                        <p className='mb-4 text-5xl font-bold leading-normal'>So much more than a business analytics tool</p>
                        <p className='mb-8 text-gray-500 leading-loose'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis.</p>
                        <Link className='inline-block py-3 px-6  bg-green-600 hover:bg-green-700 text-white font-semibold rounded-l-xl rounded-t-xl duration-200 ease-in-out' href='#'>Get Started</Link>
                    </div>

                    <div className='sm:w-1/2 px-4'>
                        <form onSubmit={handleSubmit} action="" className='max-w-sm ml-auto mb-6 py-[34px] px-6 bg-white shadow rounded-t-3xl rounded-bl-3xl text-center'>
                            <p className='text-sm text-gray-400 mb-1'>Sign Up</p>
                            <p className='text-2xl mb-[26px]'>Create an account</p>
                            <div className='mb-4 flex -mx-2'>
                                <div className='w-1/2 px-2'>
                                    <input onChange={handleFirstName} type="text" placeholder="First Name" className='py-2 px-3 w-full bg-gray-50 rounded leading-loose' />
                                </div>
                                <div className='w-1/2 px-2'>
                                    <input onChange={handleLastName} type="text" placeholder="Last Name" className='py-2 px-3 w-full bg-gray-50 rounded leading-loose' />
                                </div>
                            </div>
                            <input onChange={handleEmail} className="mb-4 py-2 px-3 w-full bg-gray-50 rounded leading-loose" type="email" placeholder="hello@example.com"/>
                            <textarea onChange={handleMessage} className="mb-[17px] py-2 px-3 w-full bg-gray-50 rounded leading-loose" placeholder="Message"/>
                            <button type="submit" className="mb-4 py-4 w-full rounded-md text-sm bg-green-600 hover:bg-green-700 text-white font-semibold leading-normal duration-200 ease-in-out">Send</button>
                        </form>                     
                    </div>
                </div>
            </div>
            <Toaster position="bottom-center"></Toaster>
        </section>
    </div>
  )
}

export default Contact