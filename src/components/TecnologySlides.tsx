'use client'
import {
  banner01,
  BiskatoBanner,
  CarBanner,
  StreamingBanner,
} from '@/assets/images'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import DotsSlides from './DotsSlides'
import { useContextAside } from '@/contexts/ContextProvider'

export default function TechnologySlides() {
  const pathname = usePathname()
  const { technologyTime, setTechnologyTime } = useContextAside()

  const [show, setShow] = useState(false)
  const [technologySlides, setTechnologySlides] = useState<
    string | StaticImport
  >(banner01)

  useEffect(() => {
    if (pathname.toString() === '/') {
      setShow(true)
    } else {
      setShow(false)
    }

    if (technologyTime === 0) {
      setTimeout(() => {
        setTechnologyTime(1)
        setTechnologySlides(BiskatoBanner)
      }, 3000)
    } else if (technologyTime === 1) {
      setTimeout(() => {
        setTechnologyTime(2)
        setTechnologySlides(StreamingBanner)
      }, 3000)
    } else if (technologyTime === 2) {
      setTimeout(() => {
        setTechnologyTime(3)
        setTechnologySlides(CarBanner)
      }, 3000)
    } else if (technologyTime === 3) {
      setTimeout(() => {
        setTechnologyTime(0)
        setTechnologySlides(banner01)
      }, 3000)
    }
  }, [pathname, setTechnologySlides, setTechnologyTime, technologyTime])
  return (
    <>
      <Image
        src={technologySlides}
        alt="Banner"
        data-show={show}
        width={1000}
        height={1000}
        className="absolute top-0 left-0 right-0 w-full h-screen bg-cover bg-blend-saturation data-[show=false]:hidden"
      />
      <div
        data-show={show}
        className="fixed z-30 bottom-10 left-10 sm:left-16  w-full flex gap-3 items-center data-[show=false]:hidden"
      >
        <DotsSlides time={technologyTime} slide={0} />
        <DotsSlides time={technologyTime} slide={1} />
        <DotsSlides time={technologyTime} slide={2} />
        <DotsSlides time={technologyTime} slide={3} />
      </div>
    </>
  )
}
