'use client'
import { Clique, PN } from '@/assets/svgs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header({ showAside }: { showAside: boolean }) {
  const pathname = usePathname()

  return (
    <header
      data-aside={showAside}
      className="relative w-full bg-primary rounded-xl px-4 md:px-8 flex justify-between items-center gap-2 xl:gap-8 h-24"
    >
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
            className={`text-base lg:text-lg active:scale-95 transition-all ${pathname.toString() === '/' ? 'font-bold text-lg lg:text-xl text-secondary scale-105 ease-linear' : 'text-white'}`}
          >
            Tecnologia
          </Link>
          <Link
            href={'coworking'}
            className={`text-base lg:text-lg active:scale-95 transition-transform ${pathname.toString().includes('/coworking') ? 'font-bold text-lg lg:text-xl text-secondary scale-105 ease-linear' : 'text-white'}`}
          >
            Coworking
          </Link>
        </nav>
      </div>
    </header>
  )
}
