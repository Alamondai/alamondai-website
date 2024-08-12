"use client"
import React, { useEffect } from 'react';
import NavLinks from './components/NavLinks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

// Images
import logo from '../assets/images/logo/logo.png'
import Image from 'next/image';

// Icons
import { CiMenuFries } from "react-icons/ci";

// Shadcn Menu
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"



export default function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const headerStyle = pathname ===
    "/service" ?
    "bg-transparent" :
    "bg-white shadow-lg";

  const bgStyleServices = pathname ===
    "/service" ?
    "bg-white px-4 py-2 rounded-full" :
    "";

  return (
    <header className={`w-full flex items-center fixed h-20 ${headerStyle} z-40 `}>
      <div
        className={`w-full mx-auto 2xl:container flex flex-row items-center justify-between gap-5 px-5 md:px-20`}>
        {/* Logo */}
        <div className='w-full flex flex-row gap-2'>
          <Link
            href={'/'}
            className={`flex flex-row gap-2 items-end ${bgStyleServices}`}>
            <Image
              className='w-8  h-8'
              // loader={myLoader}
              src={logo}
              alt="Alamondai Logo"
            />
            <p className='text-2xl font-bold'>Alamondai</p>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className={`hidden md:flex w-full flex-row items-center justify-start gap-10 ${bgStyleServices}`}>
          <NavLinks href="/" exact className="">
            Home
          </NavLinks>
          <NavLinks href="/about" exact className="">
            About
          </NavLinks>
          <NavLinks href="/service" exact className="">
            Services
          </NavLinks>
          <NavLinks href="/pricing" exact className="">
            Pricing
          </NavLinks>
          <NavLinks href="/works" exact className="">
            Work
          </NavLinks>
          {/* <NavLinks href="/blog" exact className="">
          Blog
        </NavLinks>
        <NavLinks href="/how-it-work" exact className="">
          How it Works
        </NavLinks> */}
        </div>

        {/* Contact Button */}
        <div className='hidden md:flex w-auto  h-auto  items-center justify-center'>
          <Link
            href={'/contact'}
            className='w-32 text-center py-2 rounded text-white bg-gradient-to-tr from-primary via-secondary to-fourth transition-main'>
            Contact us
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden `}>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <CiMenuFries
                className='w-10 h-auto rounded border border-gray-400 p-1 bg-white'
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel
                onClick={() => router.push('/')}>
                Home
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => router.push('/about')}>
                About
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => router.push('/service')}>
                Services</DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => router.push('/works')}>
                Our Work</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

      </div>
    </header >
  )
}
