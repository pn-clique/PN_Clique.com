import React, { ReactNode } from 'react'
import { ExternalLink } from 'lucide-react'

import AboutItem from '@/components/About-Item'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Link from 'next/link'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr] xl:grid-cols-[1fr_682px]">
      <section className="flex flex-1 flex-col gap-8 bg-white py-8 px-8 lg:px-10 xl:px-20 h-full xl:max-h-screen min-h-screen">
        <Header />
        {children}
        <Footer />
      </section>

      <aside className="flex flex-col flex-1 bg-primary px-8 md:px-16 pt-24 xl:py-24 h-full xl::max-h-screen xl:min-h-screen">
        <h2 className="text-white text-4xl tracking-wide font-semibold">
          Conheça a PN Clique
        </h2>
        <p className="text-zinc-800 mt-11 max-w-[551px] w-full">
          Somos uma empresa de tecnologia especializada no desenvolvimento de
          soluções móveis e web, que impactam positivamente a vida de centenas
          de pessoas e empresas.
        </p>
        <div className="w-full flex gap-8 flex-wrap mt-10">
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

        <div className="hidden xl:flex w-full mt-8 lg:mt-28 h-px bg-zinc-600" />
        <h4 className="font-bold text-xl text-white mt-8 tracking-wide">
          Siga-nos nas redes
        </h4>
        <Link
          href={'/'}
          target="_blank"
          className="text-white text-lg my-4 flex items-center gap-2 max-w-[130px]"
        >
          <ExternalLink className="text-zinc-100 size-5" />
          Facebook
        </Link>
        <Link
          href={'/'}
          target="_blank"
          className="text-white text-lg mb-4 flex items-center gap-2 max-w-[130px]"
        >
          <ExternalLink className="text-zinc-100 size-5" />
          Instagram
        </Link>
        <Link
          href={'/'}
          target="_blank"
          className="text-white text-lg mb-4 flex items-center gap-2 max-w-[130px]"
        >
          <ExternalLink className="text-zinc-100 size-5" />
          YouTube
        </Link>

        <footer className="mt-10 xl:hidden">
          <div className="w-full h-px bg-zinc-800" />
          <p className="text-center my-5">Feito com ❤️ por nós</p>
        </footer>
      </aside>
    </main>
  )
}
