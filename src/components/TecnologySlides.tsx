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
  const [isVisible, setIsVisible] = useState(true)

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
      setIsVisible(true)
      setTimeout(() => {
        setIsVisible(false)
        setTechnologyTime(1)
        setTechnologySlides(BiskatoBanner)
      }, 6000)
    } else if (technologyTime === 1) {
      setIsVisible(true)
      setTimeout(() => {
        setIsVisible(false)
        setTechnologyTime(2)
        setTechnologySlides(StreamingBanner)
      }, 6000)
    } else if (technologyTime === 2) {
      setIsVisible(true)
      setTimeout(() => {
        setIsVisible(false)
        setTechnologyTime(3)
        setTechnologySlides(CarBanner)
      }, 6000)
    } else if (technologyTime === 3) {
      setIsVisible(true)
      setTimeout(() => {
        setIsVisible(false)
        setTechnologyTime(0)
        setTechnologySlides(banner01)
      }, 6000)
    }
  }, [pathname, setTechnologySlides, setTechnologyTime, technologyTime])
  return (
    <>
      <Image
        src={technologySlides}
        alt="Banner"
        data-show={show}
        data-isVisible={isVisible}
        width={1617}
        height={1080}
        className="absolute top-0 left-0 right-0 h-screen bg-repeat bg-cover bg-blend-saturation data-[show=false]:hidden data-[isVisible=true]:animate-sideways"
      />
      <div
        data-show={show}
        className="fixed z-30 bottom-6 left-4 sm:left-16  w-full flex gap-2 lg:gap-3 items-center data-[show=false]:hidden"
      >
        <DotsSlides time={technologyTime} slide={0} />
        <DotsSlides time={technologyTime} slide={1} />
        <DotsSlides time={technologyTime} slide={2} />
        <DotsSlides time={technologyTime} slide={3} />
      </div>
    </>
  )
}
