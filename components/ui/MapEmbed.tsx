'use client'

import { useState } from 'react'
import { ADDRESS } from '@/lib/constants'

// Google Maps se načte až po kliknutí — do té doby žádný request na google.com
// (iframe nastavuje cookies třetí strany, což by bez souhlasu nešlo).
const MAP_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.5!2d14.0516!3d50.5138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47098f3f20000001%3A0x1!2z2J8uIG3DoWphIDI1LCBMb3Zvc2ljZQ!5e0!3m2!1scs!2scz!4v1'

export default function MapEmbed() {
  const [loaded, setLoaded] = useState(false)

  if (loaded) {
    return (
      <iframe
        src={MAP_SRC}
        width="100%"
        height="100%"
        style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        title="WRAPSY Lovosice"
      />
    )
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4 px-6 text-center">
      <button
        type="button"
        onClick={() => setLoaded(true)}
        className="cursor-pointer px-5 py-3 text-[12px] uppercase tracking-[0.12em] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f4ede4]"
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 900,
          background: '#ec7723',
          color: '#0a0a0a',
          border: '1px solid #ec7723',
        }}
      >
        Zobrazit mapu
      </button>
      <p style={{ fontSize: '12px', lineHeight: 1.5, color: 'rgba(244,237,228,0.5)', maxWidth: '34ch' }}>
        Mapa se načte z Google Maps, který při tom může uložit cookies.{' '}
        <a
          href={ADDRESS.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
          style={{ color: 'rgba(244,237,228,0.75)' }}
        >
          Otevřít v Mapách
        </a>
      </p>
    </div>
  )
}
