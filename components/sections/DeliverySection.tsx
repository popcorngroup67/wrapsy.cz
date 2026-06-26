import Image from 'next/image'

const PLATFORMS = [
  {
    name: 'foodora',
    label: 'Objednat přes foodora',
    href: 'https://www.foodora.cz/restaurant/fch6/wrapsy',
    src: '/SVG/delivery/foodora.svg',
    w: 110, h: 26,
    accent: '#d70f64',
  },
  {
    name: 'Bolt Food',
    label: 'Objednat přes Bolt Food',
    href: 'https://food.bolt.eu/cs-cz',
    src: '/SVG/delivery/bolt.svg',
    w: 70, h: 26,
    accent: '#34d186',
  },
  {
    name: 'Jídlopodnos',
    label: 'Objednat přes Jídlopodnos',
    href: 'https://www.jidlopodnos.cz/rozvoz-jidel/litomerice/wrapsy',
    src: '/SVG/delivery/jidlopodnos.svg',
    w: 140, h: 26,
    accent: '#f5a623',
  },
]

export default function DeliverySection() {
  return (
    <section
      className="py-16 px-6"
      style={{ borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        {/* Header */}
        <div className="flex items-center gap-4">
          <div style={{ width: '32px', height: '2px', background: '#ec7723', flexShrink: 0 }} />
          <span
            style={{
              fontSize: '11px',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'rgba(244,237,228,0.4)',
            }}
          >
            Rozvoz — Objednávky online
          </span>
        </div>

        {/* Platform cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {PLATFORMS.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '24px',
                padding: '28px 32px',
                border: '1px solid rgba(255,255,255,0.08)',
                background: 'rgba(255,255,255,0.02)',
                textDecoration: 'none',
                transition: 'border-color 0.25s, background 0.25s',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = p.accent + '55'
                e.currentTarget.style.background = p.accent + '0d'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
              }}
            >
              {/* Accent line top */}
              <div
                style={{
                  position: 'absolute',
                  top: 0, left: 0, right: 0,
                  height: '2px',
                  background: p.accent,
                  opacity: 0,
                  transition: 'opacity 0.25s',
                }}
                className="group-hover:opacity-100"
              />

              {/* Logo */}
              <Image
                src={p.src}
                alt={p.name}
                width={p.w}
                height={p.h}
                style={{ height: '24px', width: 'auto', filter: 'brightness(0) invert(1)', opacity: 0.85 }}
              />

              {/* CTA */}
              <span
                style={{
                  fontSize: '11px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'rgba(244,237,228,0.3)',
                  transition: 'color 0.25s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = p.accent)}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(244,237,228,0.3)')}
              >
                Objednat →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
