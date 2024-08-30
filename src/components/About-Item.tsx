import React from 'react'

interface AboutItemProps {
  title: string
  description: string
}

export default function AboutItem({ title, description }: AboutItemProps) {
  return (
    <div className="w-full max-w-[232px] flex flex-col justify-center lg:items-center gap-1 lg:gap-3">
      <span className="text-2xl lg:text-4xl text-secondary tracking-wide text-center font-extrabold">
        {title}
      </span>
      <p className="text-zinc-100 text-center text-sm lg:text-base">
        {description}
      </p>
    </div>
  )
}
