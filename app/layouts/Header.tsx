"use client"
import React from 'react';
import NavLinks from './components/NavLinks';
import Link from 'next/link';

// Images
import logo from '../assets/images/logo/logo.png'
import Image from 'next/image';


export default function Header() {

  const myLoader = ({ src, width, quality }: any) => {
    return `${src}?w=${width}&q=${quality || 75}`
  }

  return (
    <header className='w-full h-20 flex flex-row items-center justify-between px-5 md:px-20 shadow-xl shadow-gray-100'>
      {/* Logo */}
      <div className='w-full flex flex-row gap-2'>
        <Link
          href={'/'}
          className='flex flex-row gap-2 items-end'>
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
      <div className='hidden md:flex w-full flex-row items-center justify-start gap-10'>
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
