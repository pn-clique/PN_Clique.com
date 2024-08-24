import React, { ReactNode } from 'react'
import { ExternalLink } from 'lucide-react'

import AboutItem from '@/components/About-Item'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Link from 'next/link'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="grid grid-cols-1 gap-20 lg:gap-4 xl:grid-cols-[1fr_40%]">
      <section className="relative flex flex-1 flex-col gap-8 bg-white pt-8 px-8 md:px-20 xl:px-20 h-full ">
        <div className="w-full flex justify-center">
          <Header />
        </div>
        {children}
        <Footer />
      </section>

      <aside className="flex flex-col flex-1 bg-primary px-8 md:px-20 xl:px-20 pt-24 xl:py-24 h-full  xl:min-h-screen">
        <h2 className="text-secondary text-xl mx-auto lg:mx-0 leading-snug tracking-wide font-semibold text-center lg:text-start">
          Conheça a
        </h2>
        <h2 className="text-white text-5xl max-w-[240px] mx-auto lg:mx-0 leading-snug tracking-wide font-semibold text-center lg:text-start">
          PN Clique
        </h2>
        <p className="text-zinc-100 mt-11 xl:max-w-[551px] w-full text-center lg:text-start">
          Somos uma empresa de tecnologia especializada no desenvolvimento de
          soluções móveis e web, que impactam positivamente a vida de centenas
          de pessoas e empresas.
        </p>
        <div className="w-full flex gap-8 justify-center lg:justify-between flex-wrap sm:flex-nowrap my-10">
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

        <div className="hidden lg:flex w-full mt-28 lg:mt-28 h-px bg-zinc-500" />
        <h4 className="font-bold text-xl text-white mt-8 tracking-wide text-center md:text-start">
          Siga-nos nas redes
        </h4>
        <div className="flex flex-col justify-center items-center mt-3 md:items-start w-full">
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
        </div>

        <footer className="mt-10 xl:hidden">
          <div className="w-full h-px bg-zinc-400" />
          <p className="text-center my-5 text-zinc-100">
            Feito com <span className="animate-pulse">❤️</span> por nós
          </p>
        </footer>
      </aside>
    </main>
  )
}
