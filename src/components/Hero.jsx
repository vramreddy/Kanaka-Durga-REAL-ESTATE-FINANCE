import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FiPhone, FiChevronLeft, FiChevronRight, FiMapPin, FiMessageSquare } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

import heroBg from '../assets/images/hero-bg.png'
import financialBg from '../assets/images/financial-bg.png'

const SLIDES = [
  {
    image: heroBg,
    tag: 'Premium Real Estate',
    title: <>Building Dreams in Amaravathi <span className="highlight">Capital Region</span></>,
    desc: "Discover premium residential and commercial properties in Andhra Pradesh's new capital. From Thullur to Velagapudi, we connect you with the future of Amaravati.",
  },
  {
    image: financialBg,
    tag: 'Financial Solutions',
    title: <>Trusted Financial Services &amp;<br /><span className="highlight">Gold Recovery</span></>,
    desc: 'Expert assistance for gold retrieval from banks, Third Party Loan Processing, and comprehensive financial solutions tailored to your needs in the Amaravati region.',
  },
  {
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80',
    tag: 'Capital City Growth',
    title: <>Invest in Andhra Pradesh&apos;s <span className="highlight">Capital Region</span></>,
    desc: 'Amaravati is transforming into a world Class Capital Region with Smart infrastructure, commercial zones, and IT hubs. Secure your investment today.',
  },
]

function CountUp({ end, duration = 1500, suffix = '', start = false }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) { setCount(0); return }
    let startTime = null
    let rafId
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) rafId = requestAnimationFrame(step)
      else setCount(end)
    }
    rafId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafId)
  }, [end, duration, start])

  return <>{count}{suffix}</>
}

export default function Hero({ onEnquiry, isLoaded }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % SLIDES.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)
  const goToSlide = (idx) => setCurrentSlide(idx)

  return (
    <section className="hero-section" id="home">
      <div className="hero-carousel">
        {SLIDES.map((slide, idx) => (
          <div
            key={idx}
            className={`hero-slide ${idx === currentSlide ? 'active' : ''}`}
          >
            <img src={slide.image} alt="Amaravathi Capital Region" className="hero-bg-img" />

            <Container className="hero-content">
              <Row>
                {/* FIX: use full 12 cols on all sizes so text never overflows */}
                <Col xs={12} lg={10} xl={9}>
                  <div className="hero-badge">
                    <FiMapPin style={{ marginRight: 6 }} />
                    {slide.tag}
                  </div>

                  <h1 className="hero-title">{slide.title}</h1>

                  <p className="hero-subtitle">{slide.desc}</p>

                  <div className="hero-buttons">
                    <button
                      onClick={onEnquiry}
                      className="btn-gold d-inline-flex align-items-center gap-2"
                      style={{ border: 'none' }}
                    >
                      <FiMessageSquare /> Get in Touch
                    </button>
                    <a href="tel:+919959832087" className="btn-gold d-inline-flex align-items-center gap-2">
                      <FiPhone /> Call Now
                    </a>
                    <a
                      href="https://wa.me/919959832087?text=Hi%2C%20I%20am%20interested%20in%20Kanaka%20Durga%20Real%20Estate%20properties%20in%20Amaravathi.%20Please%20share%20more%20details."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp d-inline-flex align-items-center gap-2"
                    >
                      <FaWhatsapp /> WhatsApp
                    </a>
                  </div>

                  <div className="hero-stats">
                    <div className="hero-stat">
                      <div className="stat-number">
                        <CountUp end={12} suffix="+" start={isLoaded && idx === currentSlide} />
                      </div>
                      <div className="stat-label">Years Experience</div>
                    </div>
                    <div className="hero-stat">
                      <div className="stat-number">
                        <CountUp end={7} start={isLoaded && idx === currentSlide} />
                      </div>
                      <div className="stat-label">Prime Locations</div>
                    </div>
                    <div className="hero-stat">
                      <div className="stat-number">
                        <CountUp end={500} suffix="+" start={isLoaded && idx === currentSlide} />
                      </div>
                      <div className="stat-label">Happy Clients</div>
                    </div>
                    <div className="hero-stat">
                      <div className="stat-number">
                        <CountUp end={100} suffix="%" start={isLoaded && idx === currentSlide} />
                      </div>
                      <div className="stat-label">Trust &amp; Transparency</div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        ))}
      </div>

      {/* Carousel arrows */}
      <div className="hero-carousel-arrows">
        <button className="hero-carousel-arrow prev" onClick={prevSlide} aria-label="Previous Slide">
          <FiChevronLeft />
        </button>
        <button className="hero-carousel-arrow next" onClick={nextSlide} aria-label="Next Slide">
          <FiChevronRight />
        </button>
      </div>

      {/* Carousel indicators */}
      <div className="hero-carousel-indicators">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            className={`hero-indicator-dot ${idx === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
