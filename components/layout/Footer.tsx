import Image from 'next/image'
import Link from 'next/link'
import { COMPANY, PRIVACY_PATH, SOCIAL } from '@/lib/constants'
import { CookieSettingsButton } from '@/components/consent/CookieConsent'

const smallLink: React.CSSProperties = {
  fontSize: '11px',
  letterSpacing: '0.1em',
  color: 'rgba(244,237,228,0.4)',
  textDecoration: 'none',
  background: 'none',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
  fontFamily: 'inherit',
}

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

      <div className="max-w-6xl mx-auto mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
        <Link href={PRIVACY_PATH} className="hover:underline" style={smallLink}>
          Ochrana osobních údajů
        </Link>
        <CookieSettingsButton className="hover:underline" style={smallLink} />
      </div>

      {/* pb-20: aby patičku nezakrývalo plovoucí „Objednat online“ vpravo dole */}
      <p
        className="max-w-6xl mx-auto mt-3 pb-20 text-center"
        style={{ fontSize: '11px', lineHeight: 1.6, color: 'rgba(244,237,228,0.4)' }}
      >
        Provozovatel: {COMPANY.name}, IČO {COMPANY.ico}, {COMPANY.seat}.
        <br className="hidden md:inline" /> Zapsaná v obchodním rejstříku, sp. zn. {COMPANY.register}.
      </p>
    </footer>
  )
}
