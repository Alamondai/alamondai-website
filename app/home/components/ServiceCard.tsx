import React from 'react';
import Image, { StaticImageData } from 'next/image';

export default function ServiceCard({
  isActive,
  image,
  name,
  description,
}: {
  isActive: boolean,
  image: StaticImageData,
  name: string,
  description: string
}) {
  return (
    <div
      style={{
        paddingTop: isActive ? '30px' : '0px',
      }}
      className="flex flex-col ml-5 w-[100%] max-md:ml-0 max-md:w-full pb-20">
      <div className="flex flex-col grow justify-center mt-10 max-md:mt-10">
        <div
          style={{
            border: isActive ? '2px solid #33949E' : 'none'
          }}
          className="w-rull flex flex-col px-4 py-10 rounded-lg border-solid shadow-lg bg-neutral-50">
          <div
            style={{
              border: isActive ? '2px solid #33949E' : '1px solid #efefef'
            }}
            className={`w-[60px] rounded-full  flex items-center justify-center p-2`}>
            <Image
              loading="lazy"
              src={image}
              alt='Web Design & Development'
              className="aspect-square w-[58px]"
            />
          </div>
          <div className="mt-4 text-xl font-bold leading-7">
            <p
              className='bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-fourth '>
              {name}</p>
          </div>
          <div className="mt-5 text-sm leading-6 text-slate-600">
            {description}
          </div>
        </div>
      </div>
    </div>
  )
}
