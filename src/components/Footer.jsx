import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <section className='py-20 bg-gray-900'>
        <div className='max-w-container m-auto px-2'>
            <div className='pb-12 md:flex items-center justify-between border-b border-gray-800'>
                <div>
                    <Link className='inline-block' href='/'>
                        <img src="/footer-logo.svg" alt="" />
                    </Link>
                </div>

                <div>
                    <ul className='md:flex gap-x-20 items-center'>
                        <Link href={'/'}><li className='text-sm text-gray-400 hover:text-gray-600'>Start</li></Link>
                        <Link href={"/team"}><li className='text-sm text-gray-400 hover:text-gray-600'>Team</li></Link>
                        <Link href={"/services"}><li className='text-sm text-gray-400 hover:text-gray-600'>Services</li></Link>
                        <Link href={"/projects"}><li className='text-sm text-gray-400 hover:text-gray-600'>Projects</li></Link>
                        <Link href={"/testimonials"}><li className='text-sm text-gray-400 hover:text-gray-600'>Testimonials</li></Link>
                    </ul>
                </div>
            </div>

            <div className='mt-8 flex justify-between items-center'>
                <div>
                    <p className='text-sm text-gray-400'>© 2024. All rights reserved.</p>
                </div>
                <div>
                    <div className='inline-block mr-2 p-2 bg-gray-800 hover:bg-gray-700 rounded cursor-pointer duration-300 ease-in-out'>
                        <img src="/fb.svg" alt="" />
                    </div>
                    <div className='inline-block mr-2 p-2 bg-gray-800 hover:bg-gray-700 rounded cursor-pointer duration-300 ease-in-out'>
                        <img src="/twi.svg" alt="" />
                    </div>
                    <div className='inline-block p-2 bg-gray-800 hover:bg-gray-700 rounded cursor-pointer duration-300 ease-in-out'>
                        <img src="/insta.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer