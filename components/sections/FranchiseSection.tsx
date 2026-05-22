// Franchise call-to-action section.
// Two-column layout: left = bold statement, right = description + CTA.
// No photo needed — uses a subtle orange gradient block on the left.
export default function FranchiseSection() {
  return (
    <section className="px-6 py-24">
      <div
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-0 overflow-hidden"
        style={{ border: '1px solid rgba(255,255,255,0.08)' }}
      >
        {/* Left — visual block */}
        <div
          className="relative flex flex-col justify-end p-12 min-h-72"
          style={{
            background: 'linear-gradient(135deg, #1a0f00 0%, #2d1a00 50%, #0a0a0a 100%)',
          }}
        >
          {/* Ambient glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at 30% 60%, rgba(236,119,35,0.18) 0%, transparent 65%)',
            }}
          />

          <div className="relative z-10">
            <span
              style={{
                fontSize: '11px',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: '#ec7723',
              }}
            >
              Franchise
            </span>

            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 900,
                fontSize: 'clamp(40px, 6vw, 72px)',
                lineHeight: 0.9,
                letterSpacing: '-0.01em',
                textTransform: 'uppercase',
                color: '#f4ede4',
                marginTop: '16px',
              }}
            >
              Přidej se<br />
              <span style={{ color: '#ec7723' }}>k nám.</span>
            </h2>
          </div>
        </div>

        {/* Right — description + CTA */}
        <div
          className="flex flex-col justify-center p-12"
          style={{ background: 'rgba(255,255,255,0.02)', borderLeft: '1px solid rgba(255,255,255,0.08)' }}
        >
          <p
            style={{
              fontSize: 'clamp(14px, 1.6vw, 17px)',
              lineHeight: 1.7,
              color: 'rgba(244,237,228,0.6)',
              maxWidth: '420px',
              marginBottom: '36px',
            }}
          >
            Staň se součástí rostoucí sítě WRAPSY. Otevři si vlastní pobočku
            pod silnou značkou — s kompletní podporou, prověřeným konceptem
            a recepturami, které fungují.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <a
              href="mailto:franchise@wrapsy.cz"
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 900,
                fontSize: '13px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                padding: '14px 32px',
                background: '#ec7723',
                color: '#0a0a0a',
                textDecoration: 'none',
                transition: 'background 0.2s',
                display: 'inline-block',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#f08a35')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#ec7723')}
            >
              Mám zájem
            </a>

            <span
              style={{
                fontSize: '12px',
                letterSpacing: '0.1em',
                color: 'rgba(244,237,228,0.25)',
              }}
            >
              franchise@wrapsy.cz
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
