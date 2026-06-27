const LEADS_KEY = 'kd_leads'

export function getLeads() {
  try {
    const data = localStorage.getItem(LEADS_KEY)
    return data ? JSON.parse(data) : []
  } catch (e) {
    console.error('Error reading leads from localStorage', e)
    return []
  }
}

export function logLead(lead) {
  try {
    const leads = getLeads()
    const newLead = {
      id: Math.random().toString(36).substr(2, 9) + '-' + Date.now(),
      timestamp: new Date().toISOString(),
      ...lead
    }
    leads.unshift(newLead) // Newest first
    localStorage.setItem(LEADS_KEY, JSON.stringify(leads))
    return newLead
  } catch (e) {
    console.error('Error saving lead to localStorage', e)
    return null
  }
}

export function clearLeads() {
  try {
    localStorage.removeItem(LEADS_KEY)
    return true
  } catch (e) {
    console.error('Error clearing leads', e)
    return false
  }
}

export function deleteLead(id) {
  try {
    const leads = getLeads()
    const filtered = leads.filter(l => l.id !== id)
    localStorage.setItem(LEADS_KEY, JSON.stringify(filtered))
    return true
  } catch (e) {
    console.error('Error deleting lead', e)
    return false
  }
}

export function exportLeadsToCSV() {
  const leads = getLeads()
  if (leads.length === 0) {
    alert('No leads available to export!')
    return
  }

  // Define headers
  const headers = ['ID', 'Date/Time (IST)', 'Name', 'Phone', 'Email', 'Location', 'Message', 'Source']
  
  // Format IST time helper
  const formatTime = (isoString) => {
    try {
      return new Date(isoString).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
    } catch {
      return isoString
    }
  }

  // Escape value helper to ensure clean CSV import (double quote escaping)
  const escapeValue = (val) => {
    if (val === undefined || val === null) return ''
    const str = String(val).trim()
    if (str.includes(',') || str.includes('"') || str.includes('\n') || str.includes('\r')) {
      return `"${str.replace(/"/g, '""')}"`
    }
    return str
  }

  // Create rows
  const csvRows = [
    headers.join(','),
    ...leads.map(lead => [
      lead.id,
      formatTime(lead.timestamp),
      escapeValue(lead.name),
      escapeValue(lead.phone),
      escapeValue(lead.email || 'N/A'),
      escapeValue(lead.location || 'N/A'),
      escapeValue(lead.message || 'N/A'),
      escapeValue(lead.source)
    ].join(','))
  ]

  const csvString = csvRows.join('\n')
  const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  
  // Create download link element
  const link = document.createElement('a')
  link.setAttribute('href', url)
  link.setAttribute('download', `kanaka_durga_leads_${new Date().toISOString().slice(0,10)}.csv`)
  link.style.visibility = 'hidden'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
