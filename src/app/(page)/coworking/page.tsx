'use client'
import { Instagram } from '@/assets/svgs'
import Button from '@/components/Button'
import Social from '@/components/Social'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

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
    <div
      data-show={show}
      className="relative flex flex-col mt-8 lg:mt-[60px] data-[show=true]:hidden data-[show=true]:lg:flex"
    >
      <span className="text-secondary text-sm lg:text-xl mb-0 md:mb-2 tracking-wide font-semibold">
        Coworking
      </span>
      <h1 className="text-primary text-4xl lg:text-5xl tracking-wide font-semibold leading-relaxed max-w-[571px] w-full">
        Bem-vindo ao nosso espaço de coworking
      </h1>
      <p className="max-w-[864px] w-full text-white text-base md:text-xl mt-4 lg:mt-10 pr-4 lg:pr-0">
        Aqui, você encontrará um ambiente profissional e colaborativo, ideal
        para impulsionar sua produtividade e criatividade. Aproveite nossas
        salas modernas e bem equipadas, com total suporte tecnológico, para
        fazer o seu trabalho fluir.
      </p>
      <div
        data-show={show}
        className="hidden lg:flex mt-4 flex-col gap-4 data-[show=true]:hidden"
      >
        <p className="max-w-[864px] w-full text-white text-base md:text-xl pr-4 lg:pr-0">
          Nosso escritório está totalmente equipado para atender às suas
          necessidades, seja para trabalhar remotamente, realizar reuniões de
          negócios, ou ministrar formações e aulas.
        </p>
        <Button>Reservar Agora</Button>
      </div>

      <div className="mt-9 lg:mt-16 flex items-center gap-4">
        <Social url="/" image={Instagram} />
        <Social url="/" image={Instagram} />
      </div>
    </div>
  )
}
