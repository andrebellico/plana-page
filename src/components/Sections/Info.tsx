import Image from 'next/image'
import { Button } from '../Button'
import Link from 'next/link'

export default function InfoSection() {
  return (
    <div id="Info" className="mt-20 py-28 bg-neutral-0">
      <div className="p-28  grid grid-cols-2 items-center">
        <div className="gap-6 flex flex-col">
          <h2 className="text-5xl font-bold text-neutral-800">
            Gerencie todos os seus empreendimentos
          </h2>
          <p className="text-neutral-600 text-lg">
            A Plana também permite que os arquitetos acompanhem seus usuários,
            gerenciem o processo e apliquem processos para aumentar a
            produtividade. Basicamente, é uma ferramenta completa para os
            arquitetos atenderem seus clientes.
          </p>
          <p className="text-neutral-600 text-lg">
            Avaliamos sempre as melhores e mais eficientes práticas para
            alavancar os resultados.
          </p>
          <div className="flex gap-6 mt-11">
            <Button className="rounded-[40px] h-[66px] py-6 px-9 text-lg">
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
              className="rounded-[40px] border-[2px] text-neutral-600 border-neutral-600 h-[66px] py-6 px-9 text-lg"
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
          className="flex right-0 absolute"
          src={'/info.svg'}
          width={760}
          height={620}
          alt="Info"
        />
      </div>
    </div>
  )
}
