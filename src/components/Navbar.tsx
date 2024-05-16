import React, { useEffect, useState } from 'react'
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
  const [backgroundColor, setBackgroundColor] = useState('')
  const [textColor, setTextColor] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const homeElement = document.getElementById('Home')

      if (homeElement) {
        const homePosition = homeElement.offsetTop
        const homeHeight = homeElement.offsetHeight

        if (scrollPosition > homePosition + homeHeight) {
          setTextColor('text-neutral-900')
          setBackgroundColor('bg-neutral-200 bg-opacity-60 transition')
        } else {
          setTextColor('text-neutral-50')
          setBackgroundColor('transition bg-transparent')
        }
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleLinkClick = (sectionId: string) => {
    onLinkClick(sectionId)
  }

  const [nav, setNav] = useState(false)

  const handleNavbar = () => {
    setNav(!nav)
  }

  return (
    <>
      <header
        className={`z-30 top-0 fixed flex w-screen lg:px-24 md:px-16 sm:px-6 px-6 items-center py-3 justify-between ${backgroundColor} `}
      >
        <div className="flex gap-14 text-sm">
          <Image src={'/logo.svg'} width={127} height={38} alt="logo" />
          <div
            className={`gap-6 mt-2   text-neutral-50 hidden min-[1058px]:flex ${textColor}`}
          >
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
          <Button
            className="bg-neutral-200 text-neutral-600 border-neutral-500  hover:bg-neutral-300 text-sm"
            size="s"
          >
            <Link
              href="https://plana-adhoc.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              PAINEL DO CLIENTE
            </Link>
          </Button>
        </div>
        <div
          onClick={handleNavbar}
          className={`block  md:min-[1058px]:hidden ${textColor}`}
        >
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
