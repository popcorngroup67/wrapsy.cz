'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { RESTIA_URL } from '@/lib/constants'

const NAV_LINKS = [
  { label: 'Menu',           href: '#menu'    },
  { label: 'O nás',          href: '#o-nas'   },
  { label: 'Kde nás najdeš', href: '#lokace'  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo — links back to top */}
        <a href="#top">
          <Image
            src="/SVG/full-logo.svg"
            alt="WRAPSY"
            width={140}
            height={30}
            priority
          />
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontSize: '11px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(244,237,228,0.6)',
                textDecoration: 'none',
                transition: 'color 0.2s',
                fontWeight: 400,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#f4ede4')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(244,237,228,0.6)')}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href={RESTIA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block"
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 900,
            fontSize: '12px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            padding: '10px 20px',
            background: '#ec7723',
            color: '#0a0a0a',
            textDecoration: 'none',
            transition: 'background 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = '#f08a35')}
          onMouseLeave={(e) => (e.currentTarget.style.background = '#ec7723')}
        >
          Objednat
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Otevřít menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-6 h-px"
              style={{ background: '#f4ede4' }}
            />
          ))}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div
          className="md:hidden flex flex-col px-6 pb-6 gap-4"
          style={{ background: 'rgba(10,10,10,0.98)' }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                fontSize: '13px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(244,237,228,0.7)',
                textDecoration: 'none',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={RESTIA_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 900,
              fontSize: '13px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              padding: '12px 24px',
              background: '#ec7723',
              color: '#0a0a0a',
              textDecoration: 'none',
              textAlign: 'center',
            }}
          >
            Objednat online
          </a>
        </div>
      )}
    </nav>
  )
}
