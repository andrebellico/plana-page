'use client'

import {
  InstagramLogo,
  LinkedinLogo,
  WhatsappLogo,
} from '@phosphor-icons/react'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className="text-neutral-500 bg-neutral-0 px-28 w-full text-lg flex flex-col ">
      <div className="flex w-full mt-20 items-center justify-between">
        <Image src={'/logo.svg'} alt="logo" width={182} height={52} />
        <div className="flex gap-10">
          <h6>Home</h6>
          <h6>About</h6>
          <h6>Contact</h6>
        </div>
        <div className="flex gap-4">
          <WhatsappLogo size={32} />
          <InstagramLogo size={32} />
          <LinkedinLogo size={32} />
        </div>
      </div>
      <div className="mt-16 mb-6">
        <div className="border mb-8 border-neutral-400 h-0 w-full"></div>
        <h6 className="text-center text-xs">
          © 2023 PLANA AD HOC CONSULTORIA PLANEJAMENTO E SERVICOS DE
          ARQUITETURA LTDA CNPJ: 49.963.645/0001-19 | <br /> Todos os direitos
          reservados.
        </h6>
      </div>
    </div>
  )
}
