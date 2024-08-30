'use client'
import { Clique, PN } from '@/assets/svgs'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Header({ showAside }: { showAside: boolean }) {
  const [customizeLink, setCustomizeLink] = useState<
    'tecnologia' | 'coworking'
  >('tecnologia')

  return (
    <header className="relative w-full bg-primary rounded-xl px-4 md:px-8 flex justify-between items-center gap-2 xl:gap-8 h-24">
      <div className="flex gap-2 items-center">
        <Image
          src={PN}
          alt="PN Clique icon"
          width={80}
          height={80}
          className="max-w-[50px] md:max-w-[60px]"
        />
        <Image
          src={Clique}
          alt="PN Clique icon"
          width={110}
          height={80}
          data-show={showAside}
          className="max-w-[120px] hidden md:flex data-[show=true]:hidden"
        />
      </div>
      <div className="flex items-center gap-4">
        <nav className="flex items-center gap-4 xl:gap-6">
          <Link
            href={'/'}
            onClick={() => setCustomizeLink('tecnologia')}
            className={`text-base lg:text-lg text-secondary active:scale-95 transition-all ${customizeLink === 'tecnologia' && 'font-bold text-lg lg:text-xl text-secondary scale-105 ease-linear'}`}
          >
            Tecnologia
          </Link>
          <Link
            href={'coworking'}
            onClick={() => setCustomizeLink('coworking')}
            className={`text-base lg:text-lg text-white active:scale-95 transition-transform ${customizeLink === 'coworking' && 'font-bold text-lg lg:text-xl text-primary scale-105 ease-linear'}`}
          >
            Coworking
          </Link>
        </nav>
      </div>
    </header>
  )
}
