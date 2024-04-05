import { ArrowRight } from 'lucide-react'
import React from 'react'
import { RiGhost2Fill } from 'react-icons/ri'
import { works } from '../data/our-works'
import WorksCards from './components/WorksCards'

export default function page() {
  return (
    <div className='w-full h-full min-h-screen flex flex-col gap-2 md:gap-10 items-start justify-start pt-28 '>
      {/* Title */}
      <div className='w-full h-full flex flex-col items-center justify-start gap-5'>
        <div className='w-full h-full text-4xl font-semibold text-third '>
          <h1 className='text-center'>Showcases</h1>
        </div>
        <div className='w-full md:w-1/2 h-full text-lg text-gray-500 '>
          <p className='text-center'>Our services include website development, ERP creation and mobile app development, web portal creation.</p>
        </div>
      </div>

      {/* Content */}
      <div className='w-full mx-auto xl:container px-5 md:px-10 xl:px-40 h-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-5 md:gap-10 lg:gap-10 py-20'>
        {
          works.map((work) => (
            <WorksCards
              key={work.id}
              name={work.name}
              description={work.description}
              image={work.image}
              color={work.color}
              link={work.link}
            />
          ))
        }
      </div>
    </div>
  )
}
