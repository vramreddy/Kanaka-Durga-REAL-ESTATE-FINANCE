import { useState, useEffect } from 'react'
import { Modal, Table, Button, Form, Badge, Row, Col, InputGroup } from 'react-bootstrap'
import { FiTrash2, FiDownload, FiSearch, FiDatabase, FiX } from 'react-icons/fi'
import { getLeads, deleteLead, clearLeads, exportLeadsToCSV } from '../utils/leadLogger'

export default function LeadsDashboard({ show, onHide }) {
  const [leads, setLeads] = useState([])
  const [search, setSearch] = useState('')
  const [filterSource, setFilterSource] = useState('')
  const [filterLocation, setFilterLocation] = useState('')

  // Reload leads when dashboard opens
  useEffect(() => {
    if (show) {
      setLeads(getLeads())
    }
  }, [show])

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this lead?')) {
      deleteLead(id)
      setLeads(getLeads())
    }
  }

  const handleClearAll = () => {
    if (window.confirm('WARNING: Are you sure you want to permanently clear ALL captured leads? This cannot be undone.')) {
      clearLeads()
      setLeads([])
    }
  }

  // Formatting date to Indian locale time
  const formatTime = (isoString) => {
    try {
      return new Date(isoString).toLocaleString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      })
    } catch {
      return isoString
    }
  }

  // Filter leads based on query options
  const filteredLeads = leads.filter(lead => {
    const matchesSearch = 
      lead.name.toLowerCase().includes(search.toLowerCase()) ||
      lead.phone.includes(search) ||
      (lead.email && lead.email.toLowerCase().includes(search.toLowerCase())) ||
      (lead.message && lead.message.toLowerCase().includes(search.toLowerCase()))

    const matchesSource = filterSource ? lead.source === filterSource : true
    const matchesLocation = filterLocation ? lead.location === filterLocation : true

    return matchesSearch && matchesSource && matchesLocation
  })

  // Extract unique locations from captured leads for filter options
  const locations = Array.from(new Set(leads.map(l => l.location).filter(Boolean)))

  return (
    <Modal show={show} onHide={onHide} size="xl" centered scrollable className="leads-dashboard-modal" id="leads-dashboard-modal">
      <Modal.Header style={{ background: 'var(--color-navy)', color: 'var(--color-white)', borderBottom: '1px solid rgba(201,168,76,0.2)' }}>
        <Modal.Title style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'var(--font-heading)' }}>
          <FiDatabase style={{ color: 'var(--color-gold)' }} />
          <span>Leads Manager Database</span>
          <Badge bg="warning" text="dark" style={{ fontSize: '0.8rem', padding: '4px 8px', borderRadius: '4px' }}>
            {filteredLeads.length} Lead{filteredLeads.length !== 1 ? 's' : ''}
          </Badge>
        </Modal.Title>
        <button onClick={onHide} style={{ background: 'none', border: 'none', color: 'var(--color-white)', fontSize: '1.5rem', lineHeight: 1 }} aria-label="Close">
          <FiX />
        </button>
      </Modal.Header>
      
      <Modal.Body style={{ background: 'var(--color-offwhite)', padding: '20px' }}>
        {/* Filter Controls */}
        <div className="filter-bar mb-4 p-3" style={{ background: 'var(--color-white)', borderRadius: '8px', boxShadow: 'var(--shadow-subtle)' }}>
          <Row className="g-3">
            <Col xs={12} md={5}>
              <Form.Label style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--color-navy)' }}>Search leads</Form.Label>
              <InputGroup>
                <InputGroup.Text style={{ background: 'var(--color-offwhite)', border: '1px solid #ced4da' }}>
                  <FiSearch />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Search by name, phone, email or query..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  style={{ borderLeft: 'none' }}
                />
              </InputGroup>
            </Col>
            
            <Col xs={6} md={3}>
              <Form.Label style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--color-navy)' }}>Source</Form.Label>
              <Form.Select value={filterSource} onChange={(e) => setFilterSource(e.target.value)}>
                <option value="">All Sources</option>
                <option value="Contact Form">Contact Form</option>
                <option value="Enquiry Modal">Enquiry Modal</option>
              </Form.Select>
            </Col>

            <Col xs={6} md={4}>
              <Form.Label style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--color-navy)' }}>Location</Form.Label>
              <Form.Select value={filterLocation} onChange={(e) => setFilterLocation(e.target.value)}>
                <option value="">All Locations</option>
                {locations.map(loc => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </Form.Select>
            </Col>
          </Row>
        </div>

        {/* Action Buttons */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="d-flex gap-2">
            <Button 
              className="btn-gold" 
              onClick={exportLeadsToCSV} 
              disabled={filteredLeads.length === 0}
              style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', fontSize: '0.9rem' }}
            >
              <FiDownload /> Export to Excel / CSV
            </Button>
          </div>
          {leads.length > 0 && (
            <Button 
              variant="outline-danger" 
              onClick={handleClearAll}
              style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 16px', fontSize: '0.9rem' }}
            >
              <FiTrash2 /> Clear Database
            </Button>
          )}
        </div>

        {/* Database Table */}
        {filteredLeads.length === 0 ? (
          <div className="text-center py-5" style={{ background: 'var(--color-white)', borderRadius: '8px', border: '1px dashed #dee2e6' }}>
            <FiDatabase size={48} style={{ color: '#adb5bd', marginBottom: '15px' }} />
            <h5 style={{ color: 'var(--color-navy)' }}>No Leads Found</h5>
            <p style={{ color: 'var(--color-dark-gray)' }} className="mb-0">
              {leads.length === 0 
                ? 'Submissions through enquiry and contact forms will be listed here.'
                : 'Try adjusting your search query or filter options.'}
            </p>
          </div>
        ) : (
          <div className="table-responsive" style={{ background: 'var(--color-white)', borderRadius: '8px', boxShadow: 'var(--shadow-subtle)', border: '1px solid #dee2e6' }}>
            <Table hover responsive style={{ margin: 0, verticalAlign: 'middle', fontSize: '0.9rem' }}>
              <thead style={{ background: 'var(--color-navy)', color: 'var(--color-white)' }}>
                <tr>
                  <th style={{ padding: '12px 16px', border: 'none', background: 'var(--color-navy)' }}>Date / Time</th>
                  <th style={{ padding: '12px 16px', border: 'none', background: 'var(--color-navy)' }}>Client Details</th>
                  <th style={{ padding: '12px 16px', border: 'none', background: 'var(--color-navy)' }}>Interest</th>
                  <th style={{ padding: '12px 16px', border: 'none', background: 'var(--color-navy)' }}>Message</th>
                  <th style={{ padding: '12px 16px', border: 'none', background: 'var(--color-navy)', textAlign: 'center' }}>Source</th>
                  <th style={{ padding: '12px 16px', border: 'none', background: 'var(--color-navy)', textAlign: 'center' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredLeads.map((lead) => (
                  <tr key={lead.id} style={{ borderBottom: '1px solid #e9ecef' }}>
                    <td style={{ padding: '16px', color: 'var(--color-navy)', fontWeight: 500, minWidth: '120px' }}>
                      {formatTime(lead.timestamp)}
                    </td>
                    <td style={{ padding: '16px' }}>
                      <div style={{ fontWeight: 600, color: 'var(--color-navy)' }}>{lead.name}</div>
                      <div style={{ fontSize: '0.85rem' }}>
                        <a href={`tel:${lead.phone}`} style={{ color: 'var(--color-gold)', textDecoration: 'none', fontWeight: 500 }}>{lead.phone}</a>
                      </div>
                      {lead.email && (
                        <div style={{ fontSize: '0.8rem', color: 'var(--color-dark-gray)' }}>
                          <a href={`mailto:${lead.email}`} style={{ color: 'inherit', textDecoration: 'none' }}>{lead.email}</a>
                        </div>
                      )}
                    </td>
                    <td style={{ padding: '16px' }}>
                      {lead.location ? (
                        <Badge bg="dark" style={{ border: '1px solid var(--color-gold)', color: 'var(--color-gold)', fontWeight: 500, padding: '5px 8px' }}>
                          {lead.location}
                        </Badge>
                      ) : (
                        <span style={{ color: '#adb5bd', fontStyle: 'italic' }}>Not specified</span>
                      )}
                    </td>
                    <td style={{ padding: '16px', minWidth: '220px', maxWidth: '350px', whiteSpace: 'normal', wordBreak: 'break-word', color: 'var(--color-dark-gray)' }}>
                      {lead.message}
                    </td>
                    <td style={{ padding: '16px', textAlign: 'center' }}>
                      <Badge bg={lead.source === 'Contact Form' ? 'secondary' : 'info'} style={{ padding: '5px 8px', fontWeight: 500 }}>
                        {lead.source}
                      </Badge>
                    </td>
                    <td style={{ padding: '16px', textAlign: 'center' }}>
                      <Button
                        variant="link"
                        onClick={() => handleDelete(lead.id)}
                        style={{ color: '#dc3545', padding: 0 }}
                        title="Delete lead"
                      >
                        <FiTrash2 size={18} />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        )}
      </Modal.Body>
    </Modal>
  )
}
