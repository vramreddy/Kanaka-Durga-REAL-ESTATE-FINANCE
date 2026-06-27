import { useState, useEffect } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#amaravathi', label: 'Amaravathi' },
  { href: '#locations', label: 'Locations' },
  { href: '#properties', label: 'Properties' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
]

export default function NavbarComponent({ onEnquiry }) {
  const [scrolled, setScrolled] = useState(false)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = () => setExpanded(false)

  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      onToggle={setExpanded}
      className={`navbar-custom ${scrolled ? 'scrolled' : ''}`}
      style={{ background: scrolled ? undefined : 'transparent' }}
      id="main-navbar"
    >
      {/* FIX: fluid={false} keeps proper padding; use Container with no extra classes */}
      <Container>
        <Navbar.Brand href="#home" id="brand-logo" onClick={handleNavClick}>
          <img
            src="/logo.png"
            alt="Kanaka Durga Logo"
            className="brand-logo-img"
          />
          <div className="brand-text">
            Kanaka Durga
            <small>REAL ESTATE &amp; FINANCE</small>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-nav" />

        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto align-items-lg-center">
            {NAV_LINKS.map((link) => (
              <Nav.Link
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                id={`nav-${link.label.toLowerCase().replace(/\s/g, '-')}`}
              >
                {link.label}
              </Nav.Link>
            ))}
            <button
              className="btn-gold ms-lg-3 mt-2 mt-lg-0"
              onClick={() => { onEnquiry(); handleNavClick() }}
              id="nav-enquiry-btn"
            >
              Enquire Now
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
