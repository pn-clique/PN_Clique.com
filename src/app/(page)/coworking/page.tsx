'use client'
import { PN } from '@/assets/svgs'
import Button from '@/components/Button'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { Suspense, useEffect, useState } from 'react'

export default function Page() {
  const searchParams = useSearchParams()
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (searchParams.toString().includes('true')) {
      setShow(true)
    } else {
      setShow(false)
    }
  }, [searchParams])

  return (
    <Suspense
      fallback={
        <div className="w-full h-screen flex justify-center items-center">
          <Image src={PN} alt="PN Logo" width={200} height={200} />
        </div>
      }
    >
      <div
        data-show={show}
        className={`relative flex flex-col mt-8 lg:mt-[60px] data-[show=true]:hidden data-[show=true]:lg:flex ${show && 'animate-sideways'}`}
      >
        <span className="text-secondary text-sm lg:text-xl mb-0 md:mb-2 tracking-wide font-semibold">
          Coworking
        </span>
        <h1 className="text-primary text-3xl lg:text-5xl tracking-wide font-semibold leading-snug max-w-[571px] w-full">
          Bem-vindo ao nosso espaço de coworking
        </h1>
        <p className="hidden md:flex max-w-[864px] w-full text-white text-base tracking-wide mt-4 lg:mt-10 pr-4 lg:pr-0 leading-relaxed">
          Aqui, você encontrará um ambiente profissional e colaborativo, ideal
          para impulsionar sua produtividade e criatividade. Aproveite nossas
          salas modernas e bem equipadas, com total suporte tecnológico, para
          fazer o seu trabalho fluir.
        </p>
        <p className="md:hidden max-w-[864px] w-full text-white text-base leading-relaxed mt-4 lg:mt-10 pr-4 lg:pr-0">
          Aqui, você encontrará um ambiente profissional e colaborativo, ideal
          para impulsionar sua produtividade e criatividade.
        </p>
        <p className="hidden md:flex max-w-[864px] w-full text-white text-base pr-4 lg:pr-0 mt-4 tracking-wide leading-relaxed">
          Nosso escritório está totalmente equipado para atender às suas
          necessidades, seja para trabalhar remotamente, realizar reuniões de
          negócios, ou ministrar formações e aulas.
        </p>
        <div className="w-full lg:max-w-[160px] mt-8">
          <Button>Reservar Agora</Button>
        </div>
      </div>
    </Suspense>
  )
}
