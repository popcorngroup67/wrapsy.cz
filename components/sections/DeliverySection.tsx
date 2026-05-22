// Strip showing delivery platforms where WRAPSY is available.
// Logos rendered as inline SVG text — no external deps, no broken img tags.
const PLATFORMS = [
  {
    name: 'Wolt',
    href: 'https://wolt.com',
    color: '#009DE0',
    logo: (
      <svg viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '22px', width: 'auto' }}>
        <text x="0" y="19" fontFamily="'Outfit', sans-serif" fontWeight="700" fontSize="22" fill="#009DE0">Wolt</text>
      </svg>
    ),
  },
  {
    name: 'foodora',
    href: 'https://www.foodora.cz',
    color: '#D70F64',
    logo: (
      <svg viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '22px', width: 'auto' }}>
        <text x="0" y="19" fontFamily="'Outfit', sans-serif" fontWeight="700" fontSize="22" fill="#D70F64">foodora</text>
      </svg>
    ),
  },
  {
    name: 'Bolt Food',
    href: 'https://food.bolt.eu',
    color: '#34D186',
    logo: (
      <svg viewBox="0 0 140 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '22px', width: 'auto' }}>
        <text x="0" y="19" fontFamily="'Outfit', sans-serif" fontWeight="700" fontSize="22" fill="#34D186">Bolt Food</text>
      </svg>
    ),
  },
  {
    name: 'Jídlopodnos',
    href: 'https://www.jidlopodnos.cz',
    color: '#F5A623',
    logo: (
      <svg viewBox="0 0 200 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '22px', width: 'auto' }}>
        <text x="0" y="19" fontFamily="'Outfit', sans-serif" fontWeight="700" fontSize="22" fill="#F5A623">Jídlopodnos</text>
      </svg>
    ),
  },
]

export default function DeliverySection() {
  return (
    <section
      className="py-10 px-6"
      style={{ borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Label */}
        <span
          style={{
            fontSize: '11px',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'rgba(244,237,228,0.35)',
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}
        >
          Najdete nás na
        </span>

        {/* Divider line — desktop only */}
        <div
          className="hidden md:block"
          style={{ width: '1px', height: '24px', background: 'rgba(255,255,255,0.1)', flexShrink: 0 }}
        />

        {/* Platform logos */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-8 md:gap-10">
          {PLATFORMS.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              title={p.name}
              style={{
                opacity: 0.55,
                transition: 'opacity 0.2s',
                display: 'flex',
                alignItems: 'center',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.55')}
            >
              {p.logo}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
