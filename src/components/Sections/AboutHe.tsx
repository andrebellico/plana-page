import Image from 'next/image'

export default function AboutHeSection() {
  return (
    <div className="py-28 px-36 gap-36 flex justify-center items-center bg-neutral-0">
      <Image
        src={'/Alessandra.svg'}
        width={423}
        height={475}
        alt="AlessandraLima"
      />
      <div>
        <p className="text-2xl mb-8 text-primary-700">Olá, meu nome é</p>
        <h2 className="text-6xl mb-7">Alessandra Lima</h2>
        <span className="text-neutral-800 text-lg">
          Arquiteta e Urbanista, graduada pela PUC-PR com MBA em Gerenciamento
          de Projetos pela FGV, possui carreira generalista desenvolvida
          integralmente no mercado imobiliário.
        </span>
        <p className="text-2xl mt-24 text-neutral-950">
          foundadora e CEO do PlanaAdhoc
        </p>
      </div>
    </div>
  )
}
