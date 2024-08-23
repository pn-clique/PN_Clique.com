import React from 'react'

export default function Footer() {
  return (
    <footer className="hidden xl:flex flex-col">
      <div className="w-full h-px bg-zinc-800" />
      <p className="text-center my-5 flex gap-1 justify-center items-center">
        Feito com <span className="animate-pulse">❤️</span> por nós
      </p>
    </footer>
  )
}
