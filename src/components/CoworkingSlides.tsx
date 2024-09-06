'use client'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function CoworkingSlides() {
  const pathname = usePathname()

  const [show, setShow] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (pathname.toString().includes('coworking')) {
      setShow(true)
      setIsVisible(true)
    } else {
      setIsVisible(false)
      setShow(false)
    }
  }, [pathname])
  return (
    <>
      <div
        data-show={show}
        className={`absolute top-0 left-0 right-0 h-screen bg-repeat bg-cover bg-blend-saturation data-[show=false]:hidden custom-image coworking-img-01 ${isVisible && 'animate-sideways'}`}
      />
    </>
  )
}
