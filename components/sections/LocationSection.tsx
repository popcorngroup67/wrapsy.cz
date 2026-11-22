import { ADDRESS, HOURS, PHONE } from '@/lib/constants'
import MapEmbed from '@/components/ui/MapEmbed'

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

            <div className="flex flex-col gap-2">
              <span
                style={{
                  fontSize: '10px',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: '#ec7723',
                }}
              >
                Telefon
              </span>
              <a
                href={PHONE.href}
                style={{
                  fontSize: '20px',
                  color: '#f4ede4',
                  textDecoration: 'none',
                  lineHeight: '1.4',
                }}
              >
                {PHONE.display}
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

          {/* Google Maps — načte se až po kliknutí (cookies třetí strany) */}
          <div
            className="w-full rounded-sm overflow-hidden"
            style={{
              height: 'clamp(240px, 40vw, 320px)',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <MapEmbed />
          </div>
        </div>
      </div>
    </section>
  )
}
