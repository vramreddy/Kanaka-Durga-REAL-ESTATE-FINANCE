import { useState } from 'react'
import { Modal, Row, Col } from 'react-bootstrap'
import { FiSend, FiCheckCircle } from 'react-icons/fi'
import { logLead } from '../utils/leadLogger'

const INITIAL = { name: '', email: '', phone: '', location: '', message: '', honeypot: '' }

export default function EnquiryModal({ show, onHide }) {
  const [form, setForm] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Required'
    if (!form.phone.trim()) errs.phone = 'Required'
    else {
      const cleaned = form.phone.replace(/\D/g, '')
      // Match 10-digit number starting with 6-9, optionally prefixed by 91
      const match = cleaned.match(/^(?:91)?([6-9]\d{9})$/)
      if (!match) errs.phone = 'Invalid number'
    }
    return errs
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    const sanitized = value.replace(/<[^>]*>/g, '')
    setForm((p) => ({ ...p, [name]: sanitized }))
    if (errors[name]) setErrors((p) => ({ ...p, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (form.honeypot) return
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setSubmitting(true)

    // Save lead to local database first
    logLead({
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      location: form.location.trim(),
      message: form.message.trim(),
      source: 'Enquiry Modal'
    })

    // Format the enquiry details for WhatsApp
    const name = form.name.trim()
    const phone = form.phone.trim()
    const email = form.email.trim() || 'Not provided'
    const location = form.location.trim() || 'Not selected'
    const messageText = form.message.trim() || 'None'

    const text = `*New Enquiry - Kanaka Durga Real Estate & Finance*
----------------------------------------
*Name:* ${name}
*Mobile:* ${phone}
*Email:* ${email}
*Location:* ${location}
*Message:* ${messageText}`

    const whatsappUrl = `https://wa.me/919959832087?text=${encodeURIComponent(text)}`
    
    // Redirect to WhatsApp in a new tab
    window.open(whatsappUrl, '_blank')

    setSubmitted(true)
    setSubmitting(false)
  }

  const handleClose = () => {
    setForm(INITIAL)
    setErrors({})
    setSubmitted(false)
    onHide()
  }

  return (
    <Modal show={show} onHide={handleClose} centered size="md" className="enquiry-modal" id="enquiry-modal">
      <Modal.Header closeButton>
        <Modal.Title>
          {submitted ? '🎉 Enquiry Sent!' : '📋 Quick Enquiry'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {submitted ? (
          <div className="text-center py-4">
            <FiCheckCircle size={56} color="var(--color-success)" />
            <h4 style={{ marginTop: '1rem' }}>Thank You!</h4>
            <p style={{ color: 'var(--color-dark-gray)' }}>
              We've received your enquiry. Our team will reach out to you shortly.
            </p>
            <button className="btn-gold" onClick={handleClose}>Close</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div className="honey-pot">
              <input type="text" name="honeypot" value={form.honeypot} onChange={handleChange} tabIndex="-1" autoComplete="off" />
            </div>
            <Row className="g-3">
              <Col xs={12}>
                <input
                  type="text" name="name" value={form.name} onChange={handleChange}
                  className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                  placeholder="Full Name *" maxLength={100} id="enquiry-name"
                />
                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
              </Col>
              <Col md={6}>
                <input
                  type="tel" name="phone" value={form.phone} onChange={handleChange}
                  className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                  placeholder="Mobile Number *" maxLength={10} id="enquiry-phone"
                />
                {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
              </Col>
              <Col md={6}>
                <input
                  type="email" name="email" value={form.email} onChange={handleChange}
                  className="form-control" placeholder="Email (optional)" maxLength={150} id="enquiry-email"
                />
              </Col>
              <Col xs={12}>
                <select name="location" value={form.location} onChange={handleChange} className="form-select" id="enquiry-location">
                  <option value="">Interested Location</option>
                  <option>Thullur</option>
                  <option>Rayapudi</option>
                  <option>Mandadam</option>
                  <option>Tadepalli</option>
                  <option>Velagapudi</option>
                  <option>Undavalli</option>
                  <option>Nelapadu</option>
                </select>
              </Col>
              <Col xs={12}>
                <textarea
                  name="message" value={form.message} onChange={handleChange}
                  className="form-control" placeholder="Your message (optional)" rows={3} maxLength={500} id="enquiry-message"
                />
              </Col>
              <Col xs={12}>
                <button type="submit" className="btn-gold w-100" disabled={submitting} id="enquiry-submit-btn">
                  {submitting ? 'Submitting...' : <>Submit Enquiry <FiSend /></>}
                </button>
              </Col>
            </Row>
          </form>
        )}
      </Modal.Body>
    </Modal>
  )
}
