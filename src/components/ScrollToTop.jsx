import { useState, useEffect } from 'react'
import { FiArrowUp } from 'react-icons/fi'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      className={`scroll-top ${visible ? 'visible' : ''}`}
      onClick={scrollTop}
      aria-label="Scroll to top"
      id="scroll-top-btn"
    >
      <FiArrowUp />
    </button>
  )
}
