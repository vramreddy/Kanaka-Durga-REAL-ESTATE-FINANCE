import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    'Hi, I am interested in Kanaka Durga Real Estate properties in Amaravathi. Please share more details.'
  )
  const phone = '919959832087' // Replace with actual WhatsApp number

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
      id="whatsapp-btn"
    >
      <FaWhatsapp />
    </a>
  )
}
