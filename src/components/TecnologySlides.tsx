'use client'
import { banner01 } from '@/assets/images'
import { StaticImageData } from 'next/dist/shared/lib/get-img-props'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import DotsSlides from './DotsSlides'
import { useContextAside } from '@/contexts/ContextProvider'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function TechnologySlides() {
  const pathname = usePathname()
  const { technologyTime, setTechnologyTime } = useContextAside()

  const [show, setShow] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  const [technologySlides, setTechnologySlides] =
    useState<StaticImageData>(banner01)

  function next() {
    if (technologyTime > 4) {
      setTechnologyTime(0)
    } else {
      setTechnologyTime(technologyTime + 1)
    }
  }
  function prev() {
    if (technologyTime === 0) {
      setTechnologyTime(5)
    } else {
      setTechnologyTime(technologyTime - 1)
    }
  }

  useEffect(() => {
    if (pathname.toString() === '/') {
      setShow(true)
      setIsVisible(true)
    } else {
      setIsVisible(false)
      setShow(false)
    }
  }, [
    pathname,
    setTechnologySlides,
    setTechnologyTime,
    technologySlides,
    technologyTime,
  ])
  return (
    <>
      <div
        data-show={show}
        data-isVisible={isVisible}
        className={`absolute top-0 left-0 right-0 h-screen bg-repeat bg-cover bg-blend-saturation data-[show=false]:hidden data-[isVisible=true]:animate-sideways custom-image
          ${technologyTime === 0 && 'tech-image-01'}
          ${technologyTime === 1 && 'biskato-img'}
          ${technologyTime === 2 && 'pn-streaming-img'}
          ${technologyTime === 3 && 'pn-car-img'}
          ${technologyTime === 4 && 'sg-banner'}
          ${technologyTime === 5 && 'other-projects'}
        `}
      />
      <div
        data-show={show}
        className="fixed bottom-6 left-4 sm:left-16 z-50 w-full flex gap-10 items-center data-[show=false]:hidden"
      >
        <div className="flex gap-4">
          <button
            onClick={prev}
            className="shadow-shape rounded-full p-1 active:scale-90 transition-all"
          >
            <ChevronLeft color="#FFF" size={32} />
          </button>
          <button
            onClick={next}
            className="shadow-shape rounded-full p-1 active:scale-90 transition-all"
          >
            <ChevronRight color="#FFF" size={32} />
          </button>
        </div>

        <div className="flex gap-2 lg:gap-4">
          <DotsSlides time={technologyTime} slide={0} />
          <DotsSlides time={technologyTime} slide={1} />
          <DotsSlides time={technologyTime} slide={2} />
          <DotsSlides time={technologyTime} slide={3} />
          <DotsSlides time={technologyTime} slide={4} />
          <DotsSlides time={technologyTime} slide={5} />
        </div>
      </div>
    </>
  )
}
