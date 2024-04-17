'use client'
import { useEffect, useState } from 'react'

export default function VideoSection() {
  const [hasWindow, setHasWindow] = useState(false)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true)
    }
  }, [])
  return (
    <div id="Tutorial">
      <div className="px-24 py-20 lg:grid-cols-2  sm:grid-cols-1 md:grid-cols-1 grid gap-24 justify-center items-center">
        {hasWindow && (
          <video controls src={'/videoteste.mp4'} className="w-full" />
        )}
        <div className="gap-6 flex justify-center items-center flex-col">
          <h2 className="sm:text-3xl text-lg text-neutral-950">
            Veja como nosso sistema funciona
          </h2>
          <p className="text-neutral-600 sm:text-sm text-center text-xs sm:w-full w-56">
            O Plana AdHoc é um sistema que automatiza o processo de escolha de
            personalizações de arquitetura, de forma intuitiva e interativa!
            Nossa missão é revolucionar a forma como a arquitetura é vivenciada,
            fornecendo aos usuários uma maquete realista gerada dinamicamente
            com base em suas preferências.
          </p>
          <div className="flex text-sm mx-8 my-12 gap-11">
            <div>
              <p>+12</p>
              <span className="text-neutral-600">Anos de Atuação</span>
            </div>
            <div>
              <p>+15</p>
              <span className="text-neutral-600">Empreendimentos</span>
            </div>
            <div>
              <p>3mil</p>
              <span className="text-neutral-600">Unidades atendidas</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
