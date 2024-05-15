'use client'

import React from 'react'
import { Accordion, AccordionItem } from '@nextui-org/accordion'
import { Button } from '../Button'
import Link from 'next/link'
import { FQSData } from '@/shared/mocks/fqs'

export default function FAQsSection() {
  return (
    <div id="FAQs" className=" bg-neutral-0 ">
      <div className="max-w-[1352px] mx-auto py-20 lg:px-24 md:px-16 sm:px-6 px-6">
        <div className="flex gap-6 mb-4 items-center justify-start">
          <div className="w-24 h-0 border"></div>
          <p className="text-xs text-neutral-600">FAQs</p>
        </div>
        <h4>Perguntas frequentes</h4>
        <div className="lg:flex-row lg:flex md:flex-col sm:flex-col mt-16 gap-10">
          <div className="w-full mb-10">
            <Accordion>
              {FQSData.map((item) => (
                <AccordionItem
                  key={item.id}
                  className="text-neutral-600 "
                  aria-label="Accordion 1"
                  title={item.title}
                >
                  {item.text}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="flex flex-col max-h-80 gap-7 text-center bg-neutral-0 border-2 border-neutral-100 rounded-lg border-solid justify-center shadow-xl px-7 pt-9 pb-14">
            <h5 className="text-lg">Ainda continua com duvidas?</h5>
            <p className="text-sm text-neutral-600">
              Sua questão é nossa prioridade! Envie uma mensagem e obterá
              assistência imediata.
            </p>
            <div className="mt-1">
              <Button>
                <Link
                  href={`https://wa.me/553584074351`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Contate nos
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
