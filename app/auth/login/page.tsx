"use client"
import React from 'react'
import { Input } from "@/components/ui/input"
import Link from 'next/link'
import { useForm, SubmitHandler } from "react-hook-form";
import axios from '@/utils/axios';
import { Bounce, toast } from 'react-toastify';

// Types
type Inputs = {
  email: string,
  password: string
}

export default function Login() {
  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async data => {
    await axios.post('/user-auth/login', data)
      .then((response) => {
        const status = response.status;
        if (status == 200) {

        }
      })
      .catch((error) => {
        const status = error.response.status;
        if (status == 401) {
          toast.error("Fill out the form", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        } else if (status == 402) {
          toast.error("User Doesn't Exist", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        } else if (status == 403) {
          toast.error("Incorrect Password", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        }

      });

  };
  return (
    <div className='w-full h-full min-h-screen flex flex-col gap-10 items-center justify-start pt-28 px-5 md:px-0'>

      {/* Box */}
      <div className='w-full md:w-96 h-auto flex flex-col gap-5 items-center justify-start border border-gray-200 rounded-xl shadow-lg shadow-gray-200 bg-white py-5'>
        <div className=''>
          <h1 className='text-lg font-semibold'>Login to your account</h1>
        </div>

        <form
          className='w-full h-full flex flex-col gap-5'
          onSubmit={handleSubmit(onSubmit)}>
          {/* Email & Password */}
          <div className='w-full flex flex-col gap-5 px-5'>
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

          {/* Forgot Password */}
          <div className='w-full flex justify-end px-5'>
            <Link
              href={`/forgot-password`}
              className='text-third hover:font-semibold'>Forgot Password?
            </Link>
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

        {/* Divider */}
        <div className='w-full h-auto flex flex-row items-center justify-between px-5'>
          <span className="border border-gray-300 w-[45%]"></span>
          <p className='px-2'>or</p>
          <span className="border border-gray-300 w-[45%]"></span>
        </div>

        <div>
          <button
            // onClick={signInwithGoogle}
            className='w-full flex flex-rows items-center justify-center border border-gray-200 rounded-lg px-2 py-3 gap-2 shadow '>
            <img
              className='w-5 h-5'
              src={`https://cdn.iconscout.com/icon/free/png-256/free-google-1772223-1507807.png`}
              alt={`Google Image`} />
            <p className='font-semibold'>{`Sign in with Google`}</p>
          </button>
        </div>

        {/* Don't have an account */}
        <div className='w-full flex flex-row items-center gap-2 justify-center px-5 py-'>
          Don't have an account?
          <Link
            href={`/auth/signup`}
            className='text-third hover:font-semibold'> Signup
          </Link>
        </div>
      </div>
    </div>
  )
}
