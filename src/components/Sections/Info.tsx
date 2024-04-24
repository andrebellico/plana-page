import Image from 'next/image'
import { Button } from '../Button'
import Link from 'next/link'

export default function InfoSection() {
  return (
    <div id="Info" className="  bg-neutral-0">
      <div className="max-w-[1352px] mx-auto mt-20 py-28">
        <div className="lg:p-24 md:p-16 sm:p-6 p-6 gap-10 min-[968px]:grid-cols-2  grid grid-cols-1  items-center">
          <div className="gap-6 flex flex-col">
            <h2 className="min-[1253px]:text-5xl sm:text-4xl text-3xl font-bold text-neutral-800">
              Gerencie todos os seus empreendimentos
            </h2>
            <p className="text-neutral-600 min-[1253px]:text-lg text-sm">
              A Plana também permite que os arquitetos acompanhem seus usuários,
              gerenciem o processo e apliquem processos para aumentar a
              produtividade. Basicamente, é uma ferramenta completa para os
              arquitetos atenderem seus clientes.
            </p>
            <p className="text-neutral-600  min-[1253px]:text-lg text-sm">
              Avaliamos sempre as melhores e mais eficientes práticas para
              alavancar os resultados.
            </p>
            <div className="sm:flex-row flex-col flex gap-6 mt-11">
              <Button className="rounded-[40px] sm:h-[66px] h-12 py-6 px-9 sm:text-lg text-xs">
                <Link
                  target="_blank"
                  rel="noreferrer"
                  href="https://plana-adhoc.vercel.app"
                >
                  Entrar agora!
                </Link>
              </Button>
              <Button
                variant="ternary"
                className="rounded-[40px] border-[2px] text-neutral-600 border-neutral-600 sm:text-lg text-xs sm:h-[66px] h-12 py-6 px-9 "
              >
                <Link
                  href={`https://wa.me/553584074351`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Falar com a equipe
                </Link>
              </Button>
            </div>
          </div>
          <Image
            className="min-[1308px]:flex hidden right-0 absolute"
            src={'/info.svg'}
            width={760}
            height={620}
            alt="Info"
          />
          <Image
            src={'/MacBook.svg'}
            alt="laptop"
            width={400}
            height={300}
            className="min-[1308px]:hidden flex w-full"
          />
        </div>
      </div>
    </div>
  )
}
// min-[1308px]:grid-cols-2
