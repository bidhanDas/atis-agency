import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <section className='py-20 bg-gray-900'>
        <div className='max-w-container m-auto px-2.5'>
            <div className='pb-12 md:flex items-center justify-between border-b border-gray-800'>
                <div>
                    <Link className='inline-block' href='/'>
                        <img src="/footer-logo.svg" alt="" />
                    </Link>
                </div>

                <div>
                    <ul className='md:flex gap-x-20 items-center'>
                        <li><Link className='text-sm text-gray-400 hover:text-gray-600' href={'/'}>Start</Link></li>
                        <li><Link className='text-sm text-gray-400 hover:text-gray-600' href={"/team"}>Team</Link></li>
                        <li><Link className='text-sm text-gray-400 hover:text-gray-600' href={"/services"}>Services</Link></li>
                        <li><Link className='text-sm text-gray-400 hover:text-gray-600' href={"/projects"}>Projects</Link></li>
                        <li><Link className='text-sm text-gray-400 hover:text-gray-600' href={"/testimonials"}>Testimonials</Link></li>
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