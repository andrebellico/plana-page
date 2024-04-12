/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'

export default function AboutPlanaSection() {
  return (
    <div className="py-32 px-56  flex flex-col">
      <div className="flex gap-3 mb-6 justify-center items-center flex-col">
        <h2 className="text-5xl">Plana Adhoc</h2>
        <div className="border h-0 w-80 border-solid border-neutral-950"></div>
      </div>
      <div className="flex mt-6">
        <Image src={'/outro.svg'} alt="bulding1" width={289} height={525} />
        <div className="mt-12 mx-8 text-neutral-700 text-sm gap-11 flex flex-col">
          <p>
            AD HOC, cuja expressão em latim é utilizada para descrever "para
            esta finalidade", nosso propósito é{' '}
            <strong>atender o mercado imobiliário</strong> oferecendo{' '}
            <strong>
              consultoria e implementando a área de Personalização
            </strong>{' '}
            de Unidades Autônomas para Construtoras e Incorporadoras
            identificando e corrigindo "gaps" do negócio.
          </p>
          <p>
            Avaliação de melhores e mais eficientes técnicas para alavancar os
            resultados da companhia. Referência para empresas exigentes, que
            procuram os <strong>melhores serviços</strong> aderente as melhores
            práticas, com competência,{' '}
            <strong> capacidade técnica e qualidade.</strong>
            Otimização de processos e serviços diferenciados, nos comprometendo
            <strong> sempre a altura</strong> das exigências e demandas do
            mercado
          </p>
        </div>
        <Image src={'/opa.svg'} alt="bulding1" width={289} height={525} />
      </div>
    </div>
  )
}
