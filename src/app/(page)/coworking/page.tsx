import { image01 } from '@/assets/images'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Page() {
  return (
    <div className="flex flex-col space-y-8 mt-[120px]">
      <h1 className="text-primary text-4xl tracking-wide font-semibold leading-tight text-center lg:text-start">
        Bem-vindo ao nosso espaço de coworking, onde flexibilidade e inovação se
        encontram.
      </h1>
      <p className="text-zinc-800 pb-[70px] text-center lg:text-start">
        Nosso escritório está totalmente equipado para atender às suas
        necessidades, seja para trabalhar remotamente, realizar reuniões de
        negócios, ou ministrar formações e aulas.
      </p>

      <div className="relative bg-primary/15 rounded-3xl h-[335px] w-full">
        <div className="bg-white/90 border border-primary shadow-md px-8 py-4 rounded-3xl absolute -top-20 max-w-[80%] lg:max-w-[50%] w-full left-1/2 -translate-x-1/2 flex flex-col">
          <h2 className="font-bold text-lg mb-2 text-center lg:text-start">
            Sala principal
          </h2>

          <p className="text-zinc-800 text-sm text-center lg:text-start mb-4">
            Aproveite nossas salas modernas e bem equipadas, com total suporte
            tecnológico, para fazer o seu trabalho fluir.
          </p>

          <Link
            href={'/'}
            target="_blank"
            className="text-white bg-primary p-2 rounded-xl max-w-[180px] hover:bg-cyan-900 w-full flex justify-center items-center mx-auto active:scale-95 transition-all"
          >
            RESERVAR AGORA
          </Link>
        </div>
        <Image
          src={image01}
          alt="Image 01"
          height={335}
          className="h-[335px] w-full bg-contain bg-center rounded-3xl aspect-video object-cover"
        />
      </div>

      <p className="text-zinc-800 text-center lg:text-center mx-auto max-w-[600px] ">
        Venha nos conhecer e descubra como o nosso espaço pode ser o cenário
        perfeito para suas atividades profissionais e educacionais
      </p>
    </div>
  )
}
