import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Images
import logo from '../assets/images/logo/logo.png';

// Icons
import {
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube
} from "react-icons/fa";

export default function Footer() {

  function getCurrentYear() {
    const date = new Date();
    return date.getFullYear();
  }

  return (
    <footer className="w-full h-full z-50 flex justify-center items-center px-16 py-16 bg-gray-800 max-md:px-5">
      <div className="w-full max-w-[1110px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[37%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col max-md:mt-10">
              <div className="flex items-end justify-start gap-2.5 pr-20 max-md:pr-5">
                <Image
                  loading="lazy"
                  src={logo}
                  alt="Alamondai"
                  className="shrink-0 w-[43px] h-auto"
                />
                <h1>
                  <span className="text-3xl font-semibold leading-7 text-white">
                    Alamondai
                  </span>
                </h1>
              </div>
              <div className="mt-10 text-sm leading-5 whitespace-nowrap text-slate-100">
                Copyright © 2024 Alamondai plc.
              </div>
              <div className="mt-2 text-sm leading-5 whitespace-nowrap text-slate-100">
                All rights reserved
              </div>
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
          </div>
          <div className="flex flex-col ml-5 w-[63%] max-md:ml-0 max-md:w-full">
            <div className="grow max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[28%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-sm leading-5 whitespace-nowrap text-slate-100 max-md:mt-8">
                    <div className="text-xl font-semibold leading-7 text-white">
                      Company
                    </div>
                    <Link href={'/about'} className="mt-6">About us</Link>
                    <Link href={'/service'} className="mt-3">Services</Link>
                    <Link href={'/contact'} className="mt-3">Contact us</Link>
                    <Link href={'/pricing'} className="mt-3">Pricing</Link>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[28%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-sm leading-5 whitespace-nowrap text-slate-100 max-md:mt-8">
                    <div className="text-xl font-semibold leading-7 text-white">
                      Support
                    </div>
                    <Link href={`/help-center`} className="mt-6">Help center</Link>
                    <Link href={`/terms-of-services`} className="mt-3"> Terms of service</Link>
                    {/* <Link href={`/legal`} className="mt-3"> Legal</Link> */}
                    <Link href={`/privacy-policy`} className="mt-3">Privacy policy</Link>
                    <Link href={`/status`} className="mt-3">Status</Link>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col max-md:mt-8">
                    <div className="text-xl font-semibold leading-7 text-white">
                      Stay up to date
                    </div>
                    <div className="flex gap-5 justify-between px-3 py-3 mt-6 text-sm leading-5 text-gray-300 bg-white rounded-lg">
                      <div className="flex-auto my-auto">
                        Your email address
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
