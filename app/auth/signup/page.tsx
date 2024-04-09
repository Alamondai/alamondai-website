"use client"
import React from 'react'
import { Input } from "@/components/ui/input"

import { useForm, SubmitHandler } from "react-hook-form";
import axios from '@/utils/axios';

import { Bounce, toast } from 'react-toastify';

// Types
type Inputs = {
  email: string,
  name: string,
  password: string
}


export default function Signup() {
  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async data => {

  }

  return (
    <div className='w-full h-full min-h-screen flex flex-col gap-10 items-center justify-start pt-28 px-5 md:px-0'>
      {/* Box */}
      <div className='w-full md:w-96 h-auto flex flex-col gap-5 items-center justify-start border border-gray-200 rounded-xl shadow-lg shadow-gray-200 bg-white py-5'>
        <div className=''>
          <h1 className='text-lg font-semibold'>Signup a new account</h1>
        </div>

        <form
          className='w-full h-full flex flex-col gap-5'
          onSubmit={handleSubmit(onSubmit)}>
          {/* Email & Password */}
          <div className='w-full flex flex-col gap-5 px-5'>

            {/* Name */}
            <div className='w-full flex flex-col gap-2'>
              <label htmlFor="name">Name</label>
              <Input
                type="text"
                placeholder="Name"
                {...register("name", { required: true, pattern: /^[a-zA-Z]+$/i })}
              />
            </div>

            {/* Email */}
            <div className='w-full flex flex-col gap-2'>
              <label htmlFor="email">Email</label>
              <Input
                type="email"
                placeholder="Email"
                {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
              />
            </div>



            {/* Password */}
            <div>
              <label htmlFor="password">Password</label>
              <Input
                type="password"
                placeholder="Password"
                {...register("password", { required: true })}
              />
            </div>
          </div>


          {/* Login Button */}
          <div className='w-full flex justify-center px-5'>
            <button
              // href={`/dashboard`}
              className='w-full py-2 bg-third hover:bg-primary text-white text-lg rounded-lg text-center'>
              Login
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}
