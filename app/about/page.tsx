import React from 'react'
import Image from 'next/image';

// Images
import aboutImage from '../assets/images/about/about-image.jpg';


export default function Page() {
  return (
    <main className="w-full h-full min-h-screen flex flex-col gap-10 py-4 md:py-10 md:pt-28">
      {/* Hero Box Top */}
      <div className='w-full h-full grid grid-cols-1 md:grid-cols-2'>

        {/* Description */}
        <div className='w-full h-full flex flex-col items-center justify-start py-5 gap-5 md:gap-10 order-2 md:order-1'>
          {/* Alamondai Name */}
          <div>
            <h1 className='text-2xl md:text-5xl font-bold text-center'>About Us</h1>
          </div>

          {/* Description */}
          <div className='w-full h-full flex flex-col gap-5 px-3 md:px-11'>
            <p
              style={{
                textIndent: '2rem'
              }}
              className='text-base md:ext-lg'>
              {
                `
              Alamondai is a software business headquartered in Addis Abeba, Ethiopia,
              that specializes in developing new technology solutions.
              We are a committed team of professionals dedicated to making your ideas a reality through great website,
              mobile application, and system software development.
              `
              }
            </p>

            <p
              style={{
                textIndent: '2rem'
              }}
              className='text-base md:text-lg'>
              {
                `
              We don't just develop software; we build partnerships.
              By working closely with our clients, we gain a deep understanding
              of their needs and goals. This collaborative approach allows us to deliver
              custom-built software solutions that exceed expectations and propel businesses forward.
              `
              }
            </p>

            <p
              style={{
                textIndent: '2rem'
              }}
              className='text-base md:text-lg'>
              {
                `
              Our expertise extends beyond traditional software development.
              We offer a comprehensive range of technological products and
              services to cater to your specific requirements.
                `
              }
            </p>
          </div>
        </div>

        {/* Image */}
        <div className='w-full h-full flex items-center justify-center order-1 md:order-2'>
          <Image
            loading="lazy"
            src={aboutImage}
            alt='About Us Image'
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </main>
  )
}
