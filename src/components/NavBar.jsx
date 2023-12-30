"use client";
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const NavBar = () => {

  const x = usePathname(); //ar jonno client component korte hoise...

  return (
    <div>
        <nav className='max-w-container m-auto py-8 px-2.5'>

          <div className='sm:flex sm:items-center'>
            <div className='sm:w-3/12'>
              <Link className='inline-block' href='/'>
                <img src="nav-logo.svg" alt="" />
              </Link>
            </div>

            <div className='sm:w-9/12'>
              <ul className='flex sm:justify-end sm:gap-x-10 justify-between'> 
                <li><Link className={x==="/" ? "text-sm text-green-600 font-bold" : "text-sm text-gray-400 hover:text-gray-950"} href={"/"}>Start</Link></li>
                <li><Link className={x==="/team" ? "text-sm text-green-600 font-bold" : "text-sm text-gray-400 hover:text-gray-950 duration-300 ease-in-out"} href={"/team"}>Team</Link></li>
                <li><Link className={x==="/services" ? "text-sm text-green-600 font-bold" : "text-sm text-gray-400 hover:text-gray-950 duration-300 ease-in-out"} href={'/services'}>Services</Link></li>
                <li><Link className={x==="/projects" ? "text-sm text-green-600 font-bold" : "text-sm text-gray-400 hover:text-gray-950 duration-300 ease-in-out"} href={'/projects'}>Projects</Link></li>
                <li><Link className={x==="/testimonials" ? "text-sm text-green-600 font-bold" : "text-sm text-gray-400 hover:text-gray-950 duration-300 ease-in-out"}  href={'/testimonials'}>Testimonials</Link></li>
              </ul>
            </div>
          </div>

        </nav>
    </div>
  )
}

export default NavBar