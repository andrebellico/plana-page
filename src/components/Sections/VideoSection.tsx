'use client'
import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'

export default function VideoSection() {
  const [hasWindow, setHasWindow] = useState(false)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true)
    }
  }, [])
  return (
    <div>
      <div className="mx-24 my-20 grid gap-24 justify-center items-center grid-cols-2">
        {hasWindow && (
          <ReactPlayer
            url={
              'https://www.youtube.com/watch?v=2RRFCQYv8aQ&list=RD2RRFCQYv8aQ&index=1'
            }
            width={'564px'}
            height={'484px'}
          />
        )}
        <div className="gap-6 flex flex-col">
          <h2 className="text-3xl text-neutral-950">
            Veja como nosso sistema funciona
          </h2>
          <p className="text-neutral-600 text-sm">
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
