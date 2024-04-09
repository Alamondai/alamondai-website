import React from 'react'

// Icons
import { TiTick } from "react-icons/ti";

export default function PricingCard({
  color,
  icon,
  name,
  description,
  price,
  features,
  features1,
  features2
}: {
  color: string,
  icon: any,
  name: string,
  description: string,
  price: string,
  features: any[],
  features1?: any[],
  features2?: any[]
}) {
  return (
    <div className={`bg-white w-full h-full flex flex-col items-start justify-start gap-20 rounded border border-gray-300 overflow-hidden shadow-sm cursor-pointer hover:shadow-2xl shadow-gray-100 `}>
      {/* Top Border Color */}
      <div className={`w-full h-5 ${color}`}>
      </div>

      <div className='w-full h- flex flex-col gap-3 pb-5'>
        {/* Icon */}
        <div className='w-full h- flex items-center justify-center'>
          {icon}
        </div>

        {/* Pricing Name */}
        <div className='w-full h-full flex items-center justify-center'>
          <h1 className='text-2xl font-bold text-gray-700'>{name}</h1>
        </div>

        {/* Descriptoin */}
        <div className='w-full h-full flex items-center justify-center'>
          <h1 className='text-sm font-normal text-gray-500 text-center'>{description}</h1>
        </div>

        {/* Price */}
        <div className='w-full h-full flex items-center justify-center'>
          <h1 className='text-3xl font-bold text-gray-700'>{price}</h1>
        </div>

        {/* Button */}
        <div className='w-full h-full flex items-center justify-center px-20'>
          <button
            className='w-full py-3 bg-primary text-white text-lg rounded'>
            Buy
          </button>
        </div>

        {/* Divider */}
        <div className='w-full h-full px-5 md:px-10 py-3'>
          <hr className='text-gray-800 border-1 border-gray-500' />
        </div>

        {/* Features */}
        <div className='w-full h-full flex flex-col px-5 md:px-10'>
          {
            features.map((feature) => (
              <div key={feature.id} className='w-full h-full flex items-center justify-start gap-3'>
                <span className='text-gray-500'>
                  <TiTick className='w-5 h-auto text-third' />
                </span>
                <h1 className='text-lg font-normal text-black'>{feature.name}</h1>
              </div>
            ))
          }
        </div>

        {
          features1 &&
          <div className='w-full flex flex-col '>
            {/* Divider */}
            < div className='w-full h-full px-5 md:px-10 py-3'>
              <hr className='text-gray-800 border-1 border-gray-500' />
            </div>

            {/* Features */}
            <div className='w-full h-full flex flex-col px-5 md:px-10'>
              {
                features1.map((feature) => (
                  <div key={feature.id} className='w-full h-full flex items-center justify-start gap-3'>
                    <span className='text-gray-500'>
                      <TiTick className='w-5 h-auto text-third' />
                    </span>
                    <h1 className='text-lg font-normal text-black'>{feature.name}</h1>
                  </div>
                ))
              }
            </div>
          </div>
        }

        {
          features2 &&
          <div className='w-full flex flex-col '>
            {/* Divider */}

            < div className='w-full h-full px-5 md:px-10 py-3'>
              <hr className='text-gray-800 border-1 border-gray-500' />
            </div>

            {/* Features */}
            <div className='w-full h-full flex flex-col px-5 md:px-10'>
              {
                features2.map((feature) => (
                  <div key={feature.id} className='w-full h-full flex items-center justify-start gap-3'>
                    <span className='text-gray-500'>
                      <TiTick className='w-5 h-auto text-third' />
                    </span>
                    <h1 className='text-lg font-normal text-black'>{feature.name}</h1>
                  </div>
                ))
              }
            </div>
          </div>
        }
      </div>

    </div >
  )
}

