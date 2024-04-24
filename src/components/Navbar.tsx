import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from './Button'
import Image from 'next/image'
import { List, X } from '@phosphor-icons/react'

interface Links {
  links: string[]
  activeSection: string
  onLinkClick: (sectionId: string) => void
}

export default function Navbar({ links, activeSection, onLinkClick }: Links) {
  const handleLinkClick = (sectionId: string) => {
    onLinkClick(sectionId)
  }

  const [nav, setNav] = useState(false)

  const handleNavbar = () => {
    setNav(!nav)
  }

  return (
    <>
      <header className="z-20 fixed top-0 flex w-screen lg:px-24 md:px-16 sm:px-6 px-6 items-center   py-6 bg-neutral-100 opacity-95 justify-between">
        <div className="flex gap-14 text-sm">
          <Image src={'/logo.svg'} width={96} height={29} alt="logo" />
          <div className="gap-6 mt-2 hidden min-[1058px]:flex">
            {links.map((link, index) => (
              <span
                key={index}
                className={`cursor-pointer ${activeSection === link && 'text-primary-700'}`}
                onClick={() => handleLinkClick(link)}
              >
                {link}
              </span>
            ))}
          </div>
        </div>
        <div className="md:flex hidden gap-4">
          <Button size="s" variant="secondary">
            <Link
              target="_blank"
              rel="noreferrer"
              href="https://plana-adhoc.vercel.app"
            >
              Login
            </Link>
          </Button>
          <Button size="s">
            <Link
              href={`https://wa.me/553584074351`}
              target="_blank"
              rel="noreferrer"
            >
              Entrar em contato
            </Link>
          </Button>
        </div>
        <div onClick={handleNavbar} className="block md:min-[1058px]:hidden">
          {!nav ? <List size={32} /> : <X size={32} />}
        </div>
        <ul
          className={
            nav
              ? 'fixed left-0 top-0 w-[60%] h-full border-r bg-neutral-100 ease-in-out duration-500'
              : 'ease-in-out duration-500 fixed left-[-100%]'
          }
        >
          <div className="w-full  m-4">
            <Image src={'/logo.svg'} width={96} height={29} alt="logo" />
          </div>
          <div className="w-full  font-bold flex m-6 flex-col">
            {links.map((link, index) => (
              <span
                key={index}
                className={`cursor-pointer ${activeSection === link && 'text-primary-700 '}`}
                onClick={() => handleLinkClick(link)}
              >
                {link}
              </span>
            ))}
          </div>
        </ul>
      </header>
    </>
  )
}
