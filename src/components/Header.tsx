'use client'
import { Clique, PN } from '@/assets/svgs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  return (
    <header className="fixed lg:absolute z-50 w-[84%] bg-primary rounded-xl px-8 flex justify-between items-center gap-2 xl:gap-8 h-24">
      <div className="flex gap-2 items-center">
        <Image
          src={PN}
          alt="PN Clique icon"
          width={80}
          height={80}
          className="max-w-[60px]"
        />
        <Image
          src={Clique}
          alt="PN Clique icon"
          width={110}
          height={80}
          className="max-w-[120px] hidden md:flex"
        />
      </div>
      <div className="flex items-center gap-4">
        {/* <div className="w-px h-6 xl:h-8 bg-zinc-400" /> */}
        <nav className="flex items-center gap-4 xl:gap-6">
          <Link
            href={'/'}
            className={`text-lg text-secondary active:scale-95 transition-all ${pathname === '/' && 'font-bold text-xl text-secondary scale-105 ease-linear'}`}
          >
            Tecnologia
          </Link>
          <Link
            href={'coworking'}
            className={`text-lg text-white active:scale-95 transition-transform ${pathname === '/coworking' && 'font-bold text-xl text-primary scale-105 ease-linear'}`}
          >
            Coworking
          </Link>
        </nav>
      </div>
    </header>
  )
}
