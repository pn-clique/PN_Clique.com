'use client'
import { ReactNode } from 'react'

import Header from '@/components/Header'
import Aside from '@/components/Aside'
import ButtonAside from '@/components/ButtonAside'
import CoworkingSlides from '@/components/CoworkingSlides'
import TechnologySlides from '@/components/TecnologySlides'
import { useContextAside } from '@/contexts/ContextProvider'

export default function Layout({ children }: { children: ReactNode }) {
  const { showAside, handleShowAside } = useContextAside()

  return (
    <main
      data-aside={showAside}
      className="grid grid-cols-[1fr_4px] lg:grid-cols-[1fr_191px] data-[aside=true]:grid-cols-[0px_1fr] data-[aside=true]:xl:grid-cols-[585px_1fr] overflow-hidden min-h-screen"
    >
      <>
        <div className="absolute top-0 left-0 z-10 bg-black/60 w-full h-screen" />
        <CoworkingSlides />
        <TechnologySlides />
      </>
      {/* MAIN SECTION */}
      <section className="relative z-40 flex flex-1 flex-col gap-8 pt-8 xl:px-20 h-full px-4">
        <div className={`${showAside && 'hidden'}`}>
          <ButtonAside onClick={handleShowAside} showAside={showAside} />
        </div>
        <div className="w-full flex justify-center">
          <Header showAside={showAside} />
        </div>

        {children}
      </section>

      {/* ASIDE SECTION */}
      <Aside />
    </main>
  )
}
