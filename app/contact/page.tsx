import React from 'react'

import { FaPhoneVolume, FaLocationDot, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Page() {
  return (
    <main className="w-full h-full min-h-screen flex flex-col items-center gap-10 py-28 font-Roboto">
      {/* Contact Us Title */}
      <div className='w-full h-auto flex flex-col gap-4 items-center'>
        <h1 className='text-2xl md:text-5xl font-bold text-center'>Contact Us</h1>
        <p className='text-lg text-center text-gray-500'>Any Question or Requests? Just write us a message!</p>
      </div>

      {/* Contact Form */}
      <div className='w-full lg:w-2/3 h-full flex flex-col md:flex-row items-start justify-start rounded-xl border border-gray-300 overflow-hidden shadow-xl shadow-gray-200 md:shadow-2xl md:shadow-gray-400 px-2 py-2'>

        {/* Left Side */}
        <div className='w-full md:w-2/3 h-full md:h-[85vh] flex flex-col items-center md:items-start justify-between gap-10 md:gap-20 rounded-xl overflow-hidden bg-gradient-to-tr from-gray-800  via-gray-700 to-fourth px-10 py-10'>

          {/* Contact Us Note */}
          <div className='w-full h-full flex flex-col items-center md:items-start text-white gap-2'>
            <h1 className='text-3xl'>Contact Information</h1>
            <p className='text-gray-400'>Say something or Call us to discuss</p>
          </div>

          {/* Conact Information */}
          <div className='w-full h-full flex flex-col gap-5 md:gap-10'>

            {/* Phone Number */}
            <div className='flex flex-col md:flex-row gap-2 md:gap-5 items-center text-white'>
              <FaPhoneVolume className='text-lg ' />
              <div className='flex flex-col gap-2'>
                <a
                  href='tel:+251936657001'
                  className='text-sm'>+251 93 665 7001</a>
              </div>
            </div>

            {/* Email */}
            <div className='flex flex-col md:flex-row gap-2 md:gap-5 items-center text-white'>
              <MdEmail className='text-lg ' />
              <div className='flex flex-col gap-2'>
                <a
                  target='_blank'
                  href='mailto:info@alamondai.com'
                  className='text-sm'>info@alamondai.com</a>
              </div>
            </div>

            {/* Location */}
            <div className='flex flex-col md:flex-row gap-2 md:gap-5 items-center md:items-start text-white'>
              <FaLocationDot className='text-lg ' />
              <div className='flex flex-col items-center gap-2'>
                <a
                  target='_blank'
                  href='https://maps.app.goo.gl/wTKu3chPCJMEeuQi7'
                  className='text-sm flex flex-col gap-2'>
                  <p>1000 Kenenisa Ave</p>
                  <p>Addis Ababa, Ethiopia</p>
                </a>
              </div>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex flex-row items-center gap-5 pr-20 mt-10 max-md:pr-5">
            <a
              target='_blank'
              href="https://www.instagram.com/alamondai/">
              <FaInstagram
                className="text-2xl text-white" />
            </a>
            <a
              target='_blank'
              href="https://www.linkedin.com/company/alamondai/">
              <FaLinkedin
                className="text-2xl text-white" />
            </a>
            <a
              target='_blank'
              href="https://twitter.com/alamondai/">
              <FaTwitter
                className="text-2xl text-white" />
            </a>
            <a
              target='_blank'
              href="https://www.youtube.com/@alamondai/">
              <FaYoutube
                className="text-2xl text-white" />
            </a>
          </div>

        </div>
        {/* Right Side */}
        <div className='w-full h-full flex flex-col items-center px-4 md:px-10 py-10 gap-10'>

          {/* First Name & Last Name */}
          <div className='w-full h-full flex flex-col md:flex-row gap-10'>
            {/* First name */}
            <div className='w-full h-full flex flex-col'>
              <label
                htmlFor='first-name'
                className='text-gray-500 font-light text-sm'>First Name</label>
              <input
                type='text'
                id='first-name'
                className='w-full h-10 px-2 border-b border-gray-900 focus:outline-none focus:ring-gray-500 '
              />
            </div>

            {/* Last name */}
            <div className='w-full h-full flex flex-col'>
              <label
                htmlFor='last-name'
                className='text-gray-500 font-light text-sm'>Last Name</label>
              <input
                type='text'
                id='last-name'
                className='w-full h-10 px-2 border-b border-gray-900 focus:outline-none focus:ring-gray-500 '
              />
            </div>
          </div>

          {/* Email & Phone Number */}
          <div className='w-full h-full flex flex-col md:flex-row gap-10'>
            {/* Email */}
            <div className='w-full h-full flex flex-col'>
              <label
                htmlFor='Email'
                className='text-gray-500 font-light text-sm'>Email</label>
              <input
                type='text'
                id='email'
                className='w-full h-10 px-2 border-b border-gray-900 focus:outline-none focus:ring-gray-500 '
              />
            </div>

            {/* Phone Number */}
            <div className='w-full h-full flex flex-col'>
              <label
                htmlFor='phone-number'
                className='text-gray-500 font-light text-sm'>Phone Number</label>
              <input
                type='text'
                id='phone-number'
                className='w-full h-10 px-2 border-b border-gray-900 focus:outline-none focus:ring-gray-500 '
              />
            </div>
          </div>

          {/* Select Subject */}
          <div className='w-full h-full flex flex-col gap-4'>
            {/* Write a Radio Input type with Four Random options */}
            <label
              htmlFor='subject'
              className='text-black font-bold text-sm'>Select Subject?</label>

            <div className='w-full grid grid-cols-2 md:flex flex-row gap-3'>

              {/* General */}
              <div className='flex flex-row gap-1 items-center'>
                <input
                  type='radio'
                  id='subject'
                  name='subject'
                  value={'General'}
                  className='w-4 h-4'
                />
                <label
                  htmlFor='subject'
                  className='text-gray-500 font-light text-sm'>General</label>
              </div>

              {/* Development Request */}
              <div className='flex flex-row gap-1 items-center'>
                <input
                  type='radio'
                  id='subject'
                  name='subject'
                  value={'development-request'}
                  className='w-4 h-4'
                />
                <label
                  htmlFor='subject'
                  className='text-gray-500 font-light text-sm'>Software Development</label>
              </div>

              {/* Software Testing */}
              <div className='flex flex-row gap-1 items-center'>
                <input
                  type='radio'
                  id='subject'
                  name='subject'
                  value={'software-testing'}
                  className='w-4 h-4'
                />
                <label
                  htmlFor='subject'
                  className='text-gray-500 font-light text-sm'>Software Testing</label>
              </div>


              {/* Software Testing */}
              <div className='flex flex-row gap-1 items-center'>
                <input
                  type='radio'
                  id='subject'
                  name='subject'
                  value={'other'}
                  className='w-4 h-4'
                />
                <label
                  htmlFor='subject'
                  className='text-gray-500 font-light text-sm'>Other</label>
              </div>

            </div>


          </div>

          {/* Message */}
          <div className='w-full h-full flex flex-col gap-3'>
            <label
              htmlFor='message'
              className='text-gray-500 font-light text-sm'>Message</label>
            <textarea
              id='message'
              className='w-full h-32 px-2 border-b border-gray-900 focus:outline-none focus:ring-gray-500'
            />
          </div>

          {/* Send Button */}
          <div className='w-full h-full flex flex-row items-center justify-end'>
            <button
              className='w-32 h-10 rounded text-white bg-gradient-to-tr from-gray-800  to-primary'>
              Send
            </button>
          </div>


        </div>

      </div>
    </main>
  )
}
