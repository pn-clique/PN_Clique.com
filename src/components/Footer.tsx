import React from 'react'

export default function Footer() {
  return (
    <footer className="hidden xl:flex flex-col">
      <div className="w-full h-px bg-zinc-400" />
      <p className="text-center  text-zinc-800 my-5 flex gap-1 justify-center items-center">
        Feito com <span className="animate-pulse text-zinc-800">❤️</span> por
        nós
      </p>
    </footer>
  )
}
