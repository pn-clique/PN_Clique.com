'use client'
import { BiskatoBanner, image01, image02 } from '@/assets/images'
import { ChevronLeft, ChevronRight, Phone } from 'lucide-react'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function Page() {
  const [slides, setSlides] = useState<string | StaticImport>('')
  const [time, setTime] = useState(0)

  function handleBefore() {
    if (time > 0) {
      setTime(time - 1)
    } else {
      setTime(2)
    }
  }

  function handleNext() {
    if (time < 2) {
      setTime(time + 1)
    } else {
      setTime(0)
    }
  }

  useEffect(() => {
    if (time === 0) {
      setTimeout(() => {
        setTime(1)
        setSlides(image01)
      }, 2000)
    } else if (time === 1) {
      setTimeout(() => {
        setTime(2)
        setSlides(image02)
      }, 2000)
    } else if (time === 2) {
      setTimeout(() => {
        setTime(0)
        setSlides(BiskatoBanner)
      }, 2000)
    }
    // if (time === 0) {
    //   setSlides(image01)
    // } else if (time === 1) {
    //   setSlides(image02)
    // } else {
    //   setSlides(image01)
    // }
  }, [time])

  return (
    <div className="flex flex-col space-y-8">
      <h1 className="text-primary text-3xl lg:text-4xl tracking-wide font-semibold">
        Seja bem-vindo
      </h1>
      <p className="text-zinc-800 pb-[70px]">
        Aqui no nosso site, você pode explorar o que já desenvolvemos e conhecer
        mais sobre o nosso trabalho. Nosso portfólio inclui uma variedade de
        projetos inovadores, criados para atender às necessidades do mercado
        moderno.{' '}
      </p>

      <div className="relative bg-primary/15 rounded-3xl h-[335px] w-full">
        <div className="bg-white border border-secondary shadow-md px-8 py-4 rounded-3xl absolute -top-20 max-w-[80%] w-full left-1/2 -translate-x-1/2 flex flex-col">
          <h2 className="font-bold text-lg mb-1">Biskato</h2>

          <p className="text-zinc-800 text-sm mb-3">
            Transforme seu conhecimento em uma fonte de renda. Nesta inovadora
            plataforma que conecta freelancers e clientes de forma eficiente e
            segura, simplificando a gestão do trabalho autônomo.
          </p>

          <Link
            href={'/'}
            target="_blank"
            className="text-secondary active:scale-95 transition-all"
          >
            Saiba mais
          </Link>
        </div>
        <Image
          src={slides}
          alt="Image 02"
          height={335}
          className="h-[335px] w-full bg-contain bg-center rounded-3xl transition-colors ease-linear"
        />
      </div>

      <div className="w-full flex gap-8 items-center justify-between px-10">
        <div className="items-center gap-4 hidden">
          <button
            onClick={handleBefore}
            className="bg-primary rounded-full w-8 h-8 flex justify-center items-center active:scale-95 transition-all"
          >
            <ChevronLeft className="text-zinc-100 size-6" />
          </button>
          <button
            onClick={handleNext}
            className="bg-primary rounded-full w-8 h-8 flex justify-center items-center active:scale-95 transition-all"
          >
            <ChevronRight className="text-zinc-100 size-6" />
          </button>
        </div>

        <div className="flex items-center gap-2">
          <div
            className={`p-px border-2 border-primary w-4 h-4 rounded-xl ${time === 0 && 'bg-primary w-20 animate-pulse ease-linear transition-colors'}`}
          />
          <div
            className={`p-px border-2 border-primary w-4 h-4 rounded-xl ${time === 1 && 'bg-primary w-20 animate-pulse ease-linear transition-colors'}`}
          />
          <div
            className={`p-px border-2 border-primary w-4 h-4 rounded-xl ${time === 2 && 'bg-primary w-20 animate-pulse ease-linear transition-colors'}`}
          />
        </div>
      </div>

      <p className="text-zinc-800 text-center">
        Se tiver uma ideia ou projeto que deseja transformar em realidade,
        ficaremos felizes em colaborar. Basta preencher o formulário abaixo para
        iniciar essa jornada conosco.
      </p>
      <Link
        href={'/'}
        className="text-center text-zinc-100 rounded-full w-full max-w-[200px] mx-auto active:scale-95 transition-all hover:bg-cyan-800 tracking-wide  h-[48px] font-bold flex items-center gap-4 justify-center bg-primary"
      >
        <span className="p-2 bg-white rounded-full">
          <Phone className="text-primary size-5" />
        </span>
        Formulário
      </Link>
    </div>
  )
}
