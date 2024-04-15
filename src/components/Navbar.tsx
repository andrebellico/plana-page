import React from 'react'
import Link from 'next/link'
import { Button } from './Button'
import Image from 'next/image'

interface Links {
  links: string[]
  activeSection: string
  onLinkClick: (sectionId: string) => void // Adicionando a função onLinkClick
}

export default function Navbar({ links, activeSection, onLinkClick }: Links) {
  const handleLinkClick = (sectionId: string) => {
    // Chama a função onLinkClick passando o ID da seção correspondente
    onLinkClick(sectionId)
  }

  return (
    <header className="fixed top-0 z-20 flex w-screen px-[100px] items-center py-6 bg-neutral-100 opacity-95 justify-between">
      <div className="flex gap-14 text-sm">
        <Image src={'/logo.svg'} width={96} height={29} alt="logo" />
        <div className="gap-6 mt-2 flex">
          {links.map((link, index) => (
            <span
              key={index}
              className={`cursor-pointer ${activeSection === link && 'text-primary-700'}`}
              onClick={() => handleLinkClick(link)} // Adicionando onClick para chamar a função handleLinkClick
            >
              {link}
            </span>
          ))}
        </div>
      </div>
      <div className="flex gap-4">
        <Button variant="secondary">
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://plana-adhoc.vercel.app"
          >
            Login
          </Link>
        </Button>
        <Button>
          <Link
            href={`https://wa.me/553584074351`}
            target="_blank"
            rel="noreferrer"
          >
            Entrar em contato
          </Link>
        </Button>
      </div>
    </header>
  )
}
