"use client";
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLinks({ href, exact, children, ...props }: any) {
  const pathname = usePathname();
  const active = 'active-header font-bold';
  // const active = 'text-black font-bold text-xl link-active';
  const isActive = exact ? pathname == href : pathname.startsWith(href)

  if (isActive) {
    props.className += active
  }
  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  )
}