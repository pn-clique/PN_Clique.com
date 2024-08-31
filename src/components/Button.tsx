import React, { ComponentProps, ReactNode } from 'react'

interface ButtonProps extends ComponentProps<'button'> {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  width?: number | string
}

export default function Button({
  children,
  variant = 'primary',
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={`w-[140px] flex-1 h-10 lg:max-w-[160px] sm:h-[50px] sm:w-40 rounded-3xl flex justify-center items-center  text-sm sm:text-base  active:scale-[.98] transition-all font-medium
        ${variant === 'primary' && 'hover:bg-primary hover:text-white bg-white text-primary ease-in'}
        ${variant === 'secondary' && 'hover:bg-slate-200 bg-primary text-white hover:text-primary'}
        `}
    >
      {children}
    </button>
  )
}
