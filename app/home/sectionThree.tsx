import React from 'react';
import Image from 'next/image';
import { client } from '../data/clients';



export default function SectionThree() {
  return (
    <div className='w-full h-full relative flex flex-col gap-5'>
      <div className='w-full flex flex-col gap-2 items-center'>
        <h1 className="self-center text-4xl font-bold text-gray-900 whitespace-nowrap leading-[54.95px]">
          Our Clients
        </h1>
        <p className='text-gray-500'>
          We have worked with some amazing clients
        </p>
      </div>

      <div className='w-full h-full flex flex-row items-center justify-center gap-36 py-10'>
        {client.map((items) => (
          <div
            className='grayscale hover:grayscale-0 transition-main'
            key={items.id}>
            <Image
              className='w-20'
              src={items.image}
              alt={items.name} />
          </div>
        ))
        }

      </div>
      <div className='w-20 h-20 absolute -top-20 left-[10%] rounded-full z-5 bg-gradient-to-tr from-primary via-secondary to-fourth'>
      </div>
    </div>
  )
}
