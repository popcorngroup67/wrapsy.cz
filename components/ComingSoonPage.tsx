import Image from 'next/image'

// Conversion of the original index.html coming soon page into a React component.
// Keeps all animations and styles inline so it's self-contained.
export default function ComingSoonPage() {
  const marqueeWords = Array(6).fill(['Wrap', 'Bowl', 'Fries', 'Wings']).flat()

  return (
    <>
      <style>{`
        .cs-body {
          background: #0a0a0a;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          position: relative;
        }
        .cs-top-bar {
          position: fixed;
          top: 0; left: 0;
          width: 100%; height: 2px;
          background: #ec7723;
          z-index: 50;
          transform-origin: left;
          animation: barIn 0.8s cubic-bezier(0.16,1,0.3,1) forwards 0.1s;
          transform: scaleX(0);
        }
        @keyframes barIn { to { transform: scaleX(1); } }
        .cs-glow {
          position: fixed;
          width: 700px; height: 700px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(236,119,35,0.10) 0%, transparent 70%);
          pointer-events: none;
          z-index: 1;
          animation: pulse 7s ease-in-out infinite;
        }
        .cs-container {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 2rem;
          width: 100%;
        }
        .cs-logo {
          height: 58px;
          width: auto;
          margin-bottom: 3rem;
          opacity: 0;
          animation: fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) forwards 0.3s;
        }
        .cs-hero {
          font-family: var(--font-display), sans-serif;
          font-weight: 900;
          font-size: clamp(72px, 15vw, 190px);
          line-height: 0.88;
          letter-spacing: -0.01em;
          text-transform: uppercase;
          color: #f4ede4;
          opacity: 0;
          animation: fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) forwards 0.55s;
        }
        .cs-hero .accent { color: #ec7723; display: block; }
        .cs-sub {
          margin-top: 2rem;
          font-size: clamp(11px, 1.5vw, 14px);
          font-weight: 400;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: rgba(244,237,228,0.35);
          opacity: 0;
          animation: fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) forwards 0.8s;
        }
        .cs-marquee-track {
          position: fixed;
          bottom: 0; left: 0;
          width: 100%;
          overflow: hidden;
          border-top: 1px solid rgba(255,255,255,0.06);
          padding: 13px 0;
          z-index: 20;
          opacity: 0;
          animation: fadeIn 0.8s ease forwards 1.2s;
        }
        @keyframes fadeIn { to { opacity: 1; } }
        .cs-marquee-inner {
          display: flex;
          white-space: nowrap;
          animation: marquee 22s linear infinite;
        }
        .cs-marquee-item {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          gap: 24px;
          padding-right: 24px;
        }
        .cs-marquee-item .word {
          font-family: var(--font-display), sans-serif;
          font-weight: 900;
          font-size: 11px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(244,237,228,0.18);
        }
        .cs-marquee-item .dot {
          color: #ec7723;
          font-size: 8px;
          letter-spacing: 0;
        }
      `}</style>

      <div className="cs-body">
        <div className="cs-top-bar" />
        <div className="cs-glow" />

        <div className="cs-container">
          <Image
            className="cs-logo"
            src="/SVG/full-logo.svg"
            alt="WRAPSY"
            width={280}
            height={58}
            priority
          />

          <h1 className="cs-hero">
            Wrapping<br />
            <span className="accent">Soon.</span>
          </h1>

          <p className="cs-sub">
            Otevíráme brzy&nbsp;&nbsp;—&nbsp;&nbsp;Packed with Flavor
          </p>
        </div>

        {/* Bottom marquee strip — two identical halves for seamless loop */}
        <div className="cs-marquee-track">
          <div className="cs-marquee-inner">
            {[0, 1].map((half) => (
              <div key={half} className="cs-marquee-item" aria-hidden={half === 1}>
                {marqueeWords.map((word, j) => (
                  <span key={j}>
                    <span className="word">{word}</span>
                    <span className="dot" style={{ marginLeft: '24px' }}>●</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
