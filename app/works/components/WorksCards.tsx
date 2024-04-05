import { ArrowRight } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'

export default function WorksCards({
  name,
  description,
  image,
  color
}: {
  name: string,
  description: string,
  image: StaticImageData,
  color: string,
}) {
  return (
    <div className='w-full h-full xl:h-96 rounded-xl grid grid-cols-1 xl:grid-cols-5 border cursor-pointer border-gray-300 hover:shadow-xl hover:shadow-gray-300 transition' >

      {/* Images */}
      < div className='flex items-center justify-center col-span-3 p-3 md:p-8' >
        <Image
          className='w-full h-full object-fill rounded-xl border border-gray-200'
          src={image}
          alt="Test Image" />
      </div >
      {/* Content */}
      <div className='col-span-2 w-full flex flex-col justify-start items-start px-5 py-4 md:py-10 gap-2 md:gap-5' >
        {/* Title */}
        < div >
          <h1
            style={{
              color: color
            }}
            className={`text-xl md:text-3xl font-semibold`}>{name}</h1>
        </div >
        {/* Description */}
        < div >
          <h1 className='text-sm md:text-lg text-gray-500'>{description}</h1>
        </div >

        {/* Read More */}
        <div
          style={{
            color: color
          }}
          className='text-sm md:text-lg font-semibold flex flex-row items-center gap-2' >
          <p>Read More</p>
          <ArrowRight />
        </div >
      </div >
    </div >
  )
}
