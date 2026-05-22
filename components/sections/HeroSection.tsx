import { RESTIA_URL } from '@/lib/constants'

type Props = {
  // ref passed down from HomePage so StickyOrderButton can watch visibility
  ctaRef: React.RefObject<HTMLAnchorElement | null>
}

export default function HeroSection({ ctaRef }: Props) {
  return (
    <section
      id="top"
      className="relative flex items-center justify-center min-h-screen text-center px-6"
    >
      {/* Orange ambient glow — reuses pulse keyframe from globals.css */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(236,119,35,0.12) 0%, transparent 70%)',
          animation: 'pulse 7s ease-in-out infinite',
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Location badge */}
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

        {/* Main headline */}
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 900,
            fontSize: 'clamp(64px, 12vw, 160px)',
            lineHeight: 0.88,
            letterSpacing: '-0.01em',
            textTransform: 'uppercase',
            color: '#f4ede4',
          }}
        >
          Packed<br />
          <span style={{ color: '#ec7723' }}>with Flavor.</span>
        </h1>

        {/* Subline */}
        <p
          style={{
            fontSize: 'clamp(13px, 1.8vw, 16px)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'rgba(244,237,228,0.45)',
            maxWidth: '480px',
          }}
        >
          Wrapy, bowls, fries a wings — rychle, výrazně, bez kompromisů.
        </p>

        {/* Primary CTA — watched by IntersectionObserver in StickyOrderButton */}
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
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 flex flex-col items-center gap-2"
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
