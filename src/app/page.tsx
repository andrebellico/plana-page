import AboutHeSection from '@/components/Sections/AboutHe'
import AboutPlanaSection from '@/components/Sections/AboutPlana'
import FeedbackSection from '@/components/Sections/Clients'
import FAQsSection from '@/components/Sections/FAQs'
import Footer from '@/components/Footer'
import FunctionalitiesSection from '@/components/Sections/Functionalities'
import Home from '@/components/Sections/Home'
import InfoSection from '@/components/Sections/Info'
import VideoSection from '@/components/Sections/VideoSection'

export default function HomePage() {
  return (
    <>
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
