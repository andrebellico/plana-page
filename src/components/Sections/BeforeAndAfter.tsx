'use client'

import ReactBeforeSliderComponent from 'react-before-after-slider-component'
import 'react-before-after-slider-component/dist/build.css'
import { Button } from '../Button'

export default function BeforeAndAfter() {
  const FIRST_IMAGE = {
    imageUrl: './depois.svg',
  }
  const SECOND_IMAGE = {
    imageUrl: './antes.svg',
  }
  return (
    <div className="flex flex-col items-center w-full justify-center gap-3 lg:p-24 md:p-16 sm:p-6 p-6">
      <div className="items-center justify-center flex flex-col">
        <ReactBeforeSliderComponent
          firstImage={FIRST_IMAGE}
          secondImage={SECOND_IMAGE}
        />
      </div>
      <div className="gap-1 flex justify-center text-center items-center flex-col">
        <span className="text-xs">lorem ipsum lad okadcaoja</span>
        <span className="text-3xl">E imagens de qualidade.</span>
        <span className="text-sm">
          “Achei que está muito fácil de navegar e com boa experiência. E
          imagens de qualidade.”
        </span>
        <Button className="mt-2">Entrar em contato</Button>
      </div>
    </div>
  )
}
