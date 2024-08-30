import { ChevronLeft, ChevronRight } from 'lucide-react'
import React, { ComponentProps } from 'react'

interface ButtonProps extends ComponentProps<'button'> {
  showAside: boolean
}

export default function ButtonAside({ showAside, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={`group p-0 fixed md:absolute flex justify-center items-center shadow-shape ${showAside ? 'left-3' : 'right-3'} top-1/2 z-50 -translate-y-0 active:scale-50 transition-all rounded-full h-11 w-11`}
    >
      {showAside ? (
        <ChevronRight className="size-10 text-white  font-bold" />
      ) : (
        <ChevronLeft className="size-7 lg:size-10 text-primary font-bold" />
      )}
    </button>
  )
}
