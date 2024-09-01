'use client'
import { banner01, coworkingImg01 } from '@/assets/images'
import { StaticImageData } from 'next/dist/shared/lib/get-img-props'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import DotsSlides from './DotsSlides'
import { useContextAside } from '@/contexts/ContextProvider'

export default function CoworkingSlides() {
  const pathname = usePathname()

  const { coworkingTime, setCoworkingTime } = useContextAside()

  const [show, setShow] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  const [coworkingSlides, setCoworkingSlides] =
    useState<StaticImageData>(coworkingImg01)

  useEffect(() => {
    if (pathname.toString().includes('coworking')) {
      setShow(true)
    } else {
      setShow(false)
    }

    if (coworkingTime === 0) {
      setIsVisible(true)
      setTimeout(() => {
        setIsVisible(false)
        setCoworkingTime(1)
        setCoworkingSlides(coworkingImg01)
      }, 6000)
    } else if (coworkingTime === 1) {
      setIsVisible(true)
      setTimeout(() => {
        setIsVisible(false)
        setCoworkingTime(2)
        setCoworkingSlides(banner01)
      }, 6000)
    } else if (coworkingTime === 2) {
      setIsVisible(true)
      setTimeout(() => {
        setIsVisible(false)
        setCoworkingTime(0)
        setCoworkingSlides(coworkingImg01)
      }, 6000)
    }
  }, [pathname, setCoworkingSlides, setCoworkingTime, coworkingTime])
  return (
    <>
      <div
        data-show={show}
        data-isVisible={isVisible}
        className={`absolute top-0 left-0 right-0 h-screen bg-repeat bg-cover bg-blend-saturation data-[show=false]:hidden data-[isVisible=true]:animate-sideways custom-image
          ${coworkingSlides.src.toString().includes('coworking-img-01') && 'coworking-img-01'}
          ${coworkingSlides.src.toString().includes('banner01') && 'tech-image-01'}
          ${coworkingSlides.src.toString().includes('coworking-img-01') && 'coworking-img-01'}
        `}
      />
      <div
        data-show={show}
        className="fixed z-30 bottom-6 left-4 sm:left-16  w-full flex gap-2 lg:gap-3 items-center data-[show=false]:hidden"
      >
        <DotsSlides time={coworkingTime} slide={0} />
        <DotsSlides time={coworkingTime} slide={1} />
        <DotsSlides time={coworkingTime} slide={2} />
      </div>
    </>
  )
}
