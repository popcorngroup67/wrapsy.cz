const PILLARS = [
  {
    icon: '⚡',
    title: 'Rychlost',
    text: 'Jídlo do ruky bez čekání. Připravujeme ho čerstvě a rychle.',
  },
  {
    icon: '🌶',
    title: 'Chuť',
    text: 'Výrazné omáčky, čerstvé suroviny, kombinace které fungují.',
  },
  {
    icon: '✓',
    title: 'Čerstvost',
    text: 'Žádné polotovary. Každý den čerstvé suroviny, poctivá příprava.',
  },
]

export default function BrandSection() {
  return (
    <section
      id="o-nas"
      className="py-24 px-6"
      style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Brand story */}
        <div className="flex flex-col gap-8">
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 900,
              fontSize: 'clamp(40px, 6vw, 72px)',
              lineHeight: 0.9,
              textTransform: 'uppercase',
              color: '#f4ede4',
            }}
          >
            Street food.<br />
            <span style={{ color: '#ec7723' }}>Bez kompromisů.</span>
          </h2>
          <p
            style={{
              fontSize: '15px',
              lineHeight: '1.7',
              color: 'rgba(244,237,228,0.55)',
              maxWidth: '440px',
            }}
          >
            WRAPSY vzniklo s jednoduchou myšlenkou — dobrý wrap nemusí znamenat čekání ani kompromis
            v kvalitě. Jsme moderní street food chain z Lovosic se zaměřením na čerstvé wrapy,
            bowls, fries a wings.
          </p>
          <p
            style={{
              fontSize: '15px',
              lineHeight: '1.7',
              color: 'rgba(244,237,228,0.55)',
              maxWidth: '440px',
            }}
          >
            Packed with Flavor — to není jen tagline. Je to slib v každém jídle co připravíme.
          </p>
        </div>

        {/* Brand pillars */}
        <div className="flex flex-col gap-8">
          {PILLARS.map((pillar) => (
            <div key={pillar.title} className="flex gap-6 items-start">
              <div
                style={{
                  fontSize: '24px',
                  width: '48px',
                  height: '48px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(236,119,35,0.1)',
                  border: '1px solid rgba(236,119,35,0.2)',
                  flexShrink: 0,
                }}
              >
                {pillar.icon}
              </div>
              <div className="flex flex-col gap-1">
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 900,
                    fontSize: '20px',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    color: '#f4ede4',
                  }}
                >
                  {pillar.title}
                </h3>
                <p style={{ fontSize: '13px', color: 'rgba(244,237,228,0.45)', lineHeight: '1.6' }}>
                  {pillar.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
