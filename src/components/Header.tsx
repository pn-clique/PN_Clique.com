'use client'
import { Logo } from '@/assets/svgs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  return (
    <header className="flex justify-start items-center gap-8 h-24">
      <Image
        src={Logo}
        alt="PN Clique icon"
        width={180}
        height={50}
        className="max-w-[140px] lg:max-w-[230px]"
      />
      <div className="flex items-center gap-4">
        <div className="w-px h-8 bg-zinc-800" />
        <nav className="flex items-center gap-6">
          <Link
            href={'/'}
            className={`text-lg active:scale-95 transition-all ${pathname === '/' && 'font-bold text-secondary'}`}
          >
            Tecnologia
          </Link>
          <Link
            href={'coworking'}
            className={`text-lg active:scale-95 transition-all ${pathname === '/coworking' && 'font-bold text-primary'}`}
          >
            Coworking
          </Link>
        </nav>
      </div>
    </header>
  )
}
