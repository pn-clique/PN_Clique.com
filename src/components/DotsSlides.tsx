import React from 'react'

interface DotsSlidesProps {
  time: number
  slide: number
}

export default function DotsSlides({ time, slide }: DotsSlidesProps) {
  return (
    <div
      className={`h-2 lg:h-3 rounded-full border border-primary  ${time === slide ? 'bg-primary w-[20px] sm:w-[30px] animate-pulse ease-linear transition-all' : 'w-2 sm:w-3 bg-white'}`}
    />
  )
}
