"use client"
import React from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

// Images
import { services } from '../data/services';
import ServiceCard from './components/ServiceCard';
import { limitCharacters } from '../utils/characterLimiter';

export default function SectionTwo() {


  const isActive = true;
  return (
    <div className="flex flex-col md:gap-10 pt-14 bg-[#F9F9FF] px-4 md:px-0 z-10">
      {/* Title */}
      <div className="self-center text-4xl font-bold text-gray-900 whitespace-nowrap leading-[54.95px]">
        Services we offer
      </div>
      {/* Content */}
      <div className='w-full h-full px-'>
        <Carousel
          opts={{
            align: "start",
            // loop: true,
          }}>
          <CarouselContent
          >
            {services.map((items) => (
              <CarouselItem
                className=' md:basis-1/2 xl:basis-1/3'
                key={items.id}>
                <ServiceCard
                  isActive={isActive}
                  image={items.image}
                  name={items.name}
                  description={limitCharacters(items.description, 200)}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  )
}
