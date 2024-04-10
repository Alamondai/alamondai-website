"use client"
import { useState } from 'react'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"
import axios from '@/utils/axios';
import { BallTriangle } from 'react-loader-spinner';
import { useSearchParams } from 'next/navigation'
import { toast, Bounce } from 'react-toastify';
import { useRouter } from 'next/navigation';


export default function OTP() {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams()
  const email = searchParams.get('email');

  const Submit = async () => {
    setLoading(true);
    if (value == "") {
      setLoading(false);
      toast.info("Fill out the form", {
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
    await axios.post('/user-auth/otp', {
      email: email,
      otp: value
    })
      .then((response) => {
        const status = response.status;
        if (status == 200) {
          setLoading(false);
          router.push('/auth/login');
          toast.success("OTP Verified", {
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

      })
      .catch((error) => {
        const status = error.response.status;
        setLoading(false);
        if (status == 408) {
          toast.error("Fill out OTP form", {
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
        } else if (403) {
          toast.error("Incorrect OTP", {
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
      })


  }

  return (
    <div className='w-full h-full min-h-screen flex flex-col gap-10 items-center justify-start pt-28 px-5 md:px-0'>

      {/* Box */}
      <div className='w-full md:w-96 h-auto flex flex-col gap-5 items-center justify-start border border-gray-200 rounded-xl shadow-lg shadow-gray-200 bg-white py-5'>
        <div className=''>
          <h1 className='text-lg font-semibold'>OTP</h1>
        </div>

        {/* Form */}
        <div className='w-full h-full flex flex-col gap-10 items-center'>
          <InputOTP
            maxLength={6}
            pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
            value={value}
            onChange={(value) => setValue(value)}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>

          {/* Login Button */}
          <div className='w-full flex justify-center px-5'>
            <button
              onClick={Submit}
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
                  <p> Submit</p>
              }
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
