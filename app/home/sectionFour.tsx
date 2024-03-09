import Image from 'next/image';
import React from 'react'
import { developmentApproach } from '../data/developmentApproach'

export default function SectionFour() {
  return (
    <div className='w-full h-full flex flex-col gap-5 bg-[#F7F7FA] py-10'>
      {/* Title */}
      <div className='w-full flex flex-col gap-8 items-center'>
        <hr className='text-third w-28 border rounded-full h-2 border-third bg-third' />
        <div className='w-full flex flex-col items-center'>
          <p className='text-3xl font-light '>
            Our design and
          </p>
          <h1 className="self-center text-4xl font-bold text-gray-800 whitespace-nowrap leading-[54.95px]">
            development approach
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className='w-full mx-auto lg:container grid grid-cols-1 items-center justify-center md:grid-cols-2 gap-10 md:gap-20 py-5 md:py-20 px-5 xl:px-20'>
        {
          developmentApproach.map((items) => (
            <div className="flex flex-col justify-center max-w-[604px]">
              <div className="flex flex-col justify-center px-9 py-12 w-full border border-solid bg-neutral-50 border-zinc-200 max-md:px-5 max-md:max-w-full">
                <div className="flex gap-5 justify-between max-md:flex-wrap">
                  <div>
                    <Image
                      loading="lazy"
                      src={items.image}
                      alt={items.title + `image`}
                      className={`shrink-0 self-start aspect-[1.05] w-[59px] rounded-lg p-2 ${items.color}`}
                    />
                  </div>
                  <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
                    <div className="text-xl font-semibold leading-7 text-gray-900 max-md:max-w-full">
                      {items.title}
                    </div>
                    <div className="mt-2.5 text-sm leading-6 bg-clip-text bg-[linear-gradient(225deg,#29272E_0%,#27272E_100%)] text-slate-600 max-md:max-w-full">
                      {items.description}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
