'use client'
import {
  banner01,
  BiskatoBanner,
  CarBanner,
  StreamingBanner,
} from '@/assets/images'
import { StaticImageData } from 'next/dist/shared/lib/get-img-props'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import DotsSlides from './DotsSlides'
import { useContextAside } from '@/contexts/ContextProvider'

export default function TechnologySlides() {
  const pathname = usePathname()
  const { technologyTime, setTechnologyTime } = useContextAside()

  const [show, setShow] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  const [technologySlides, setTechnologySlides] =
    useState<StaticImageData>(banner01)

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
      }, 8000)
    } else if (technologyTime === 1) {
      setIsVisible(true)
      setTimeout(() => {
        setIsVisible(false)
        setTechnologyTime(2)
        setTechnologySlides(StreamingBanner)
      }, 8000)
    } else if (technologyTime === 2) {
      setIsVisible(true)
      setTimeout(() => {
        setIsVisible(false)
        setTechnologyTime(3)
        setTechnologySlides(CarBanner)
      }, 8000)
    } else if (technologyTime === 3) {
      setIsVisible(true)
      setTimeout(() => {
        setIsVisible(false)
        setTechnologyTime(0)
        setTechnologySlides(banner01)
      }, 8000)
    }
  }, [pathname, setTechnologySlides, setTechnologyTime, technologyTime])
  return (
    <>
      <div
        data-show={show}
        data-isVisible={isVisible}
        className={`absolute top-0 left-0 right-0 h-screen bg-repeat bg-cover bg-blend-saturation data-[show=false]:hidden data-[isVisible=true]:animate-sideways custom-image
          ${technologySlides.src.toString().includes('banner01') && 'tech-image-01'}
          ${technologySlides.src.toString().includes('biskato') && 'biskato-img'}
          ${technologySlides.src.toString().includes('streaming') && 'pn-streaming-img'}
          ${technologySlides.src.toString().includes('car') && 'pn-car-img'}
        `}
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
