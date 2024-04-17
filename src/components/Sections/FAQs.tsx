'use client'

import React from 'react'
import { Accordion, AccordionItem } from '@nextui-org/accordion'
import { Button } from '../Button'
import Link from 'next/link'

export default function FAQsSection() {
  const defaultContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  return (
    <div
      id="FAQs"
      className="bg-neutral-0 py-20 lg:px-24 md:px-16 sm:px-12 px-12"
    >
      <div className="flex gap-6 mb-4 items-center justify-start">
        <div className="w-24 h-0 border"></div>
        <p className="text-xs text-neutral-600">FAQs</p>
      </div>
      <h4>Perguntas frequentes</h4>
      <div className="lg:flex-row lg:flex md:flex-col sm:flex-col mt-16 gap-10">
        <div className="w-full mb-10">
          <Accordion>
            <AccordionItem
              key="1"
              className="text-neutral-600 "
              aria-label="Accordion 1"
              title="Accordion 1"
            >
              {defaultContent}
            </AccordionItem>
            <AccordionItem
              key="2"
              className="text-neutral-600"
              aria-label="Accordion 2"
              title="Accordion 2"
            >
              {defaultContent}
            </AccordionItem>
            <AccordionItem
              key="3"
              className="text-neutral-600"
              aria-label="Accordion 3"
              title="Accordion 3"
            >
              {defaultContent}
            </AccordionItem>
            <AccordionItem
              key="4"
              className="text-neutral-600"
              aria-label="Accordion 4"
              title="Accordion 4"
            >
              {defaultContent}
            </AccordionItem>
            <AccordionItem
              key="5"
              className="text-neutral-600"
              aria-label="Accordion 5"
              title="Accordion 5"
            >
              {defaultContent}
            </AccordionItem>
            <AccordionItem
              key="6"
              className="text-neutral-600"
              aria-label="Accordion 6"
              title="Accordion 6"
            >
              {defaultContent}
            </AccordionItem>
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
  )
}
