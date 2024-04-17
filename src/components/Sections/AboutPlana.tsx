import Image from 'next/image'

export default function AboutPlanaSection() {
  return (
    <div className="py-28 lg:px-36 md:px-20 sm:px-12 px-12 gap-24 flex flex-col">
      <div>
        <h1 className="text-5xl mb-3">Plana Adhoc</h1>
        <div className="h-0 border-neutral-950 border w-[141px]"></div>
      </div>
      <div className="flex md:flex-col flex-col items-center justify-center sm:flex-col lg:flex-row gap-24">
        <Image src={'/artboard.svg'} alt="logo" width={230} height={220} />
        <div>
          <h2 className="text-2xl text-neutral-950 mb-3">
            Consultoria Especializada em Personalização Imobiliária.
          </h2>
          <span className="text-lg text-neutral-700">
            Oferecemos consultoria especializada em personalização de unidades
            autônomas para construtoras e incorporadoras. Identificamos e
            corrigimos lacunas no negócio, implementando as melhores práticas
            para alavancar resultados. Nosso foco está em otimizar processos e
            serviços diferenciados, atendendo às exigências do mercado com
            competência e qualidade.
          </span>
        </div>
      </div>
    </div>
  )
}
