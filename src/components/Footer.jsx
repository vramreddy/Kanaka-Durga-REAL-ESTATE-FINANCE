import { Container, Row, Col } from 'react-bootstrap'
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi'
import { FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Properties', href: '#properties' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

const LOCATIONS = ['Thullur', 'Rayapudi', 'Mandadam', 'Tadepalli', 'Velagapudi', 'Undavalli', 'Nelapadu']

const socialStyle = { width: 40, height: 40, background: 'rgba(201,168,76,0.1)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-gold)', transition: '0.3s' }

export default function Footer({ onOpenLeads }) {
  return (
    <footer className="footer" id="footer">
      <Container>
        <Row className="g-4">
          {/* Brand column */}
          <Col xs={12} md={6} lg={4}>
            <div 
              onDoubleClick={onOpenLeads} 
              title="Double-click for Leads Database"
              style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.2rem', cursor: 'pointer', userSelect: 'none' }}
            >
              <img
                src="/logo.png"
                alt="Kanaka Durga Logo"
                style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', border: '1.5px solid var(--color-gold)', background: 'var(--color-white)', flexShrink: 0 }}
              />
              <div>
                <h4 style={{ color: 'var(--color-white)', fontFamily: 'var(--font-heading)', marginBottom: 2 }}>
                  Kanaka Durga
                </h4>
                <small style={{ color: 'var(--color-gold)', letterSpacing: 1.5, textTransform: 'uppercase', fontSize: '0.6rem', display: 'block', fontWeight: 600 }}>
                  REAL ESTATE AND FINANCE
                </small>
              </div>
            </div>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.8, marginBottom: '1.2rem' }}>
              Building dreams in the Amaravathi Capital Region. Over 12 years of trusted
              real estate and finance services in Andhra Pradesh.
            </p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <a href="https://www.instagram.com/amaravati_7889" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={socialStyle}><FaInstagram /></a>
              <a href="https://www.linkedin.com/in/rayapudi-nagaraju-56" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={socialStyle}><FaLinkedinIn /></a>
              <a href="https://www.youtube.com/@nagarajuvlogs1668" target="_blank" rel="noopener noreferrer" aria-label="YouTube" style={socialStyle}><FaYoutube /></a>
            </div>
          </Col>

          {/* Quick Links */}
          <Col xs={6} md={3} lg={2}>
            <h5>Quick Links</h5>
            <ul>
              {QUICK_LINKS.map((link) => (
                <li key={link.href}><a href={link.href}>{link.label}</a></li>
              ))}
            </ul>
          </Col>

          {/* Locations */}
          <Col xs={6} md={3} lg={3}>
            <h5>Our Locations</h5>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 8px', fontSize: '0.85rem' }}>
              {LOCATIONS.map((loc, index) => (
                <span key={loc} style={{ display: 'flex', alignItems: 'center' }}>
                  <a href="#locations" style={{ color: 'rgba(255,255,255,0.6)', transition: 'var(--transition-base)' }}>{loc}</a>
                  {index < LOCATIONS.length - 1 && <span style={{ color: 'rgba(255,255,255,0.2)', marginLeft: 6 }}>|</span>}
                </span>
              ))}
            </div>
          </Col>

          {/* Contact Info */}
          <Col xs={12} md={6} lg={3}>
            <h5>Contact Info</h5>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 14 }}>
              <FiMapPin style={{ color: 'var(--color-gold)', marginTop: 3, flexShrink: 0 }} />
              <span style={{ fontSize: '0.88rem' }}>Rayapudi, Amaravathi,<br />522237, Andhra Pradesh</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <FiMail style={{ color: 'var(--color-gold)', flexShrink: 0 }} />
              <a href="mailto:rnagaraju144@gmail.com" style={{ color: 'var(--color-gold)', fontSize: '0.88rem', wordBreak: 'break-all' }}>
                rnagaraju144@gmail.com
              </a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <FiPhone style={{ color: 'var(--color-gold)', flexShrink: 0 }} />
              <a href="tel:+919959832087" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.88rem' }}>
                +91 99598 32087
              </a>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="footer-bottom">
        <Container>
          <p style={{ margin: 0 }}>
            © {new Date().getFullYear()} Kanaka Durga Real Estate Constructions. All Rights Reserved.
            <br />
            <small style={{ color: 'rgba(255,255,255,0.4)' }}>
              Founded by Rayapudi Nagaraju | Amaravathi Capital Region, Andhra Pradesh
            </small>
          </p>
        </Container>
      </div>
    </footer>
  )
}
