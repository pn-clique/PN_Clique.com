import React from 'react'
import ButtonAside from './ButtonAside'
import AboutItem from './About-Item'
import Button from './Button'
import Social from './Social'
import { Instagram } from '@/assets/svgs'
import { useContextAside } from '@/contexts/ContextProvider'

export default function Aside() {
  const { showAside, handleShowAside } = useContextAside()
  return (
    <aside
      data-aside={showAside}
      className="relative z-40 flex flex-col justify-start items-center bg-primary sm:rounded-l-3xl px-8 sm:px-28 pt-14 sm:pt-24 h-full  sm:min-h-screen data-[aside=false]:px-1 data-[aside=false]:pt-1 transition-all duration-500 delay-0 ease-linear antialiased animate-sideways w-full"
    >
      <div data-aside={showAside} className="data-[aside=false]:hidden lg:flex">
        <ButtonAside onClick={handleShowAside} showAside={showAside} />
      </div>
      <div
        data-aside={showAside}
        className="relative p-4 data-[aside=true]:hidden top-1/2 w-[80px] overflow-hidden flex-1 left-1/2 -translate-y-1/2  -translate-x-1/2 lg:flex justify-center items-center hidden"
      >
        <h3 className="absolute top-1/2 left-1/2 -translate-x-1/2 bg-transparent font-extrabold origin-center rotate-90 text-6xl w-[700px] text-white text-center">
          Conheça a PN Clique
        </h3>
      </div>

      <div
        data-aside={showAside}
        className="max-w-[839px] w-full sm:mx-auto data-[aside=false]:hidden"
      >
        <h2 className="text-white text-2xl sm:text-5xl leading-snug font-semibold">
          Conheça a PN Clique
        </h2>
        <p className="text-zinc-100 mt-3 lg:mt-11 text-sm sm:text-xl">
          Somos uma empresa de tecnologia especializada no desenvolvimento de
          soluções móveis e web, que impactam positivamente a vida de centenas
          de pessoas e empresas.
        </p>
        <div className="w-full flex gap-5 items-center lg:gap-8 justify-center lg:justify-between flex-wrap sm:flex-nowrap mt-6 sm:my-10">
          <AboutItem
            title="+10.000"
            description="Pessoas impactadas direita ou indiretamente"
          />
          <AboutItem
            title="+1.000"
            description="Parceiros em todas as nossas plataformas"
          />
          <AboutItem
            title="+30.000"
            description="Seguidores em todas as nossas redes."
          />
        </div>

        <p className="text-zinc-100 mt-6 sm:mt-4 text-sm sm:text-xl text-start mb-6 sm:mb-6">
          Se tiver uma ideia ou projeto que deseja transformar em realidade,
          ficaremos felizes em colaborar. Basta preencher o formulário abaixo
          para iniciar essa jornada conosco..
        </p>

        <Button>Formulário</Button>

        <h4 className="font-bold text-xl sm:text-2xl text-white mt-10 lg:mt-14">
          Siga-nos nas redes
        </h4>
        <div className="flex justify-start gap-2 lg:gap-5 mt-3 lg:mt-6 items-start w-full">
          <Social url="/" image={Instagram} />
          <Social url="/" image={Instagram} />
          <Social url="/" image={Instagram} />
        </div>

        <footer className="lg:absolute relative bottom-4 w-full max-w-[810px] mt-20 left-1/2 -translate-x-1/2 lg:mt-10">
          <div className="w-full h-px bg-zinc-500" />

          <p className="text-center my-5 text-zinc-100">
            Feito com <span className="animate-pulse">❤️</span> por nós
          </p>
        </footer>
      </div>
    </aside>
  )
}
