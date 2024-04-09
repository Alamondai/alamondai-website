import React from 'react'
import Image from 'next/image'

// Data
import { works } from '@/app/data/our-works';

// Component
import { showIcons } from '@/utils/showIcons';

export default function AngelSkin() {
  const work = works.find(work => work.id === 3);

  return (
    <div className='w-full mx-auto h-full min-h-screen md:container flex flex-col gap-10 py-28 px-5 md:px-20'>

      {/* Title */}
      <div className='w-full py-2 md:py-10'>
        <h1 className='text-3xl md:text-5xl text-primary font-bold'>{work!.name}</h1>
      </div>

      {/* Image */}
      <div className='w-full h-auto '>
        <Image
          className='w-full h-full object-fill rounded-xl border border-gray-200'
          src={work!.image}
          alt="Fitsum Print & Advert" />
      </div>

      {/* Content */}
      <div className='w-full h-full grid grid-cols-1 md:grid-cols-5 gap-10 '>

        {/* Left Side */}
        <div className='col-span-1 flex flex-col gap-5 '>
          {/* Service */}
          <div className='w-full flex flex-col gap-1 md:gap-3'>
            <h1 className='text-lg font-bold'>Services</h1>
            <p className='font-light text-gray-500'>Website Design, Website Development</p>
          </div>

          {/* Client */}
          <div className='w-full flex flex-col gap-1 md:gap-3'>
            <h1 className='text-lg font-bold'>Client</h1>
            <p className='font-light text-gray-500'>Private Client - Angela Rogers</p>
          </div>

          {/* Technologies */}
          <div className='w-full flex flex-col gap-1 md:gap-3'>
            <h1 className='text-lg font-bold'>Technologies</h1>
            <div className='py-2 flex flex-row gap-3'>
              {
                work!.technologies.map((items: any) => (
                  <span
                    key={items}
                    className="flex flex-row items-center">
                    {showIcons(items)}
                  </span>
                ))
              }
            </div>
          </div>
        </div>

        {/* Right Side*/}
        <div className='col-span-4 w-full h-full flex flex-col gap-10 md:px-5'>
          {/* Overview */}
          <div className='w-full flex flex-col gap-4'>
            <h1 className='w-full text-2xl md:text-3xl font-bold'>Overview</h1>
            <p className='w-full text-gray-500 md:text-lg'>
              Angel Skin Website was build for the purpose of showcasing the products and services of the client.
              The website was designed to be simple, clean and easy to navigate.

              The website was built using Vue.js and Tailwind CSS.
            </p>
          </div>

          {/* Features */}
          <div className='w-full flex flex-col gap-4'>
            <h1 className='w-full text-2xl md:text-3xl font-bold'>Features</h1>
            <div className='w-full text-gray-500 md:text-lg '>
              <ul className='list-disc list-inside'>
                <li>Customized Website</li>
                <li>Responsive Website</li>
                <li>Online Advertisement</li>
                <li>Advertising Products</li>
              </ul>
            </div>
          </div>





          {/* Screenshots */}
          <div className='w-full flex flex-col gap-4'>
            <h1 className='w-full text-2xl md:text-3xl font-bold'>Screenshots</h1>

            {/* Desktop Version */}
            <div className='w-full h-full flex flex-col gap-10'>
              {/* Home Page */}
              <div className='w-full h-full rounded-xl border-8 border-third overflow-hidden'>
                <Image
                  className='w-full h-full object-cover'
                  width={100}
                  height={100}
                  src={"https://i.ibb.co/kKnrY55/1.png"}
                  alt="Angel Skin Home Page"
                />
              </div>

              {/* About Page */}
              <div className='w-full h-full rounded-xl border-8 border-third overflow-hidden'>
                <Image
                  className='w-full h-full object-cover'
                  width={100}
                  height={100}
                  src={"https://i.ibb.co/fq45Z2Z/3.png"}
                  alt="Angel Skin About Page"
                />
              </div>

              {/* Gallery Page */}
              <div className='w-full h-full rounded-xl border-8 border-third overflow-hidden'>
                <Image
                  className='w-full h-full object-cover'
                  width={100}
                  height={100}
                  src={" https://i.ibb.co/gb2QkCK/2.png"}
                  alt="Angel Skin Service Page"
                />
              </div>

              {/* Contact Page */}
              <div className='w-full h-full rounded-xl border-8 border-third overflow-hidden'>
                <Image
                  className='w-full h-full object-cover'
                  width={100}
                  height={100}
                  src={" https://i.ibb.co/26TJMRz/4.png"}
                  alt="Angel Skin Contact Page"
                />
              </div>
            </div>



            {/* Mobile Version */}
            <div className='w-full h-full grid grid-cols-1 md:grid-cols-3 gap-10'>

              {/* Home page */}
              <div className='w-full h-full rounded-xl border-8 border-thirdborder-8 border-third'>
                <Image
                  className='w-full h-full object-fill'
                  width={100}
                  height={100}
                  src={" https://i.ibb.co/DKNjpVW/Screenshot-20240409-115119-Chrome.jpg"}
                  alt="Angel Skin Home Page"
                />
              </div>

              {/* Services page */}
              <div className='w-full h-full rounded-xl border-8 border-thirdborder-8 border-third'>
                <Image
                  className='w-full h-full object-fill'
                  width={100}
                  height={100}
                  src={"https://i.ibb.co/MZvXN9G/Screenshot-20240409-115136-Chrome.jpg"}
                  alt="Angel Skin Services Page"
                />
              </div>

              {/* About page */}
              <div className='w-full h-full rounded-xl border-8 border-thirdborder-8 border-third'>
                <Image
                  className='w-full h-full object-fill'
                  width={100}
                  height={100}
                  src={"https://i.ibb.co/hsPTzwX/Screenshot-20240409-115212-Chrome.jpg"}
                  alt="Angel Skin About Page"
                />
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}
