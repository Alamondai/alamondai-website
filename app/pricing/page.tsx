import React from 'react'
import Image from 'next/image';

// Data
import { pricing } from '../data/pricing'

// Components
import PricingCard from './components/PricingCard'

// Images
import background from '../assets/images/pricing/cool-background.png';

export default function Page() {
  return (
    <main className="relative w-full h-full min-h-screen flex flex-col gap-10 py-28">

      {/* Title */}
      <div className='w-full flex flex-col gap-5 items-center '>
        <div className='w-full flex flex-col gap-4 items-center'>
          <h1 className='text-2xl md:text-5xl font-bold text-primary text-center'> Find the Perfect Plan for your business</h1>
          <p className='text-sm md:text-lg text-gray-500 text-center'>Suitable for Small, Medium and Large Sized Companies</p>
        </div>
      </div>

      {/* Price List */}
      <div className='w-full lg:container mx-auto h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5 md:px-10 xl:gap-20 z-20'>
        {
          pricing.map((prices) => (
            <PricingCard
              key={prices.id}
              {...prices}
              features1={[]}
              features2={[]}
            />
          ))
        }
      </div>

      {/* Background */}
      <div className='absolute w-full h-48 bottom-0 left-0 z-0 overflow-hidden'>
        <Image
          className='w-full h-auto object-cover'
          src={background}
          alt='Background'
        // layout='fill'
        />
      </div>
    </main>
  )
}
