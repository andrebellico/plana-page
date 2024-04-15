'use client'

import React, { useEffect, useState } from 'react'
import AboutHeSection from '@/components/Sections/AboutHe'
import AboutPlanaSection from '@/components/Sections/AboutPlana'
import FeedbackSection from '@/components/Sections/Clients'
import FAQsSection from '@/components/Sections/FAQs'
import Footer from '@/components/Footer'
import FunctionalitiesSection from '@/components/Sections/Functionalities'
import Home from '@/components/Sections/Home'
import InfoSection from '@/components/Sections/Info'
import VideoSection from '@/components/Sections/VideoSection'
import Navbar from '@/components/Navbar'

export default function HomePage() {
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
    <>
      <Navbar
        links={links}
        activeSection={activeSection}
        onLinkClick={scrollToSection}
      />
      <Home />
      <FunctionalitiesSection />
      <InfoSection />
      <VideoSection />
      <FAQsSection />
      <FeedbackSection />
      <AboutHeSection />
      <AboutPlanaSection />
      <Footer />
    </>
  )
}
