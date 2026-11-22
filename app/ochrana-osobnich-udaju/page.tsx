import type { Metadata } from 'next'
import Link from 'next/link'
import { CookieSettingsButton } from '@/components/consent/CookieConsent'
import { PHONE, PRIVACY_PATH } from '@/lib/constants'

// ⚠️ Údaje o správci jsou zástupné — doplní klient (viz TODO.md).
const CONTROLLER = {
  name: '[DOPLNIT: obchodní firma / jméno provozovatele]',
  ico: '[DOPLNIT: IČO]',
  seat: '[DOPLNIT: sídlo]',
  email: '[DOPLNIT: kontaktní e-mail]',
}

export const metadata: Metadata = {
  title: 'Ochrana osobních údajů a cookies',
  description: 'Jak WRAPSY Lovosice zpracovává osobní údaje a jaké cookies web používá.',
  alternates: { canonical: `https://wrapsy.cz${PRIVACY_PATH}` },
}

const h2: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontWeight: 900,
  fontSize: '26px',
  textTransform: 'uppercase',
  color: '#f4ede4',
  marginTop: '40px',
  marginBottom: '12px',
}

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16" style={{ lineHeight: 1.65, fontSize: '16px' }}>
      <Link href="/" style={{ color: '#ec7723', fontSize: '13px', letterSpacing: '0.1em' }}>
        ← Zpět na WRAPSY
      </Link>

      <h1
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 900,
          fontSize: 'clamp(36px, 6vw, 56px)',
          lineHeight: 0.95,
          textTransform: 'uppercase',
          marginTop: '24px',
        }}
      >
        Ochrana osobních údajů <span style={{ color: '#ec7723' }}>a cookies</span>
      </h1>

      <div style={{ color: 'rgba(244,237,228,0.8)' }}>
        <h2 style={h2}>Kdo údaje zpracovává</h2>
        <p>
          Správcem osobních údajů je {CONTROLLER.name}, IČO {CONTROLLER.ico}, se sídlem{' '}
          {CONTROLLER.seat} (dále „WRAPSY“, „my“). Kontakt pro vše, co se týká osobních údajů:{' '}
          {CONTROLLER.email}, tel. <a href={PHONE.href} className="underline">{PHONE.display}</a>.
        </p>

        <h2 style={h2}>Cookies na tomto webu</h2>
        <p>
          <strong>Nezbytné.</strong> Do úložiště tvého prohlížeče ukládáme jen tvou volbu
          o cookies (<code>wrapsy-consent</code>, platnost 12 měsíců). Bez ní by se lišta
          ukazovala pořád dokola. Souhlas k tomu není potřeba.
        </p>
        <p className="mt-4">
          <strong>Analytické — jen s tvým souhlasem.</strong> Google Analytics 4 nám říká,
          kolik lidí web navštíví, odkud přišli a co si prohlíželi. Nástroj se načte až
          poté, co souhlas dáš. Ukládá cookies <code>_ga</code> a <code>_ga_*</code>{' '}
          (platnost až 2 roky). Údaje o návštěvách uchováváme 14 měsíců. Poskytovatelem je
          Google Ireland Ltd.; data se mohou předávat i společnosti Google LLC v USA, která
          je certifikovaná v rámci EU-U.S. Data Privacy Framework. Právní základ: tvůj
          souhlas.
        </p>
        <p className="mt-4">
          Souhlas můžeš kdykoli změnit nebo odvolat — odvolání vypne měření a smaže
          analytické cookies:{' '}
          <CookieSettingsButton
            className="underline cursor-pointer"
            style={{ color: '#ec7723', background: 'none', border: 'none', padding: 0, font: 'inherit' }}
          />
          .
        </p>

        <h2 style={h2}>Obsah třetích stran</h2>
        <p>
          Web načítá písma ze služby Google Fonts — tvůj prohlížeč se při tom spojí se
          servery Googlu a předá jim tvou IP adresu. Mapu Google Maps načteme až poté, co
          klikneš na „Zobrazit mapu“; Google pak může uložit své cookies. Odkazy na
          Instagram a rozvozové služby (Wolt, Foodora, Bolt Food, Jídlo pod nos) a na
          online objednávky přes Restia vedou na jejich vlastní stránky — údaje, které tam
          zadáš, zpracovávají tyto služby jako samostatní správci podle svých zásad.
        </p>

        <h2 style={h2}>Hosting</h2>
        <p>
          Web běží na serverech Vercel Inc. (USA, certifikace EU-U.S. Data Privacy
          Framework). Server při každé návštěvě krátce zaznamenává technické údaje (IP
          adresa, prohlížeč, čas) kvůli bezpečnosti a provozu webu. Právní základ:
          oprávněný zájem na bezpečném provozu webu.
        </p>

        <h2 style={h2}>Tvoje práva</h2>
        <p>
          Máš právo na přístup ke svým údajům, jejich opravu, výmaz, omezení zpracování,
          přenositelnost a právo vznést námitku. Souhlas můžeš kdykoli odvolat. Napiš nám
          na {CONTROLLER.email}. Pokud si myslíš, že s údaji zacházíme špatně, můžeš podat
          stížnost u Úřadu pro ochranu osobních údajů (
          <a href="https://uoou.gov.cz" target="_blank" rel="noopener noreferrer" className="underline">
            uoou.gov.cz
          </a>
          ).
        </p>

        <p className="mt-10" style={{ fontSize: '13px', color: 'rgba(244,237,228,0.5)' }}>
          Platné od [DOPLNIT: datum zveřejnění].
        </p>
      </div>
    </main>
  )
}
