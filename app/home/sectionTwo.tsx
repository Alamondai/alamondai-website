"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Images
import { services } from '../data/services';

export default function SectionTwo() {
  return (
    <div className="flex flex-col md:gap-10 pt-14 bg-[#F9F9FF] px-4 md:px-0">
      {/* Title */}
      <div className="self-center text-4xl font-bold text-gray-900 whitespace-nowrap leading-[54.95px]">
        Services we offer
      </div>
      {/* Content */}
      <div className='w-full h-full'>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          pagination={{
            dynamicBullets: true,
          }}
          spaceBetween={50}
          slidesPerView={4}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            '@0.00': {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            '@0.75': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '@1.00': {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            '@1.50': {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          className="mySwiper">
          {services.map((items) => (
            <SwiperSlide
              key={items.id}>
              {({ isActive }) => (
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
                          src={items.image}
                          alt='Web Design & Development'
                          className="aspect-square w-[58px]"
                        />
                      </div>
                      <div className="mt-4 text-xl font-bold leading-7">
                        <p
                          className='bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-fourth '>
                          {items.name}</p>
                      </div>
                      <div className="mt-5 text-sm leading-6 text-slate-600">
                        {items.description}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
