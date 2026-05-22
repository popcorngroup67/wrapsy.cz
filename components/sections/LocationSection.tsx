import { ADDRESS, HOURS } from '@/lib/constants'

export default function LocationSection() {
  return (
    <section
      id="lokace"
      className="py-24 px-6"
      style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
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
          Kde nás<br />
          <span style={{ color: '#ec7723' }}>najdeš.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Address and hours */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <span
                style={{
                  fontSize: '10px',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: '#ec7723',
                }}
              >
                Adresa
              </span>
              <a
                href={ADDRESS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '20px',
                  color: '#f4ede4',
                  textDecoration: 'none',
                  lineHeight: '1.4',
                }}
              >
                {ADDRESS.street}<br />
                {ADDRESS.zip} {ADDRESS.city}
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <span
                style={{
                  fontSize: '10px',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: '#ec7723',
                }}
              >
                Otevírací doba
              </span>
              {HOURS.map((row) => (
                <div
                  key={row.days}
                  className="flex justify-between"
                  style={{
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                    paddingBottom: '10px',
                  }}
                >
                  <span style={{ fontSize: '14px', color: 'rgba(244,237,228,0.55)' }}>
                    {row.days}
                  </span>
                  <span style={{ fontSize: '14px', color: '#f4ede4', fontWeight: 500 }}>
                    {row.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Google Maps embed — dark-tinted with CSS filter */}
          <div
            className="w-full rounded-sm overflow-hidden"
            style={{
              height: '320px',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.5!2d14.0516!3d50.5138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47098f3f20000001%3A0x1!2z2J8uIG3DoWphIDI1LCBMb3Zvc2ljZQ!5e0!3m2!1scs!2scz!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="WRAPSY Lovosice"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
