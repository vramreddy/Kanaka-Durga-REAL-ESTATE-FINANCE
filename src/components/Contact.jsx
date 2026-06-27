import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FiMapPin, FiMail, FiPhone, FiSend, FiCheckCircle, FiNavigation } from 'react-icons/fi'
import { FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { logLead } from '../utils/leadLogger'

const INITIAL_FORM = { name: '', email: '', phone: '', location: '', message: '', honeypot: '' }

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.email.trim()) {
      errs.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Invalid email format'
    }
    if (!form.phone.trim()) {
      errs.phone = 'Phone is required'
    } else if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\D/g, ''))) {
      errs.phone = 'Enter valid 10-digit Indian mobile number'
    }
    if (!form.message.trim()) errs.message = 'Message is required'
    return errs
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    const sanitized = value.replace(/<[^>]*>/g, '').replace(/javascript:/gi, '')
    setForm((prev) => ({ ...prev, [name]: sanitized }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (form.honeypot) return
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }

    setSubmitting(true)

    // Save lead to local database first
    logLead({
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      location: form.location.trim(),
      message: form.message.trim(),
      source: 'Contact Form'
    })

    const text = `*New Contact Enquiry - Kanaka Durga Real Estate & Finance*\n----------------------------------------\n*Name:* ${form.name.trim()}\n*Mobile:* ${form.phone.trim()}\n*Email:* ${form.email.trim() || 'Not provided'}\n*Location:* ${form.location.trim() || 'Not selected'}\n*Message:* ${form.message.trim() || 'None'}`
    window.open(`https://wa.me/919959832087?text=${encodeURIComponent(text)}`, '_blank')
    setSubmitted(true)
    setSubmitting(false)
    setForm(INITIAL_FORM)
  }

  return (
    <section className="section-padding bg-navy" id="contact">
      <Container>
        <div className="text-center mb-4 mb-lg-5">
          <span className="section-subtitle" data-aos="fade-up">Get In Touch</span>
          <h2 className="section-title" data-aos="fade-up" data-aos-delay="100" style={{ color: 'var(--color-white)' }}>
            Contact <span>Us</span>
          </h2>
          <p className="section-desc" data-aos="fade-up" data-aos-delay="200" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Ready to invest in Amaravathi&apos;s future? Reach out to us for
            property enquiries, site visits, or any questions.
          </p>
        </div>

        <Row className="g-4">
          <Col xs={12} lg={7} data-aos="fade-right">
            <div className="contact-form">
              <h4 style={{ color: 'var(--color-navy)', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)', fontWeight: '600' }}>
                📋 Quick Enquiry
              </h4>
              {submitted ? (
                <div className="text-center py-4">
                  <FiCheckCircle size={60} color="var(--color-success)" />
                  <h3 style={{ marginTop: '1rem', color: 'var(--color-navy)' }}>Thank You!</h3>
                  <p style={{ color: 'var(--color-dark-gray)' }}>
                    Your enquiry has been received. Our team will contact you within 24 hours.
                  </p>
                  <button className="btn-gold mt-3" onClick={() => setSubmitted(false)}>
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="honey-pot">
                    <input type="text" name="honeypot" value={form.honeypot} onChange={handleChange} tabIndex="-1" autoComplete="off" />
                  </div>
                  <Row className="g-3">
                    <Col xs={12} md={6}>
                      <label className="form-label" htmlFor="contact-name">Full Name *</label>
                      <input type="text" className={`form-control ${errors.name ? 'is-invalid' : ''}`} id="contact-name" name="name" value={form.name} onChange={handleChange} placeholder="Enter your full name" maxLength={100} />
                      {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                    </Col>
                    <Col xs={12} md={6}>
                      <label className="form-label" htmlFor="contact-email">Email Address (Optional)</label>
                      <input type="email" className={`form-control ${errors.email ? 'is-invalid' : ''}`} id="contact-email" name="email" value={form.email} onChange={handleChange} placeholder="Enter your email (optional)" maxLength={150} />
                      {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    </Col>
                    <Col xs={12} md={6}>
                      <label className="form-label" htmlFor="contact-phone">Phone Number *</label>
                      <input type="tel" className={`form-control ${errors.phone ? 'is-invalid' : ''}`} id="contact-phone" name="phone" value={form.phone} onChange={handleChange} placeholder="10-digit mobile number" maxLength={10} />
                      {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                    </Col>
                    <Col xs={12} md={6}>
                      <label className="form-label" htmlFor="contact-location">Interested Location</label>
                      <select className="form-select" id="contact-location" name="location" value={form.location} onChange={handleChange}>
                        <option value="">Select a location</option>
                        <option value="Thullur">Thullur</option>
                        <option value="Rayapudi">Rayapudi</option>
                        <option value="Mandadam">Mandadam</option>
                        <option value="Tadepalli">Tadepalli</option>
                        <option value="Velagapudi">Velagapudi</option>
                        <option value="Undavalli">Undavalli</option>
                        <option value="Nelapadu">Nelapadu</option>
                        <option value="Others">Others</option>
                      </select>
                    </Col>
                    <Col xs={12}>
                      <label className="form-label" htmlFor="contact-message">Message *</label>
                      <textarea className={`form-control ${errors.message ? 'is-invalid' : ''}`} id="contact-message" name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your requirements..." rows={4} maxLength={1000} />
                      {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                    </Col>
                    <Col xs={12}>
                      <button type="submit" className="btn-gold w-100 justify-content-center" disabled={submitting} id="contact-submit-btn">
                        {submitting ? 'Sending...' : <><FiSend style={{ marginRight: 6 }} /> Send Enquiry</>}
                      </button>
                    </Col>
                  </Row>
                </form>
              )}
            </div>
          </Col>

          <Col xs={12} lg={5} data-aos="fade-left">
            <div className="contact-info-card">
              <h4 style={{ color: 'var(--color-gold)', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>
                Contact Information
              </h4>
              <div className="contact-info-item">
                <div className="icon"><FiMapPin /></div>
                <div>
                  <h5>Office Address</h5>
                  <p>Rayapudi, Amaravathi,<br />522237, Andhra Pradesh, India</p>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="icon"><FiMail /></div>
                <div>
                  <h5>Email Us</h5>
                  <p><a href="mailto:rnagaraju144@gmail.com">rnagaraju144@gmail.com</a></p>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="icon"><FiPhone /></div>
                <div>
                  <h5>Call Us</h5>
                  <p><a href="tel:+919959832087">+91 99598 32087</a></p>
                  <small style={{ color: 'rgba(255,255,255,0.4)' }}>Mon - Sat, 9:00 AM - 8:00 PM</small>
                </div>
              </div>
              <div className="social-links">
                <a href="https://www.instagram.com/amaravati_7889" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
                <a href="https://www.linkedin.com/in/rayapudi-nagaraju-56" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
                <a href="https://www.youtube.com/@nagarajuvlogs1668" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube /></a>
              </div>
              <div className="map-container mt-4">
                <iframe
                  title="Kanaka Durga Real Estate Office"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.5!2d80.481391!3d16.546527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDMyJzQ3LjUiTiA4MMKwMjgnNTMuMCJF!5e0!3m2!1sen!2sin!4v1700000000000"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ height: 200 }}
                />
                <div className="map-directions-bar">
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=16.546527,80.481391"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold"
                    style={{ padding: '10px 20px', fontSize: '0.9rem' }}
                  >
                    <FiNavigation /> Get Direction to Office
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
