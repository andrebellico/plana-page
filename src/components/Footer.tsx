'use client'

import { InstagramLogo, WhatsappLogo } from '@phosphor-icons/react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className="text-neutral-500 bg-neutral-0 lg:px-24 md:px-16 sm:px-6 px-6 w-full text-lg flex flex-col ">
      <div className="min-[1134px]:flex-row  flex-col flex gap-8 w-full mt-20 items-center justify-between">
        <Image src={'/logo.svg'} alt="logo" width={182} height={52} />
        <div className="grid grid-flow-col  max-[568px]:grid-flow-row max-[568px]:gap-3 text-center gap-10 text-sm">
          <a href="#Home">Home</a>
          <a href="#Funcionalidades">Funcionalidades</a>
          <a href="#Info">Info</a>
          <a href="#Tutorial">Tutorial</a>
          <a href="#FAQs">FAQs</a>
          <a href="#Sobre">Sobre</a>
        </div>
        <div className="flex-col flex gap-4 min-[1134px]:flex-row text-neutral-700 justify-center items-center">
          <div className="text-center text-sm flex justify-center">
            <Link
              target="_blank"
              rel="noreferrer"
              href="mailto:alessandra@planaadhoc.com.br"
            >
              alessandra@planaadhoc.com.br
            </Link>
          </div>
          <div className="flex gap-4">
            <div className="bg-neutral-100 p-2 rounded-lg">
              <Link
                href={`https://wa.me/553584074351`}
                target="_blank"
                rel="noreferrer"
              >
                <WhatsappLogo size={18} />
              </Link>
            </div>
            <div className="bg-neutral-100 p-2 rounded-lg">
              <Link
                href={`https://www.instagram.com/planaadhoc/`}
                target="_blank"
                rel="noreferrer"
              >
                <InstagramLogo size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 mb-6">
        <div className="border-b mb-8 border-neutral-400 h-0 w-full"></div>
        <h6 className="text-center text-xs">
          © 2023 PLANA AD HOC CONSULTORIA PLANEJAMENTO E SERVICOS DE
          ARQUITETURA LTDA CNPJ: 49.963.645/0001-19 | <br /> Todos os direitos
          reservados.
        </h6>
      </div>
    </div>
  )
}
