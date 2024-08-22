import React from 'react'

interface AboutItemProps {
  title: string
  description: string
}

export default function AboutItem({ title, description }: AboutItemProps) {
  return (
    <div className="w-full flex flex-col justify-center lg:items-center gap-2 max-w-[240px]">
      <span className="text-4xl text-secondary font-semibold tracking-wide">
        {title}
      </span>
      <p className="text-zinc-100 lg:text-center">{description}</p>
    </div>
  )
}
