import React from 'react'

interface DotsSlidesProps {
  time: number
  slide: number
}

export default function DotsSlides({ time, slide }: DotsSlidesProps) {
  return (
    <div
      className={`h-2 lg:h-3 rounded-full border border-primary  ${time === slide ? 'bg-primary w-[50px] sm:w-[60px] animate-pulse ease-linear transition-all' : 'w-3 sm:w-5 bg-white'}`}
    />
  )
}
