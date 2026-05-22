import Image from 'next/image'

// Delivery platform logos are stored in /public/SVG/delivery/.
// Bolt and Jídlopodnos downloaded from official CDNs (white fills).
// Foodora from Wikimedia Commons. Wolt is a hand-crafted SVG path wordmark.
const PLATFORMS = [
  { name: 'Wolt',         href: 'https://wolt.com/cs/cze',          src: '/SVG/delivery/wolt.svg',         w: 70,  h: 26 },
  { name: 'foodora',      href: 'https://www.foodora.cz',            src: '/SVG/delivery/foodora.svg',      w: 110, h: 26 },
  { name: 'Bolt Food',    href: 'https://food.bolt.eu/cs-cz',        src: '/SVG/delivery/bolt.svg',         w: 70,  h: 26 },
  { name: 'Jídlopodnos',  href: 'https://www.jidlopodnos.cz',        src: '/SVG/delivery/jidlopodnos.svg',  w: 140, h: 26 },
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

        {/* Divider — desktop only */}
        <div
          className="hidden md:block"
          style={{ width: '1px', height: '24px', background: 'rgba(255,255,255,0.1)', flexShrink: 0 }}
        />

        {/* Logos */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-8 md:gap-10">
          {PLATFORMS.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              title={p.name}
              style={{
                opacity: 0.5,
                transition: 'opacity 0.2s',
                display: 'flex',
                alignItems: 'center',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.5')}
            >
              <Image
                src={p.src}
                alt={p.name}
                width={p.w}
                height={p.h}
                style={{ height: '22px', width: 'auto', filter: 'brightness(0) invert(1)' }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
