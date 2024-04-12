'use client'

import {
    ChartPieSlice,
    CheckCircle,
    HardHat,
    ShieldCheckered,
} from '@phosphor-icons/react'
import FunctionalitiesCard from './FunctionalitiesCard'

export default function FunctionalitiesSection() {
  return (
    <div className="mx-[100px]">
      <div className="flex gap-6 mb-4 items-center justify-start">
        <div className="w-24 h-0 border"></div>
        <p className="text-xs text-neutral-600">Funcionalidades</p>
      </div>
      <div className="flex flex-row justify-between gap-[60px] items-end">
        <h2 className="text-5xl font-bold">
          Personalize seu imóvel do jeito que deseja.
        </h2>
        <span className="text-lg text-neutral-600">
          Com facilidade você pode ter controle de todos os seus empreendimentos
          e tornar cada um personalizavel para os seus clientes.
        </span>
      </div>
      <div className="grid grid-cols-2 gap-9 mt-24">
        <FunctionalitiesCard
          title="Sem reforma"
          subtitle="Nós instalamos todos os itens contratados, deixando você livre dos possíveis aborrecimentos que qualquer obra ocasionar."
          link="Ler mais"
          icon={<HardHat size={32} />}
        />
        <FunctionalitiesCard
          title="Garantia"
          subtitle="Quando as alterações são realizadas pela própria construtora, todas as garantias do imóvel são mantidas integralmente."
          link="Ler mais"
          icon={<ShieldCheckered size={32} />}
          bgcolor="bg-secondary-100"
        />
        <FunctionalitiesCard
          title="Assessoria"
          subtitle="Arquitetos atentos às últimas tendências auxiliam gratuitamente, para que as escolhas sejam as mais adequadas ao seu perfil."
          link="Ler mais"
          icon={<ChartPieSlice size={32} />}
          bgcolor="bg-success-100"
        />
        <FunctionalitiesCard
          title="Qualidade"
          subtitle="Somos quem mais entende do seu empreendimento garantimos um serviço de qualidade, comprovado na entrega."
          link="Ler mais"
          icon={<CheckCircle size={32} />}
          bgcolor="bg-alternative-100"
        />
      </div>
    </div>
  )
}
