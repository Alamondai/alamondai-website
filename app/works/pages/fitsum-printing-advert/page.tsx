import React from 'react'
import { works } from '@/app/data/our-works';
import Image from 'next/image'
import { showIcons } from '@/utils/showIcons';

export default function FitsumPrintingAdvert() {
  const work = works.find(work => work.id === 1);
  return (
    <div className='w-full mx-auto h-full min-h-screen md:container flex flex-col gap-10 py-28 px-20'>

      {/* Title */}
      <div className='w-full py-10'>
        <h1 className='text-5xl text-primary font-bold'>{work!.name}</h1>
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
          <div className='w-full flex flex-col gap-3'>
            <h1 className='text-lg font-bold'>Services</h1>
            <p className='font-light text-gray-500'>System Development, UI/UX Design, Website Development</p>
          </div>

          {/* Client */}
          <div className='w-full flex flex-col gap-3'>
            <h1 className='text-lg font-bold'>Client</h1>
            <p className='font-light text-gray-500'>Fitsum Printing & Advert</p>
          </div>

          {/* Technologies */}
          <div className='w-full flex flex-col gap-3'>
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
        <div className='col-span-4 w-full h-full flex flex-col gap-10 px-5 '>
          {/* Overview */}
          <div className='w-full flex flex-col gap-4'>
            <h1 className='w-full text-3xl font-bold'>Overview</h1>
            <p className='w-full text-gray-500 text-lg '>Fitsum Printing & Advertising P.l.C is a printing & Advertisng company established on 2010 in the heart of Addis Ababa offering the full range of print & Adverting services to a variety of clients operating across many different local & international organizations sectors.
              We are a one-stop shop for all your printing requirements; our custom- ised solutions are tailored specifically to your individual needs,
              ensuring the best results every time throughout the prepress, printing, Fnishing and binding process & Advertisng products.</p>
          </div>

          {/* Features */}
          <div className='w-full flex flex-col gap-4'>
            <h1 className='w-full text-3xl font-bold'>Features</h1>
            <p className='w-full text-gray-500 text-lg '>
              <ul className='list-disc list-inside'>
                <li>Customized Solutions</li>
                <li>Prepress, Printing, Finishing and Binding Process</li>
                <li>Advertising Products</li>
                <li>Online Ordering</li>
                <li>Blog</li>
              </ul>
            </p>
          </div>


          {/* Screenshots */}
          <div className='w-full flex flex-col gap-4'>
            <h1 className='w-full text-3xl font-bold'>Screenshots</h1>

            {/* Desktop Version */}
            <div className='w-full h-full flex flex-col gap-10'>
              {/* Home Page */}
              <div className='w-full h-full rounded-xl border-8 border-third overflow-hidden'>
                <Image
                  className='w-full h-full object-fill '
                  width={100}
                  height={100}
                  src={"https://i.ibb.co/F5hGnPY/image-2023-09-21-14-43-42.png"}
                  alt="Fitsum Printing & Advert Hopme Page"
                />
              </div>

              {/* About Page */}
              <div className='w-full h-full rounded-xl border-8 border-third overflow-hidden'>
                <Image
                  className='w-full h-full object-fill '
                  width={100}
                  height={100}
                  src={"https://i.ibb.co/JRHfYZz/Screenshot-17.png"}
                  alt="Fitsum Printing & Advert Hopme Page"
                />
              </div>

              {/* Gallery Page */}
              <div className='w-full h-full rounded-xl border-8 border-third overflow-hidden'>
                <Image
                  className='w-full h-full object-fill '
                  width={100}
                  height={100}
                  src={"https://i.ibb.co/TrrRnLF/Screenshot-16.png"}
                  alt="Fitsum Printing & Advert Hopme Page"
                />
              </div>

              {/* Contact Page */}
              <div className='w-full h-full rounded-xl border-8 border-third overflow-hidden'>
                <Image
                  className='w-full h-full object-fill '
                  width={100}
                  height={100}
                  src={"https://i.ibb.co/S6TmYzx/Screenshot-18.png"}
                  alt="Fitsum Printing & Advert Home Page"
                />
              </div>
            </div>

            {/* Mobile Version */}
            <div className='w-full h-full grid grid-cols-3 gap-10'>

              {/* Home page */}
              <div className='w-full h-full rounded-xl border-8 border-thirdborder-8 border-third'>
                <Image
                  className='w-full h-full object-fill'
                  width={100}
                  height={100}
                  src={"https://i.ibb.co/Q8bGCfF/Screenshot-20240405-173945-Chrome.jpg"}
                  alt="Fitsum Printing & Advert Home Page"
                />
              </div>

              {/* Gallery page */}
              <div className='w-full h-full rounded-xl border-8 border-thirdborder-8 border-third'>
                <Image
                  className='w-full h-full object-fill'
                  width={100}
                  height={100}
                  src={"https://i.ibb.co/tJfxx5m/Screenshot-20240405-174059-Chrome.jpg"}
                  alt="Fitsum Printing & Advert Gallery Page"
                />
              </div>

              {/* About page */}
              <div className='w-full h-full rounded-xl border-8 border-thirdborder-8 border-third'>
                <Image
                  className='w-full h-full object-fill'
                  width={100}
                  height={100}
                  src={"https://i.ibb.co/SXksLkN/Screenshot-20240405-174046-Chrome.jpg"}
                  alt="Fitsum Printing & Advert About Page"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
