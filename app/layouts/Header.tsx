import React from 'react';

// Images
import logo from '../assets/images/logo/logo.png'
import Image from 'next/image';

export default function Header() {

  const myLoader = ({ src, width, quality }: any) => {
    return `${src}?w=${width}&q=${quality || 75}`
  }

  return (
    <header className='w-full h-20 boor flex flex-row items-center justify-between px-5 md:px-20'>
      {/* Logo */}
      <div className='w-full flex flex-row gap-2'>
        <div className='flex flex-row gap-1 items-end'>
          <Image
            className='w-8  h-8'
            // loader={myLoader}
            src={logo}
            alt="Alamondai Logo"
          />
          <p className='text-2xl font-bold'>Alamondai</p>

        </div>

      </div>

      {/* Menu */}
      <div>

      </div>

      {/* Contact Button */}
      <div>

      </div>

    </header>
  )
}
