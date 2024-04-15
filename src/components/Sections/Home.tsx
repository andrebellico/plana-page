import Image from 'next/image'
import { Button } from '../Button'
import Link from 'next/link'

export default function Home() {
  return (
    <div
      id="Home"
      className="flex justify-center items-center my-[80px] h-screen"
    >
      <Image
        fetchPriority="high"
        alt="home image"
        src="/building.svg"
        width={860}
        height={120}
        className="rounded-lg translate-x-36 shadow"
      />
      <div className="object-cover -translate-x-1/3 bg-neutral-0 shadow-xl max-w-[563px] flex flex-col rounded-lg px-12 py-16">
        <h1 className="text-5xl mb-6 font-bold">
          Torne o processo mais simples
        </h1>
        <span className="mb-8 text-sm">
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
