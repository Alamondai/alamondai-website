import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Images
import heroImage from '../assets/images/home/hero.png';

export default function SectionOne() {
  return (
    <div className='w-full h-full'>
      <div className='w-full h-full mx-auto 2xl:container relative grid grid-cols-1 md:grid-cols-2 gap-10 py-10 md:py-20 2xl:px-0 px-5 md:px-20'>
        {/* Left Section */}
        <div className='w-full h-full flex flex-col gap-5 md:gap-8 items-start justify-center'>
          <div className='flex flex-col gap-1 md:gap-5 text-4xl md:text-5xl'>
            <p className='font-light'>Great <span className='text-third'>Software</span> is</p>
            <p className='font-bold'>built by great <span className='text-third'>teams</span></p>
          </div>
          <div className='md:pr-32'>
            <p className='text-light text-sm md:text-base'>We help build and manage a team of world-class developers to bring your vision to life</p>
          </div>
          <div>
            <Link
              href={'/pricing'}
              className='px-2 py-2 md:px-5 md:py-3 text-sm md:text-base rounded text-white bg-third'>
              {"Let's get Started!"}
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className='w-full h-full'>
          <Image
            className='w-full h-full'
            src={heroImage}
            alt="Hero Image"
          />
        </div>
        <div className='w-20 h-20 absolute -bottom-20 left-[35%] rounded-full z-5 bg-gradient-to-tr from-primary via-secondary to-fourth'>
        </div>
      </div>
    </div>
  )
}
