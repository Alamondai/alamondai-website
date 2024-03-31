"use client"
import React, { useEffect } from 'react';
import NavLinks from './components/NavLinks';
import Link from 'next/link';
import { usePathname } from 'next/navigation'

// Images
import logo from '../assets/images/logo/logo.png'
import Image from 'next/image';


export default function Header() {
  const pathname = usePathname();

  const headerStyle = pathname ===
    "/service" ?
    "bg-transparent" :
    "bg-white shadow-lg shadow-gray-100";

  return (
    <header
      className={`w-full fixed h-20 flex flex-row items-center justify-between gap-5 px-5 md:px-20 z-40 ${headerStyle}`}>
      {/* Logo */}
      <div className='w-full flex flex-row gap-2'>
        <Link
          href={'/'}
          className='flex flex-row gap-2 items-end bg-white  px-4 py-2 rounded-full'>
          <Image
            className='w-8  h-8'
            // loader={myLoader}
            src={logo}
            alt="Alamondai Logo"
          />
          <p className='text-2xl font-bold'>Alamondai</p>
        </Link>
      </div>

      {/* Menu */}
      <div className='hidden md:flex w-full flex-row items-center justify-start gap-10 bg-white px-4 py-2 rounded-full'>
        <NavLinks href="/about" exact className="">
          About Us
        </NavLinks>
        <NavLinks href="/service" exact className="">
          Services
        </NavLinks>
        <NavLinks href="/pricing" exact className="">
          Pricing
        </NavLinks>
        <NavLinks href="/blog" exact className="">
          Blog
        </NavLinks>
        <NavLinks href="/how-it-work" exact className="">
          How it Works
        </NavLinks>
      </div>

      {/* Contact Button */}
      <div className='hidden md:flex w-auto  h-auto  items-center justify-center'>
        <button className='w-32 py-2 rounded text-white bg-gradient-to-tr from-primary via-secondary to-fourth transition-main'>
          Contact us
        </button>

      </div>

    </header>
  )
}
