import { Url } from 'next/dist/shared/lib/router/router'
import Link from 'next/link'
import React, { ComponentProps, ReactNode } from 'react'

interface ButtonProps extends ComponentProps<'a'> {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  width?: number | string
  url: Url
}

export default function Button({
  children,
  variant = 'primary',
  url,
  ...rest
}: ButtonProps) {
  return (
    <Link
      {...rest}
      href={url}
      className={`w-[140px] flex-1 h-10 gap-2 lg:max-w-[160px] sm:h-[50px] sm:w-40 rounded-3xl flex justify-center items-center  text-sm sm:text-base  active:scale-[.98] transition-all font-medium
        ${variant === 'primary' && 'hover:bg-primary hover:text-white bg-white text-primary ease-in'}
        ${variant === 'secondary' && 'hover:bg-slate-200 bg-primary text-white hover:text-primary'}
        `}
    >
      {children}
    </Link>
  )
}
