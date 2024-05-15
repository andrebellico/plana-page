'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'

export default function NavBarLinks() {
  const [activeSection, setActiveSection] = useState('')
  const links = ['Home', 'Funcionalidades', 'Info', 'Tutorial', 'FAQs', 'Sobre']

  useEffect(() => {
    const Home = document.getElementById('Home')
    const Sobre = document.getElementById('Sobre')
    const FAQs = document.getElementById('FAQs')
    const Funcionalidades = document.getElementById('Funcionalidades')
    const Info = document.getElementById('Info')
    const Tutorial = document.getElementById('Tutorial')

    const sections = [Home, Funcionalidades, Info, Tutorial, FAQs, Sobre]

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, observerOptions)

    sections?.forEach((section) => {
      section && observer.observe(section)
    })
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <Navbar
      links={links}
      activeSection={activeSection}
      onLinkClick={scrollToSection}
    />
  )
}
