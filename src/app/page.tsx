import AboutHeSection from '@/components/AboutHe'
import FeedbackSection from '@/components/Clients'
import FAQsSection from '@/components/FAQs'
import FunctionalitiesSection from '@/components/Functionalities'
import Home from '@/components/Home'
import InfoSection from '@/components/Info'
import VideoSection from '@/components/VideoSection'

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
    </>
  )
}
