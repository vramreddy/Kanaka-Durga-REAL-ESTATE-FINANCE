import { useEffect, useState } from 'react'

export default function Preloader({ onComplete }) {
  const [loading, setLoading] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    // FIX: prevent scrolling while preloader is active, but don't shift layout
    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'

    const timer = setTimeout(() => {
      setFadeOut(true)
      const removeTimer = setTimeout(() => {
        setLoading(false)
        document.documentElement.style.overflow = ''
        document.body.style.overflow = ''
        if (onComplete) onComplete()
      }, 600)
      return () => clearTimeout(removeTimer)
    }, 2200)

    return () => {
      clearTimeout(timer)
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
    }
  }, [onComplete])

  if (!loading) return null

  return (
    <div className={`preloader-overlay ${fadeOut ? 'fade-out' : ''}`}>
      <div className="preloader-content">
        <div className="logo-container">
          <img src="/logo.png" alt="Kanaka Durga Logo" className="preloader-logo" />
          <div className="preloader-spinner"></div>
        </div>
        <div className="brand-title">
          Kanaka Durga
          <span className="brand-subtitle">REAL ESTATE AND FINANCE</span>
        </div>
        <div className="preloader-progress-bar">
          <div className="preloader-progress"></div>
        </div>
      </div>
    </div>
  )
}
