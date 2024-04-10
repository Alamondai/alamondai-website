"use client"
import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { useForm, SubmitHandler } from "react-hook-form";
import axios from '@/utils/axios';
import { BallTriangle } from 'react-loader-spinner';
import { Bounce, toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

// Types
type Inputs = {
  email: string,
  name: string,
  password: string
}


export default function Signup() {
  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm<Inputs>();
  const [loading, isLoading] = useState(false);
  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = async data => {
    isLoading(true);
    await axios.post('/user-auth/signup', data)
      .then((response) => {
        const status = response.status;
        if (status == 200) {
          isLoading(false);
          toast.success("OTP Code Sent to Email", {
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
          router.push(`/auth/otp?email=${data.email}`,);

        }
      })
      .catch((error: any) => {
        const status = error.response.status;
        isLoading(false);
        if (status == 402) {
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
        } else if (status == 403) {
          toast.error("User Already Exist", {
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
        } else {
          toast.error("Something went wrong", {
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
                {...register("name", { required: true, pattern: /^[a-zA-Z ]+$/i })}
                aria-invalid={errors.name ? "true" : "false"} />
              {errors.name?.type == "required" && <span className='text-red-500 text-sm'>This field is required</span>}
              {errors.name?.type == "pattern" && <span className='text-red-500 text-sm'>Name should Only be Letter</span>}
            </div>

            {/* Email */}
            <div className='w-full flex flex-col gap-2'>
              <label htmlFor="email">Email</label>
              <Input
                type="email"
                placeholder="Email"
                {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                aria-invalid={errors.email ? "true" : "false"} />
              {errors.email?.type == "required" && <span className='text-red-500 text-sm'>This field is required</span>}
              {errors.email?.type == "pattern" && <span className='text-red-500 text-sm'>Invalid Email</span>}
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password">Password</label>
              <Input
                type="password"
                placeholder="Password"
                {...register("password", { required: true })}
                aria-invalid={errors.password ? "true" : "false"} />
              {errors.password?.type == "required" && <span className='text-red-500 text-sm'>This field is required</span>}
            </div>
          </div>

          {/* Login Button */}
          <div className='w-full flex justify-center px-5'>
            <button
              disabled={loading}
              className={`w-full py-2 text-white text-lg rounded-lg text-center flex flex-row items-center justify-center gap-3 ${loading ? "bg-gray-400" : "bg-third hover:bg-primary"}`}>
              {
                loading
                  ? <BallTriangle
                    height={30}
                    width={30}
                    radius={5}
                    color="white"
                    ariaLabel="ball-triangle-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                  /> :
                  <p> Signup</p>
              }
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}
