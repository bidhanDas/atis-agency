"use client";
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const NavBar = () => {

  const x = usePathname(); //ar jonno client component korte hoise...

  return (
    <div>
        <nav className='max-w-container m-auto py-8 px-2'>

          <div className='sm:flex sm:items-center'>
            <div className='sm:w-3/12'>
              <Link className='inline-block' href='/'>
                <img src="nav-logo.svg" alt="" />
              </Link>
            </div>

            <div className='sm:w-9/12'>
              <ul className='flex sm:justify-end sm:gap-x-10 justify-between'> 
                <Link href={"/"}><li className= {x==="/" ? "text-sm text-green-600 font-bold" : "text-sm text-gray-400 hover:text-gray-950 hover:scale-110 duration-300 ease-in-out"}>Start</li></Link>
                <Link href={"/team"}><li className= {x==="/team" ? "text-sm text-green-600 font-bold" : "text-sm text-gray-400 hover:text-gray-950 hover:scale-110 duration-300 ease-in-out"}>Team</li></Link>
                <Link href={'/services'}><li className= {x==="/services" ? "text-sm text-green-600 font-bold" : "text-sm text-gray-400 hover:text-gray-950 hover:scale-110 duration-300 ease-in-out"}>Services</li></Link>
                <Link href={'/projects'}><li className= {x==="/projects" ? "text-sm text-green-600 font-bold" : "text-sm text-gray-400 hover:text-gray-950 hover:scale-110 duration-300 ease-in-out"}>Projects</li></Link>
                <Link href={'/testimonials'}><li className= {x==="/testimonials" ? "text-sm text-green-600 font-bold" : "text-sm text-gray-400 hover:text-gray-950 hover:scale-110 duration-300 ease-in-out"}>Testimonials</li></Link>
                <Link href={'#contact'}><li className="text-sm text-gray-400 hover:text-gray-950 hover:scale-110 duration-300 ease-in-out">Contact</li></Link>
              </ul>
            </div>
          </div>

        </nav>
    </div>
  )
}

export default NavBar