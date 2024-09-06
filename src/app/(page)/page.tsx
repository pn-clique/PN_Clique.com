'use client'
import { Biskato, CliqueSG, PNCar, PNStreaming } from '@/assets/svgs'
import Button from '@/components/Button'
import Social from '@/components/Social'
import { useContextAside } from '@/contexts/ContextProvider'
import {
  FaGooglePlay,
  FaApple,
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
} from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
  const { showAside, technologyTime } = useContextAside()

  return (
    <>
      {technologyTime === 0 && (
        <div
          data-show={showAside}
          className={`relative flex flex-col mt-2 sm:mt-8 lg:mt-[60px] data-[show=true]:hidden data-[show=true]:lg:flex ${technologyTime === 0 && 'animate-sideways'}`}
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
          <p className="max-w-[814px] w-full text-white text-sm md:text-lg mt-4 lg:mt-10 pr-4 lg:pr-0">
            Aqui no nosso site, você pode explorar o que já desenvolvemos e
            conhecer mais sobre o nosso trabalho.{' '}
          </p>
          <div
            data-show={showAside}
            className="flex lg:flex mt-4 lg:mt-6 flex-col gap-4 data-[show=true]:hidden"
          >
            <p className="max-w-[814px] w-full text-white text-sm md:text-sm pr-4 lg:pr-0">
              Se tiver uma ideia ou projeto que deseja transformar em realidade,
              ficaremos felizes em colaborar...
            </p>
            <div className="w-full lg:max-w-[160px]">
              <Button
                url={'https://bojaoluqyj1.typeform.com/to/LyUlUNQP'}
                target="_blank"
              >
                Formulário
              </Button>
            </div>
          </div>

          <div className="mt-6 lg:mt-10 flex items-center gap-4">
            <Social
              url="https://web.facebook.com/pnclique/"
              icon={<FaFacebook size={20} color="#fff" />}
            />
            <Social
              url="https://api.whatsapp.com/send?phone=%2B244934147576"
              icon={<FaWhatsapp size={20} color="#fff" />}
            />
            <Social
              url="https://www.instagram.com/pnclique/"
              icon={<FaInstagram size={20} color="#fff" />}
            />
          </div>
        </div>
      )}

      {technologyTime === 1 && (
        <div
          data-show={showAside}
          className={`relative flex flex-col mt-2 sm:mt-8 lg:mt-[60px] data-[show=true]:hidden data-[show=true]:lg:flex ${technologyTime === 1 && 'animate-sideways'}`}
        >
          <Image
            src={Biskato}
            alt="Biskato Icon"
            width={88}
            height={122}
            className="w-12 lg:w-[88px] lg:h-[122px]"
          />
          <h1 className="text-primary mt-1 lg:mt-3 text-3xl lg:text-6xl tracking-wide font-semibold leading-relaxed">
            Biskato
          </h1>
          <p className="hidden sm:flex max-w-[864px] w-full text-white text-sm md:text-xl mt-2 lg:mt-4 pr-4 lg:pr-0 tracking-wider leading-relaxed">
            Esta é uma inovadora plataforma que conecta freelancers e clientes
            de forma eficiente e segura, simplificando a gestão do trabalho
            autônomo.
          </p>
          <p className="sm:hidden max-w-[864px] w-full text-white text-sm md:text-xl mt-2 lg:mt-4 pr-4 lg:pr-0 tracking-wider leading-relaxed">
            Esta é uma inovadora plataforma que conecta freelancers e clientes
            de forma eficiente e segura.
          </p>
          <Link
            href={'https://biskato.ao/'}
            target="_blank"
            className="text-sm md:text-base text-primary mt-2 lg:mt-6 underline"
          >
            Saiba mais
          </Link>

          <div className="w-full flex flex-col gap-4 mt-3 lg:mt-8">
            <span className="text-white">Baixe Agora</span>
            <div className="flex gap-4 items-center justify-around sm:justify-start">
              <Button url={'/'} variant="secondary">
                <FaGooglePlay size={18} />
                Play Store
              </Button>
              <Button url={'/'}>
                <FaApple size={18} />
                Apple Store
              </Button>
            </div>
          </div>
        </div>
      )}

      {technologyTime === 2 && (
        <div
          data-show={showAside}
          className={`relative flex flex-col mt-2 sm:mt-8 lg:mt-[60px] data-[show=true]:hidden data-[show=true]:lg:flex ${technologyTime === 2 && 'animate-sideways'}`}
        >
          <Image src={PNStreaming} alt="Biskato Icon" width={116} height={87} />
          <h1 className="text-red-600 mt-2 text-[40px] lg:text-6xl tracking-wide font-semibold leading-tight">
            PN Clique Streaming
          </h1>
          <p className="max-w-[600px] w-full text-white text-base lg:text-xl mt-4 lg:mt-10 pr-4 lg:pr-0">
            Plataforma de compras de serviços de streaming, bem como,
            equipamentos.
          </p>
          <Link
            href={'https://streaming.pnclique.com/'}
            target="_blank"
            className="text-sm md:text-base text-red-600 mt-2 lg:mt-6 underline"
          >
            Saiba mais
          </Link>
        </div>
      )}

      {technologyTime === 3 && (
        <div
          data-show={showAside}
          className={`relative flex flex-col mt-2 sm:mt-8 lg:mt-[60px] data-[show=true]:hidden data-[show=true]:lg:flex ${technologyTime === 3 && 'animate-sideways'}`}
        >
          <Image
            src={PNCar}
            alt="Biskato Icon"
            width={161}
            height={60}
            className="max-w-[120px] sm:max-w-[160px]"
          />
          <h1 className="text-orange-500 mt-2 lg:mt-6 text-[40px] lg:text-4xl tracking-wide font-semibold leading-relaxed">
            PN Clique Car
          </h1>
          <p className="max-w-[864px] w-full text-white text-base md:text-xl mt-2 lg:mt-10 pr-4 lg:pr-0">
            O melhor lugar para encontrar o seu carro ideal - seja para ferias
            em família, casamento ou filmagens. Tudo online, sem sair de casa..
          </p>
          <Link
            href={'https://car.pnclique.com/'}
            target="_blank"
            className="text-sm md:text-xl text-orange-500 underline mt-4"
          >
            Saiba mais
          </Link>
        </div>
      )}

      {technologyTime === 4 && (
        <div
          data-show={showAside}
          className={`relative flex flex-col mt-2 sm:mt-8 lg:mt-[60px] data-[show=true]:hidden data-[show=true]:lg:flex ${technologyTime === 4 && 'animate-sideways'}`}
        >
          <Image
            src={CliqueSG}
            alt="Clique SG"
            width={161}
            height={60}
            className="max-w-[120px] sm:max-w-[160px]"
          />
          <h1 className="text-primary mt-2 lg:mt-6 text-[40px] lg:text-4xl tracking-wide font-semibold leading-relaxed">
            Clique SG
          </h1>
          <p className="max-w-[864px] w-full text-white text-base md:text-xl mt-2 lg:mt-10 pr-4 lg:pr-0">
            Responsavel por upgrade aos centros de formação. Um software que
            facilita o controle, gestão e emisão de documentos dos centros de
            formação.
          </p>
          <Link
            href={'/'}
            target="_blank"
            className="text-sm md:text-xl text-primary underline mt-4 hidden"
          >
            Saiba mais
          </Link>
        </div>
      )}

      {technologyTime === 5 && (
        <div
          data-show={showAside}
          className={`relative flex flex-col mt-2 sm:mt-8 lg:mt-[60px] data-[show=true]:hidden data-[show=true]:lg:flex ${technologyTime === 5 && 'animate-sideways'}`}
        >
          <span className="text-white mt-2 lg:mt-6 text-lg tracking-wide font-semibold leading-relaxed">
            Brevemente
          </span>
          <h1 className="text-primary mt-1 text-[32px] lg:text-4xl tracking-wide font-semibold leading-relaxed">
            Mais plataformas
          </h1>
          <p className="max-w-[864px] w-full text-white text-base md:text-xl mt-2 lg:mt-10 pr-4 lg:pr-0">
            Nesse momento, além de continuar a desenvolver atualizações dos
            nossos apps. Estão a construir dois novos, que vão eliminar todas as
            burocracias de sua vida financeira e torna-te um empreendedor
            melhor.
          </p>

          <span className="flex gap-2 items-center mt-6 text-white text-sm">
            <span className="text-orange-500 text-lg">100 filas</span>&
            <span className="text-primary text-lg">SociAi</span>
          </span>

          <Link
            href={'/'}
            target="_blank"
            className="text-sm md:text-xl text-primary underline mt-4 hidden"
          >
            Saiba mais
          </Link>
        </div>
      )}
    </>
  )
}
