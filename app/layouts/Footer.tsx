import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Images
import logo from '../assets/images/logo/logo.png';

export default function Footer() {

  function getCurrentYear() {
    const date = new Date();
    return date.getFullYear();
  }

  return (
    <footer className="flex justify-center items-center px-16 py-16 bg-gray-800 max-md:px-5">
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
              <div className="flex gap-4 pr-20 mt-10 max-md:pr-5">
                {/* <Image
                  alt='Facebook'
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/98011fa7b6954b38308ac43b77bed6671caff34918de459957ce80f3efc56180?"
                  className="shrink-0 w-8 aspect-square"
                /> */}
                {/* <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/37c6c258905673ae11392618a6790b21163a2915c34073a534cb62ad5074a0c5?"
                  className="shrink-0 w-8 aspect-square"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/918f0713b545abd86ca478c16ba5246d9f6d11b1c6a754deab189831102a7a6e?"
                  className="shrink-0 w-8 aspect-square"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b7b22d30d1243051bb008c93f600436e6fa895ad14f6cd9d77c46259d2d84d3a?"
                  className="shrink-0 w-8 aspect-square"
                /> */}
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
                    <Link
                      href={'/about'}
                      className="mt-6">About us</Link>
                    <div className="mt-3">Blog</div>
                    <Link
                      href={'/contact'}
                      className="mt-3">Contact us</Link>
                    <div className="mt-3">Pricing</div>
                    <div className="mt-3">Testimonials</div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[28%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-sm leading-5 whitespace-nowrap text-slate-100 max-md:mt-8">
                    <div className="text-xl font-semibold leading-7 text-white">
                      Support
                    </div>
                    <div className="mt-6">Help center</div>
                    <div className="mt-3">Terms of service</div>
                    <div className="mt-3">Legal</div>
                    <div className="mt-3">Privacy policy</div>
                    <div className="mt-3">Status</div>
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
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b37f21175b4de389e1b843cbda95f93da233edd19c62fa9d4ac9a37b8de1700?"
                        className="shrink-0 aspect-square w-[18px]"
                      />
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
