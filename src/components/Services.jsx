import { Container, Row, Col } from 'react-bootstrap'
import { FiHome, FiTool, FiDollarSign } from 'react-icons/fi'
import realEstateImg from '../assets/images/real_estate_service.png'
import constructionImg from '../assets/images/construction_service.png'
import goldRecoveryImg from '../assets/images/gold_recovery.png'

const SERVICES = [
  {
    icon: <FiHome />,
    image: realEstateImg,
    title: 'Real Estate Services',
    desc: 'End-to-end real estate services including plot sales, land acquisition, property registration, and legal verification. We offer carefully curated plots in 7 premium locations across the Amaravathi Capital Region with complete documentation support.',
    features: ['Plot Sales & Purchase', 'Title Verification', 'Registration Support', 'Investment Advisory'],
  },
  {
    icon: <FiTool />,
    image: constructionImg,
    title: 'Construction Services',
    desc: 'Quality construction services from foundation to finish. Our experienced team delivers residential and commercial buildings with the highest standards of quality, safety, and on-time delivery. We use modern techniques and premium materials.',
    features: ['Residential Construction', 'Commercial Buildings', 'Renovations', 'Project Management'],
  },
  {
    icon: <FiDollarSign />,
    image: goldRecoveryImg,
    title: 'Financial Services',
    desc: 'Specialized financial services focused exclusively on gold recoveries from banks and other 3rd party agencies. We assist clients in recovering pledged gold assets with expert guidance, negotiation support, and complete documentation handling.',
    features: ['Gold Recovery from Banks', 'Third-Party Agency Recovery', 'Negotiation & Settlement', 'Documentation Support'],
  },
]

export default function Services() {
  return (
    <section className="section-padding" id="services">
      <Container>
        <div className="text-center mb-4 mb-lg-5">
          <span className="section-subtitle" data-aos="fade-up">What We Offer</span>
          <h2 className="section-title" data-aos="fade-up" data-aos-delay="100">
            Our <span>Services</span>
          </h2>
          <p className="section-desc" data-aos="fade-up" data-aos-delay="200">
            Comprehensive real estate solutions from finding the perfect plot
            to building your dream home and planning your finances.
          </p>
        </div>

        <Row className="g-3 g-lg-4">
          {SERVICES.map((service, i) => (
            <Col xs={12} md={4} key={i} data-aos="fade-up" data-aos-delay={i * 150}>
              <div className="service-card" id={`service-${i}`}>
                <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', height: '180px' }}>
                  <img
                    src={service.image}
                    alt={service.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                    className="service-card-img"
                  />
                </div>
                <div className="service-icon">{service.icon}</div>
                <h4>{service.title}</h4>
                <p>{service.desc}</p>
                <ul style={{ textAlign: 'left', marginTop: '1rem' }}>
                  {service.features.map((f, j) => (
                    <li key={j} style={{
                      padding: '5px 0',
                      color: 'var(--color-dark-gray)',
                      fontSize: '0.88rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}>
                      <span style={{ color: 'var(--color-gold)', fontWeight: 700 }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}
