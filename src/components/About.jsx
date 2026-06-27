import { Container, Row, Col } from 'react-bootstrap'
import { FiCheckCircle, FiAward, FiShield, FiUsers } from 'react-icons/fi'
import founderImg from '../assets/images/founder.png'

const HIGHLIGHTS = [
  { icon: <FiCheckCircle />, text: 'Verified Properties' },
  { icon: <FiAward />, text: '12+ Years Experience' },
  { icon: <FiShield />, text: 'Legal Compliance' },
  { icon: <FiUsers />, text: '500+ Happy Clients' },
]

export default function About() {
  return (
    <section className="about-section section-padding" id="about">
      <Container>
        <Row className="align-items-center g-4 g-lg-5">
          <Col xs={12} lg={6} data-aos="fade-right">
            <div className="about-img-wrapper">
              <img src={founderImg} alt="Rayapudi Nagaraju - Founder" loading="lazy" />
              <div className="experience-badge">
                <div className="badge-number">12+</div>
                <div className="badge-text">Years of Trust</div>
              </div>
            </div>
          </Col>
          <Col xs={12} lg={6} data-aos="fade-left">
            <span className="section-subtitle">About Us</span>
            <h2 className="section-title">
              Trusted Name in <span>Amaravathi</span> Real Estate
            </h2>
            <p style={{ color: 'var(--color-dark-gray)', lineHeight: 1.8, marginBottom: '1rem' }}>
              <strong>Kanaka Durga Real Estate Constructions</strong>, founded by{' '}
              <strong>Rayapudi Nagaraju</strong>, has been a cornerstone of real estate
              excellence in the Amaravathi Capital Region for over 12 years. We are
              committed to helping families and investors find their perfect plot in
              the Amaravathi Capital Region, Andhra Pradesh.
            </p>
            <p style={{ color: 'var(--color-dark-gray)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              Based in Rayapudi, at the heart of Amaravathi, we specialize in premium
              residential plots, construction services, and real estate advisory across
              7 prime locations in the Guntur District. Our deep local knowledge and
              transparent dealings have earned us the trust of over 500 satisfied clients.
            </p>

            <div className="about-highlights">
              {HIGHLIGHTS.map((item, i) => (
                <div className="about-highlight-item" key={i}>
                  <div className="icon">{item.icon}</div>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
