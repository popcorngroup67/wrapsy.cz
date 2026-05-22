'use client'

import { useEffect, useState } from 'react'
import { RESTIA_URL } from '@/lib/constants'

type Props = {
  // ref to the Hero CTA — button hides when that CTA is visible on screen
  heroCTARef: React.RefObject<HTMLAnchorElement | null>
}

export default function StickyOrderButton({ heroCTARef }: Props) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!heroCTARef.current) return

    // Show sticky button only when hero CTA has scrolled out of view
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    )

    observer.observe(heroCTARef.current)
    return () => observer.disconnect()
  }, [heroCTARef])

  return (
    <a
      href={RESTIA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 transition-all duration-300"
      style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 900,
        fontSize: '13px',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        padding: '14px 28px',
        background: '#ec7723',
        color: '#0a0a0a',
        textDecoration: 'none',
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        transform: visible ? 'translateY(0)' : 'translateY(16px)',
        boxShadow: '0 4px 24px rgba(236,119,35,0.3)',
      }}
    >
      Objednat online
    </a>
  )
}
