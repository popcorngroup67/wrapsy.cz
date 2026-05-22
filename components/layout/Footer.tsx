import Image from 'next/image'
import { SOCIAL } from '@/lib/constants'

export default function Footer() {
  return (
    <footer
      className="py-12 px-6"
      style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <Image
          src="/SVG/full-logo.svg"
          alt="WRAPSY"
          width={120}
          height={26}
        />

        <a
          href={SOCIAL.instagram}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: '11px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(244,237,228,0.4)',
            textDecoration: 'none',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#ec7723')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(244,237,228,0.4)')}
        >
          {SOCIAL.instagramHandle}
        </a>

        <span style={{ fontSize: '11px', color: 'rgba(244,237,228,0.2)', letterSpacing: '0.1em' }}>
          © {new Date().getFullYear()} WRAPSY
        </span>
      </div>
    </footer>
  )
}
