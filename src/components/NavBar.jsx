"use client";
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const NavBar = () => {

  const x = usePathname(); //ar jonno client component korte hoise...

  return (
    <div>
        <nav className='relative px-6 py-6'>

          <Link className='inline-block' href='#'>
            <img src="nav-logo.svg" alt="" />
          </Link>

          <ul className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex gap-x-24'>  {/* transform: translate(?); */}
            <li><Link className={x==="/" ? "text-sm text-green-600 font-bold" : "text-sm text-gray-400 hover:text-gray-500 "} href={"/"}>Start</Link></li>
            <li><Link className={x==="/team" ? "text-sm text-green-600 font-bold" : "text-sm text-gray-400 hover:text-gray-500 "} href={"/team"}>Team</Link></li>
            <li><Link className={x==="/services" ? "text-sm text-green-600 font-bold" : "text-sm text-gray-400 hover:text-gray-500 "} href={'/services'}>Services</Link></li>
            <li><Link className={x==="/projects" ? "text-sm text-green-600 font-bold" : "text-sm text-gray-400 hover:text-gray-500 "} href={'/projects'}>Projects</Link></li>
            <li><Link className={x==="/testimonials" ? "text-sm text-green-600 font-bold" : "text-sm text-gray-400 hover:text-gray-500 "}  href={'/testimonials'}>Testimonials</Link></li>
          </ul>

        </nav>
    </div>
  )
}

export default NavBar