import React from 'react';
import Image from 'next/image'

// Images
import serviceImage from '../assets/images/services/services.jpg';
import { servicesDetails } from '../data/services';

export default function Services() {
  return (
    <div className='w-full h-full min-h-screen flex flex-col gap-10 pb-20'>
      {/* Image */}
      <div className='w-full h-60 md:h-[30rem]'>
        <Image
          className='object-cover w-full h-full'
          src={serviceImage}
          alt='Services' />
      </div>

      {/* Services */}
      <div className='w-full h-full flex flex-col gap-10'>
        {/* Title */}
        <div className='w-full h-full flex flex-row gap-2 items-center justify-center'>
          <h1 className='text-2xl md:text-5xl text-center'>Our</h1>
          <h1 className='text-3xl md:text-5xl font-bold text-center text-third'> Services</h1>
        </div>

        {/* Services */}
        <div className='w-full h-full grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5 md:px-20'>
          {
            servicesDetails.map((services) => (
              <div
                key={services.id}
                className='w-full h-auto flex flex-col items-center gap-3 border border-gray-200 py-5 rounded-xl hover:shadow-xl transition-all'>
                <div >
                  <Image
                    className='object-cover w-20 h-20'
                    src={services.image}
                    alt={services.name} />
                </div>

                <div className='w-full h-full flex flex-col gap-5 px-5'>
                  <h1 className='text-xl font-bold text-center'>{services.name}</h1>
                  <p className='text-sm text-'>{services.description}</p>
                </div>

              </div>
            ))
          }
        </div>

      </div>
    </div>
  )
}
