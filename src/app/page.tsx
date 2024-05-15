import React from 'react'
import AboutPlanaSection from '@/components/Sections/AboutPlana'
import FeedbackSection from '@/components/Sections/Clients'
import FAQsSection from '@/components/Sections/FAQs'
import Footer from '@/components/Footer'
import FunctionalitiesSection from '@/components/Sections/Functionalities'
import Home from '@/components/Sections/Home'
import BeforeAndAfter from '@/components/Sections/BeforeAndAfter'
import InfoSection from '@/components/Sections/Info'
import VideoSection from '@/components/Sections/VideoSection'
import AboutSheSection from '@/components/Sections/AboutShe'

export default async function HomePage() {
  return (
    <>
      <Home />
      <FunctionalitiesSection />
      <InfoSection />
      <VideoSection />
      <FAQsSection />
      <BeforeAndAfter />
      <FeedbackSection />
      <AboutSheSection />
      <AboutPlanaSection />
      <Footer />
    </>
  )
}
