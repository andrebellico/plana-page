'use client'

import { CaretRight } from '@phosphor-icons/react'
import { twMerge } from 'tailwind-merge'

interface FunctionalitiesProps {
  icon: React.ReactNode
  title: string
  subtitle: string
  link: string
  bgcolor?: string
}

export default function FunctionalitiesCard({
  icon,
  title,
  subtitle,
  link,
  bgcolor,
}: FunctionalitiesProps) {
  return (
    <div className="flex gap-7 items-center">
      <div
        className={twMerge(
          'p-6 text-neutral-600 rounded-full bg-yellow-200 flex justify-center items-center',
          bgcolor,
        )}
      >
        {icon}
      </div>
      <div className="text-sm text-neutral-950">
        <h4>{title}</h4>
        <p className="text-neutral-600 mb-2">{subtitle}</p>
        <div className="flex justify-start items-center">
          <a href={link} className="">
            Ler mais
          </a>
          <CaretRight size={16} />
        </div>
      </div>
    </div>
  )
}
