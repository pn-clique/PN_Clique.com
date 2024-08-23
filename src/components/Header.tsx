'use client'
import { Logo } from '@/assets/svgs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  return (
    <header className="flex justify-start items-center gap-2 xl:gap-8 h-24">
      <Image
        src={Logo}
        alt="PN Clique icon"
        width={180}
        height={50}
        className="max-w-[140px] lg:max-w-[230px]"
      />
      <div className="flex items-center gap-4">
        <div className="w-px h-6 xl:h-8 bg-zinc-400" />
        <nav className="flex items-center gap-4 xl:gap-6">
          <Link
            href={'/'}
            className={`text-lg text-secondary active:scale-95 transition-all ${pathname === '/' && 'font-bold text-xl text-secondary -translate-y-1 ease-linear'}`}
          >
            Tecnologia
          </Link>
          <Link
            href={'coworking'}
            className={`text-lg text-primary active:scale-95 transition-transform ${pathname === '/coworking' && 'font-bold text-xl text-primary -translate-y-1 ease-linear'}`}
          >
            Coworking
          </Link>
        </nav>
      </div>
    </header>
  )
}
