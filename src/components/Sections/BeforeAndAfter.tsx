'use client'

import ReactBeforeSliderComponent from 'react-before-after-slider-component'
import 'react-before-after-slider-component/dist/build.css'
import { Button } from '../Button'
import Link from 'next/link'

export default function BeforeAndAfter() {
  const FIRST_IMAGE = {
    imageUrl: './depois.svg',
  }
  const SECOND_IMAGE = {
    imageUrl: './antes.svg',
  }
  return (
    <div className="max-[800px]:flex-col flex gap-10 items-center w-full justify-center lg:p-24 md:p-16 sm:p-6 p-6">
      <div className="items-center justify-center flex flex-col">
        <ReactBeforeSliderComponent
          firstImage={FIRST_IMAGE}
          secondImage={SECOND_IMAGE}
        />
      </div>
      <div className="gap-1 flex justify-center text-center items-center flex-col">
        <span className="text-xs">
          Espaços antes monótonos, agora inspiradores.
        </span>
        <span className="text-3xl">Veja a magia acontecer</span>
        <span className="text-sm ">
          Deixe-se encantar pelas transformações enquanto de espaços comuns para
          ambientes excepcionais.
        </span>
        <Link
          href={`https://wa.me/553584074351`}
          target="_blank"
          rel="noreferrer"
        >
          <Button className="mt-2">Entrar em contato</Button>
        </Link>
      </div>
    </div>
  )
}
