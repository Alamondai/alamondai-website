"use client"

import React, { useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import axios from '@/utils/axios';

// Icons
import {
  FaPhoneVolume,
  FaLocationDot,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube
} from "react-icons/fa6";
import {
  MdEmail
} from "react-icons/md";

// Toast
import { Bounce, toast } from 'react-toastify';

// React Loading
import ReactLoading from 'react-loading';

type Inputs = {
  firstName: string,
  lastName: string,
  email: string,
  phoneNumber: string,
  subject: string,
  message: string
}

export default function Page() {

  const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>();
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<any> = async (data) => {
    setLoading(true);
    try {
      await axios.post('/contact', data)
        .then((response) => {
          const status = response.status;
          if (status == 200) {
            setLoading(false);
            toast.success('Message Sent Successfully', {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Bounce,
            });
            reset();
          }
        })
        .catch((error) => {
          setLoading(false);
          const status = error.response.status;
          if (status == 401) {
            toast.error('All Fields are required', {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Bounce,
            });
          }
        });
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main className="w-full h-full min-h-screen flex flex-col items-center gap-10 py-28 font-Roboto">
      {/* Contact Us Title */}
      <div className='w-full h-auto flex flex-col gap-4 items-center'>
        <h1 className='text-2xl md:text-5xl font-bold text-center'>Contact Us</h1>
        <p className='text-lg text-center text-gray-500'>Any Question or Requests? Just write us a message!</p>
      </div>

      {/* Contact Form */}
      <div className='w-full h-auto  mx-auto 2xl:container'>
        <div className='w-full lg:w-full h-[40rem] flex flex-col md:flex-row items-start justify-start rounded-xl border border-gray-300 overflow-hidden shadow-xl shadow-gray-200 md:shadow-2xl md:shadow-gray-400 px-2 py-2'>

          {/* Left Side */}
          <div className='w-full md:w-2/3 h-full flex flex-col items-center md:items-start justify-between gap-10 md:gap-20 rounded-xl overflow-hidden bg-gradient-to-tr from-gray-800  via-gray-700 to-fourth px-10 py-10'>

            {/* Contact Us Note */}
            <div className='w-full  flex flex-col items-center md:items-start text-white gap-2'>
              <h1 className='text-3xl'>Contact Information</h1>
              <p className='text-gray-400'>Say something or Call us to discuss</p>
            </div>

            {/* Conact Information */}
            <div className='w-full h-auto flex flex-col gap-5 md:gap-10'>

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
            <div className="h-auto flex flex-row items-center gap-5 pr-20 mt-10 max-md:pr-5">
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
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='w-full h-full flex flex-col items-center px-4 md:px-10 py-10 gap-10'>

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
                  className='w-full h-10 px-2 border-b border-gray-900 focus:outline-none focus:ring-gray-500'
                  {...register("firstName", { required: true })}
                  aria-invalid={errors.firstName ? "true" : "false"}
                />
                {
                  errors.firstName && <span className='text-red-500 font-light text-sm'>First Name is required</span>
                }
              </div>

              {/* Last name */}
              <div className='w-full h-full flex flex-col'>
                <label
                  htmlFor='last-name'
                  className='text-gray-500 font-light text-sm'>Last Name</label>
                <input
                  type='text'
                  id='last-name'
                  className='w-full h-10 px-2 border-b border-gray-900 focus:outline-none focus:ring-gray-500'
                  {...register("lastName", { required: true })}
                  aria-invalid={errors.lastName ? "true" : "false"}
                />
                {
                  errors.lastName && <span className='text-red-500 font-light text-sm'>Last Name is required</span>
                }
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
                  className='w-full h-10 px-2 border-b border-gray-900 focus:outline-none focus:ring-gray-500'
                  {...register("email", { required: true })}
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {
                  errors.email && <span className='text-red-500 font-light text-sm'>Email is required</span>
                }
              </div>

              {/* Phone Number */}
              <div className='w-full h-full flex flex-col'>
                <label
                  htmlFor='phone-number'
                  className='text-gray-500 font-light text-sm'>Phone Number</label>
                <input
                  type='text'
                  id='phone-number'
                  className='w-full h-10 px-2 border-b border-gray-900 focus:outline-none focus:ring-gray-500'
                  {...register("phoneNumber")}
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
                    defaultChecked
                    type='radio'
                    id='subject'
                    value={'general'}
                    className='w-4 h-4'
                    {...register('subject')}
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
                    value={'development-request'}
                    className='w-4 h-4'
                    {...register('subject')}
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
                    value={'software-testing'}
                    className='w-4 h-4'
                    {...register('subject')}
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
                    value={'other'}
                    className='w-4 h-4'
                    {...register('subject')}
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
                className='text-gray-500 font-light text-sm'>
                Message
              </label>
              <textarea
                id='message'
                className='w-full h-24 px-2 border-b border-gray-900 focus:outline-none focus:ring-gray-500'
                {...register("message", { required: true })}
                aria-invalid={errors.message ? "true" : "false"}
              />
              {
                errors.message &&
                <span
                  className='text-red-500 font-light text-sm'>
                  Message is required
                </span>
              }
            </div>

            {/* Send Button */}
            <div className='w-full h-full flex flex-row items-center justify-end'>
              <button
                disabled={loading}
                className={`px-4 py-2 rounded text-white flex items-center justify-center gap-2 ${loading ? "bg-gray-400" : "bg-gradient-to-tr from-gray-800  to-primary"}`}>
                {
                  loading ?
                    <>
                      <ReactLoading
                        type='spin'
                        color='white'
                        height={20}
                        width={20} />
                      Send
                    </> :
                    "Send"
                }
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}
