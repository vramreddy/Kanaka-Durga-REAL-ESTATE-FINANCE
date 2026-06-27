import { useState, useEffect } from 'react'
import AOS from 'aos'
import NavbarComponent from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import WhyAmaravathi from './components/WhyAmaravathi'
import Locations from './components/Locations'
import Properties from './components/Properties'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import EnquiryModal from './components/EnquiryModal'
import LeadsDashboard from './components/LeadsDashboard'
import WhatsAppButton from './components/WhatsAppButton'
import Preloader from './components/Preloader'
import ScrollToTop from './components/ScrollToTop'


function App() {
  const [showEnquiry, setShowEnquiry] = useState(false)
  const [showLeads, setShowLeads] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
    })

    // Check if ?leads=true is in search parameters
    const params = new URLSearchParams(window.location.search)
    if (params.get('leads') === 'true') {
      setShowLeads(true)
    }
  }, [])

  return (
    <>
      <Preloader onComplete={() => setIsLoaded(true)} />
      <NavbarComponent onEnquiry={() => setShowEnquiry(true)} />
      <Hero onEnquiry={() => setShowEnquiry(true)} isLoaded={isLoaded} />
      <About />
      <WhyAmaravathi />
      <Locations />
      <Properties onEnquiry={() => setShowEnquiry(true)} />
      <Services />
      <Testimonials />
      <Contact />
      <Footer onOpenLeads={() => setShowLeads(true)} />
      <EnquiryModal show={showEnquiry} onHide={() => setShowEnquiry(false)} />
      <LeadsDashboard show={showLeads} onHide={() => setShowLeads(false)} />
      <WhatsAppButton />
      <ScrollToTop />
    </>
  )
}

export default App
