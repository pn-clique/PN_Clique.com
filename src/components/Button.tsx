import React, { ComponentProps, ReactNode } from 'react'

interface ButtonProps extends ComponentProps<'button'> {
  children: ReactNode
  variant?: 'primary' | 'secondary'
}

export default function Button({
  children,
  variant = 'primary',
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={`shadow-shape w-[140px] h-10 sm:h-[50px] sm:w-40 rounded-3xl flex justify-center items-center  text-sm sm:text-base  active:scale-[.98] transition-all font-medium 
        ${variant === 'primary' && 'hover:bg-slate-200 bg-white text-primary'}
        ${variant === 'secondary' && 'hover:bg-slate-200 bg-primary text-white'}
        `}
    >
      {children}
    </button>
  )
}
