'use client'
import { Instagram, PNCar, PNStreaming } from '@/assets/svgs'
import Button from '@/components/Button'
import Social from '@/components/Social'
import { useContextAside } from '@/contexts/ContextProvider'
import { Apple } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
  const { showAside, technologyTime } = useContextAside()

  return (
    <>
      {technologyTime === 0 && (
        <div
          data-show={showAside}
          className="relative flex flex-col mt-8 lg:mt-[60px] data-[show=true]:hidden data-[show=true]:lg:flex"
        >
          <span className="text-secondary text-sm lg:text-xl mb-0 md:mb-2 tracking-wide font-semibold">
            Tecnologia
          </span>
          <h1 className="text-primary text-4xl lg:text-6xl tracking-wide font-semibold leading-relaxed">
            Seja{' '}
            <br
              data-show={showAside}
              className="hidden data-[show=true]:flex data-[show=true]:mt-4 transition-all duration-300 delay-100 ease-in"
            />{' '}
            bem-vindo
          </h1>
          <p className="max-w-[864px] w-full text-white text-base md:text-xl mt-4 lg:mt-10 pr-4 lg:pr-0">
            Aqui no nosso site, você pode explorar o que já desenvolvemos e
            conhecer mais sobre o nosso trabalho.{' '}
          </p>
          <div
            data-show={showAside}
            className="flex lg:flex mt-4 flex-col gap-4 data-[show=true]:hidden"
          >
            <p className="max-w-[864px] w-full text-white text-base md:text-xl pr-4 lg:pr-0">
              Se tiver uma ideia ou projeto que deseja transformar em realidade,
              ficaremos felizes em colaborar. Basta preencher o formulário
              abaixo para iniciar essa jornada conosco..
            </p>
            <Button>Formulário</Button>
          </div>

          <div className="mt-9 lg:mt-16 flex items-center gap-4">
            <Social url="/" image={Instagram} />
            <Social url="/" image={Instagram} />
            <Social url="/" image={Instagram} />
          </div>
        </div>
      )}

      {technologyTime === 1 && (
        <div
          data-show={showAside}
          className="relative flex flex-col mt-8 lg:mt-[40px] data-[show=true]:hidden data-[show=true]:lg:flex"
        >
          <Image
            src={PNStreaming}
            alt="Biskato Icon"
            width={180}
            height={60}
            className="w-40 lg:h-[60px]"
          />
          <h1 className="text-primary mt-2 text-xl lg:text-4xl tracking-wide font-semibold leading-relaxed">
            Biskato
          </h1>
          <p className="max-w-[864px] w-full text-white text-base md:text-xl mt-4 lg:mt-8 pr-4 lg:pr-0">
            Aqui no nosso site, você pode explorar o que já desenvolvemos e
            conhecer mais sobre o nosso trabalho.{' '}
          </p>
          <Link
            href={'/'}
            target="_blank"
            className="text-sm md:text-xl text-primary mt-3 underline"
          >
            Saiba mais
          </Link>

          <div className="w-full flex flex-col gap-4 mt-8">
            <span className="text-white">Baixe Agora</span>
            <div className="flex gap-4 items-center">
              <Button variant="secondary">
                <Apple className="size-4 mr-1" />
                Apple Store
              </Button>
              <Button>
                <Apple className="size-4 mr-1" />
                Apple Store
              </Button>
            </div>
          </div>
        </div>
      )}

      {technologyTime === 2 && (
        <div
          data-show={showAside}
          className="relative flex flex-col mt-8 lg:mt-[60px] data-[show=true]:hidden data-[show=true]:lg:flex"
        >
          <Image src={PNStreaming} alt="Biskato Icon" />
          <h1 className="text-red-600 mt-2 text-4xl lg:text-6xl tracking-wide font-semibold leading-relaxed">
            PN Clique Streaming
          </h1>
          <p className="max-w-[864px] w-full text-white text-base md:text-xl mt-4 lg:mt-10 pr-4 lg:pr-0">
            Aqui no nosso site, você pode explorar o que já desenvolvemos e
            conhecer mais sobre o nosso trabalho.{' '}
          </p>
          <div
            data-show={showAside}
            className="flex lg:flex mt-4 flex-col gap-4 data-[show=true]:hidden"
          >
            <p className="max-w-[864px] w-full text-white text-base md:text-xl pr-4 lg:pr-0">
              Se tiver uma ideia ou projeto que deseja transformar em realidade,
              ficaremos felizes em colaborar. Basta preencher o formulário
              abaixo para iniciar essa jornada conosco..
            </p>
            <Button>Formulário</Button>
          </div>

          <div className="mt-9 lg:mt-16 flex items-center gap-4">
            <Social url="/" image={Instagram} />
            <Social url="/" image={Instagram} />
            <Social url="/" image={Instagram} />
          </div>
        </div>
      )}

      {technologyTime === 3 && (
        <div
          data-show={showAside}
          className="relative flex flex-col mt-8 lg:mt-[60px] data-[show=true]:hidden data-[show=true]:lg:flex"
        >
          <Image src={PNCar} alt="Biskato Icon" width={161} height={60} />
          <h1 className="text-orange-500 mt-2 lg:mt-6 text-xl lg:text-4xl tracking-wide font-semibold leading-relaxed">
            PN Clique Car
          </h1>
          <p className="max-w-[864px] w-full text-white text-base md:text-xl mt-4 lg:mt-10 pr-4 lg:pr-0">
            Aqui no nosso site, você pode explorar o que já desenvolvemos e
            conhecer mais sobre o nosso trabalho.{' '}
          </p>
          <div
            data-show={showAside}
            className="flex lg:flex mt-4 flex-col gap-4 data-[show=true]:hidden"
          >
            <p className="max-w-[864px] w-full text-white text-base md:text-xl pr-4 lg:pr-0">
              Se tiver uma ideia ou projeto que deseja transformar em realidade,
              ficaremos felizes em colaborar. Basta preencher o formulário
              abaixo para iniciar essa jornada conosco..
            </p>
            <Link
              href={'/'}
              target="_blank"
              className="text-sm md:text-xl text-orange-500 underline"
            >
              Saiba mais
            </Link>
          </div>

          <div className="mt-9 lg:mt-16 flex items-center gap-4">
            <Social url="/" image={Instagram} />
            <Social url="/" image={Instagram} />
            <Social url="/" image={Instagram} />
          </div>
        </div>
      )}
    </>
  )
}
