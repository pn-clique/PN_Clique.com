import Link from 'next/link'
import React from 'react'

export default function Page() {
  return (
    <div className="flex flex-col space-y-8">
      <h1 className="text-primary text-5xl tracking-wide font-semibold">
        Bem-vindo ao nosso espaço de coworking, onde flexibilidade e inovação se
        encontram.
      </h1>
      <p className="text-zinc-800 pb-[70px]">
        Nosso escritório está totalmente equipado para atender às suas
        necessidades, seja para trabalhar remotamente, realizar reuniões de
        negócios, ou ministrar formações e aulas.
      </p>

      <div className="relative bg-primary/15 rounded-3xl h-[335px] w-full">
        <div className="bg-white border border-secondary shadow-md p-8 rounded-3xl absolute -top-20 max-w-[485px] w-full left-1/2 -translate-x-1/2 gap-4 flex flex-col">
          <h2 className="font-bold text-lg">Sala principal</h2>

          <p className="text-zinc-800 text-sm">
            Aqui, você encontrará um ambiente profissional e colaborativo, ideal
            para impulsionar sua produtividade e criatividade. Aproveite nossas
            salas modernas e bem equipadas, com total suporte tecnológico, para
            fazer o seu trabalho fluir.
          </p>

          <Link
            href={'/'}
            target="_blank"
            className="text-secondary active:scale-95 transition-all"
          >
            Saiba mais
          </Link>
        </div>
      </div>

      <p className="text-zinc-800 text-center">
        Venha nos conhecer e descubra como o nosso espaço pode ser o cenário
        perfeito para suas atividades profissionais e educacionais
      </p>
    </div>
  )
}
