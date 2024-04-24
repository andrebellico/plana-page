'use client'

import {
  ChartPieSlice,
  CheckCircle,
  HardHat,
  ShieldCheckered,
} from '@phosphor-icons/react'
import FunctionalitiesCard from '../FunctionalitiesCard'

export default function FunctionalitiesSection() {
  return (
    <div
      id="Funcionalidades"
      className="max-w-[1352px]  mx-auto lg:px-24 md:px-16 sm:px-6 px-6 pt-20"
    >
      <div className="flex gap-6 mb-4 items-center justify-start">
        <div className="w-24 h-0 border"></div>
        <p className="text-xs text-neutral-600">Funcionalidades</p>
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 justify-between gap-[80px] items-end">
        <h2 className="text-4xl font-bold">
          Personalize seu imóvel do jeito que deseja.
        </h2>
        <span className="text-lg text-neutral-600">
          Com facilidade você pode ter controle de todos os seus empreendimentos
          e tornar cada um personalizavel para os seus clientes.
        </span>
      </div>
      <div className="sm:grid-cols-1 grid lg:grid-cols-2 md:grid-cols-2 gap-9 mt-24">
        <FunctionalitiesCard
          title="Sem reforma"
          subtitle="Nós instalamos todos os itens contratados, deixando você livre dos possíveis aborrecimentos que qualquer obra ocasionar."
          icon={<HardHat size={32} />}
        />
        <FunctionalitiesCard
          title="Garantia"
          subtitle="Quando as alterações são realizadas pela própria construtora, todas as garantias do imóvel são mantidas integralmente."
          icon={<ShieldCheckered size={32} />}
          bgcolor="bg-secondary-100"
        />
        <FunctionalitiesCard
          title="Assessoria"
          subtitle="Arquitetos atentos às últimas tendências auxiliam gratuitamente, para que as escolhas sejam as mais adequadas ao seu perfil."
          icon={<ChartPieSlice size={32} />}
          bgcolor="bg-success-100"
        />
        <FunctionalitiesCard
          title="Qualidade"
          subtitle="Somos quem mais entende do seu empreendimento garantimos um serviço de qualidade, comprovado na entrega."
          icon={<CheckCircle size={32} />}
          bgcolor="bg-alternative-100"
        />
      </div>
    </div>
  )
}
