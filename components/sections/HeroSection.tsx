import Image from 'next/image'
import { RESTIA_URL } from '@/lib/constants'

type Props = {
  // ref passed down from HomePage so StickyOrderButton can watch visibility
  ctaRef: React.RefObject<HTMLAnchorElement | null>
}

export default function HeroSection({ ctaRef }: Props) {
  return (
    <section
      id="top"
      className="relative flex items-center min-h-screen overflow-hidden px-6"
    >
      {/* Orange ambient glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: '20%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'min(700px, 100vw)',
          height: 'min(700px, 100vw)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(236,119,35,0.12) 0%, transparent 70%)',
          animation: 'pulse 7s ease-in-out infinite',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center py-32 md:py-0">
        {/* Left — text */}
        <div className="flex flex-col gap-8 text-center md:text-left items-center md:items-start">
          <span
            style={{
              fontSize: '11px',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'rgba(244,237,228,0.35)',
            }}
          >
            Lovosice — Street Food
          </span>

          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 900,
              fontSize: 'clamp(64px, 10vw, 140px)',
              lineHeight: 0.88,
              letterSpacing: '-0.01em',
              textTransform: 'uppercase',
              color: '#f4ede4',
            }}
          >
            Packed<br />
            <span style={{ color: '#ec7723' }}>with Flavor.</span>
          </h1>

          <p
            style={{
              fontSize: 'clamp(13px, 1.5vw, 15px)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(244,237,228,0.45)',
              maxWidth: '400px',
              lineHeight: 1.8,
            }}
          >
            Wrapy, pizza 40 cm, bowls a kebab — rychle a výrazně, přímo v Lovosicích.
          </p>

          <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start">
            <a
              ref={ctaRef}
              href={RESTIA_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 900,
                fontSize: '14px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                padding: '16px 40px',
                background: '#ec7723',
                color: '#0a0a0a',
                textDecoration: 'none',
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#f08a35')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#ec7723')}
            >
              Objednat online
            </a>
            <a
              href="#menu"
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 900,
                fontSize: '13px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                padding: '16px 32px',
                border: '1px solid rgba(244,237,228,0.2)',
                color: 'rgba(244,237,228,0.6)',
                textDecoration: 'none',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#ec7723'; e.currentTarget.style.color = '#ec7723' }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(244,237,228,0.2)'; e.currentTarget.style.color = 'rgba(244,237,228,0.6)' }}
            >
              Zobrazit menu
            </a>
          </div>
        </div>

        {/* Right — food photo */}
        <div className="hidden md:flex items-center justify-center">
          <div
            className="relative"
            style={{
              width: '460px',
              height: '460px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '1px solid rgba(236,119,35,0.2)',
              boxShadow: '0 0 80px rgba(236,119,35,0.15)',
            }}
          >
            <Image
              src="/food/beef-mango.jpg"
              alt="Beef Mango wrap"
              fill
              className="object-cover"
              priority
              sizes="460px"
            />
            {/* Vignette overlay */}
            <div
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(circle at center, transparent 50%, rgba(10,10,10,0.5) 100%)',
              }}
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ opacity: 0.3 }}
      >
        <span style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
          Scroll
        </span>
        <div style={{ width: '1px', height: '40px', background: '#ec7723' }} />
      </div>
    </section>
  )
}
