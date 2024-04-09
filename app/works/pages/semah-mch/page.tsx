import React from 'react'
import Image from 'next/image'

// Data
import { works } from '@/app/data/our-works';
import { showIcons } from '@/utils/showIcons';

export default function SemahMCH() {
  const work = works.find(work => work.id === 2);

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
            <p className='font-light text-gray-500'>System Development, UI/UX Design, Website Development</p>
          </div>

          {/* Client */}
          <div className='w-full flex flex-col gap-1 md:gap-3'>
            <h1 className='text-lg font-bold'>Client</h1>
            <p className='font-light text-gray-500'>{`Semah MCH - Mother Child Hospital`}</p>
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
            <p className='w-full text-gray-500 md:text-lg'>SEMAH MCH Center established thirteen years back in 2010. The center is located in prime
              location in Addis Ababa, near 22 Mazoria which is accessible, spacious and suitable to
              provide MCH services. Currently with its 51 human resource capacity, 32 Specialty center
              professionals and 19 supporting staff (please refer to Annex - I), SEMAH hosts 100-110
              out-patient clients on a daily basis. In addition to the Out-Patient Department, the
              center is equipped with other important departments like the major and minor operation
              theaters, delivery rooms and also emergency and vaccination departments. There are 15
              beds for in-patient and emergency cases.</p>
          </div>

          {/* Features */}
          <div className='w-full flex flex-col gap-4'>
            <h1 className='w-full text-2xl md:text-3xl font-bold'>Features</h1>
            <p className='w-full text-gray-500 md:text-lg '>
              <ul className='list-disc list-inside'>
                <li>Responsive Website</li>
                <li>Online Appointments, Online Schedules</li>
                <li>Blogs</li>
                <li>Admin Dashboard</li>
                <li>Feedback Mechanism</li>
              </ul>
            </p>
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
                  src={"https://i.ibb.co/ScXvzDF/Screenshot-11.png"}
                  alt="Semah MCH Home Page"
                />
              </div>

              {/* About Page */}
              <div className='w-full h-full rounded-xl border-8 border-third overflow-hidden'>
                <Image
                  className='w-full h-full object-cover'
                  width={100}
                  height={100}
                  src={"https://i.ibb.co/TBh8mzh/Screenshot-12.png"}
                  alt="Semah MCH About Page"
                />
              </div>

              {/* Journal Page */}
              <div className='w-full h-full rounded-xl border-8 border-third overflow-hidden'>
                <Image
                  className='w-full h-full object-cover'
                  width={100}
                  height={100}
                  src={"https://i.ibb.co/Wzg3Ypr/Screenshot-14.png"}
                  alt="Semah MCH Journal Page"
                />
              </div>

              {/* Contact Page */}
              <div className='w-full h-full rounded-xl border-8 border-third overflow-hidden'>
                <Image
                  className='w-full h-full object-cover'
                  width={100}
                  height={100}
                  src={"https://i.ibb.co/RDfJLZc/Screenshot-15.png"}
                  alt="Semah MCH Contact Page"
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
                  src={"https://i.ibb.co/rx55J5C/Screenshot-20240409-112407-Chrome.jpg"}
                  alt="Semah MCH Home Page"
                />
              </div>

              {/* Journal page */}
              <div className='w-full h-full rounded-xl border-8 border-thirdborder-8 border-third'>
                <Image
                  className='w-full h-full object-fill'
                  width={100}
                  height={100}
                  src={"https://i.ibb.co/M2Jj8PT/Screenshot-20240409-112535-Chrome.jpg"}
                  alt="Semah MCH Gallery Page"
                />
              </div>

              {/* About page */}
              <div className='w-full h-full rounded-xl border-8 border-thirdborder-8 border-third'>
                <Image
                  className='w-full h-full object-fill'
                  width={100}
                  height={100}
                  src={"https://i.ibb.co/pvnQBc7/Screenshot-20240409-112807-Chrome.jpg"}
                  alt="Semah MCH About Page"
                />
              </div>
            </div>
          </div>


        </div>
      </div>

    </div>
  )
}
