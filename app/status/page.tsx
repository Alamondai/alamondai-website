import React from 'react'

export default function Status() {
  return (
    <div className='w-full mx-auto md:container h-full min-h-screen flex flex-col gap-10 items-center py-28'>
      <div className='w-full md:w-2/3 flex flex-col gap-8 px-5 md:px-2 text-gray-600'>

        {/* Title */}
        <div className='flex flex-col gap-5'>
          <h1 className='text-2xl md:text-3xl font-bold '>Website Status</h1>
        </div>

        {/* Primary Text*/}
        <div className='flex flex-col text-base md:text-lg '>
          <p><b>Current Status:</b> <span className='text-green-500 font-bold'>Active</span></p>
        </div>

      </div>
    </div>
  )
}
