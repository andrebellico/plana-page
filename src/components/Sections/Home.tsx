import Image from 'next/image'
import { Button } from '../Button'
import Link from 'next/link'

export default function Home() {
  return (
    <div
      id="Home"
      className="max-[1238px]:flex-col flex flex-row max-[1084px]:px-28 max-[956px]:px-12 max-[536px]:px-0 p-40"
    >
      <Image
        fetchPriority="high"
        alt="home image"
        src="/building.svg"
        width={860}
        height={120}
        className="shadow-lg rounded   max-[1238px]:w-full"
      />
      <div className="max-[1238px]:translate-x-[25%] max-[678px]:translate-x-1/2 max-[410px]:translate-x-[15%] max-[470px]:translate-x-1/3 max-[470px]:-translate-y-1/3   max-[568px]:h-72  max-[568px]:py-12 max-[956px]:translate-x-3/4 max-[1238px]:-translate-y-3/4 max-[956px]:min-w-[200px] max-[1238px]:w-[300px] -translate-x-3/4 translate-y-10 bg-neutral-0  shadow-xl flex flex-col min-w-[563px] h-96 rounded-lg px-12 py-16">
        <h1 className=" max-[956px]:text-2xl max-[568px]:text-lg text-5xl mb-6 font-bold">
          Torne o processo mais simples
        </h1>
        <span className="mb-8  max-[568px]:text-xs text-sm">
          Use a nossa tecnologia para transformar sua ideia em realidade, sem
          sair do conforto da sua casa.
        </span>
        <div>
          <Button>
            <Link
              href={`https://wa.me/553584074351`}
              target="_blank"
              rel="noreferrer"
            >
              Começar agora!
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
