import { image02 } from '@/assets/images'
import { Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Page() {
  return (
    <div className="flex flex-col space-y-8">
      <h1 className="text-primary text-5xl tracking-wide font-semibold">
        Seja bem-vindo
      </h1>
      <p className="text-zinc-800 pb-[70px]">
        Aqui no nosso site, você pode explorar o que já desenvolvemos e conhecer
        mais sobre o nosso trabalho. Nosso portfólio inclui uma variedade de
        projetos inovadores, criados para atender às necessidades do mercado
        moderno.{' '}
      </p>

      <div className="relative bg-primary/15 rounded-3xl h-[335px] w-full">
        <div className="bg-white border border-secondary shadow-md p-8 rounded-3xl absolute -top-20 max-w-[485px] w-full left-1/2 -translate-x-1/2 gap-4 flex flex-col">
          <h2 className="font-bold text-lg">Biskato</h2>

          <p className="text-zinc-800 text-sm">
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
          src={image02}
          alt="Image 02"
          height={335}
          className="h-[335px] w-full bg-contain bg-center rounded-3xl"
        />
      </div>

      <p className="text-zinc-800 text-center">
        Se tiver uma ideia ou projeto que deseja transformar em realidade,
        ficaremos felizes em colaborar. Basta preencher o formulário abaixo para
        iniciar essa jornada conosco.
      </p>
      <Link
        href={'/'}
        className="text-center text-zinc-100 rounded-full w-full max-w-[200px] mx-auto active:scale-95 transition-all hover:bg-cyan-800 tracking-wide h-[50px] font-bold flex items-center gap-4 justify-center bg-primary"
      >
        <span className="p-2 bg-white rounded-full">
          <Phone className="text-primary size-5" />
        </span>
        Formulário
      </Link>
    </div>
  )
}
