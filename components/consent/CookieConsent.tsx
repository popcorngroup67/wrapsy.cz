'use client'

import Link from 'next/link'
import Script from 'next/script'
import { useCallback, useEffect, useId, useMemo, useState, useSyncExternalStore } from 'react'
import { GA_ID, PRIVACY_PATH } from '@/lib/constants'

// Cookie lišta + GA4 s Google Consent Mode v2.
// gtag.js se NENAČTE, dokud návštěvník nepřijme analytické cookies.
// Odmítnutí / odvolání: ga-disable, consent update denied, smazání _ga cookies
// na všech úrovních domény a reload, pokud už gtag.js běžel.

const STORAGE_KEY = 'wrapsy-consent'
const CONSENT_VERSION = 1
const MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000 // po roce se zeptáme znovu
const OPEN_EVENT = 'wrapsy:open-consent'

type Choice = { v: number; analytics: boolean; ts: number }

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
    __gaLoaded?: boolean
  }
}

const CHANGE_EVENT = 'wrapsy:consent-change'
let memoryRaw = '' // záloha, když localStorage nejde (private mode)

function parseChoice(raw: string): Choice | null {
  if (!raw) return null
  try {
    const parsed = JSON.parse(raw) as Choice
    if (parsed.v !== CONSENT_VERSION || Date.now() - parsed.ts > MAX_AGE_MS) return null
    return parsed
  } catch {
    return null
  }
}

// Vrací surový řetězec (stabilní pro useSyncExternalStore); prošlá volba → ''
function getSnapshot(): string {
  let raw = memoryRaw
  try {
    raw = localStorage.getItem(STORAGE_KEY) ?? memoryRaw
  } catch {}
  return parseChoice(raw) ? raw : ''
}

// Na serveru volbu neznáme → null = nic nerenderovat
function getServerSnapshot(): string | null {
  return null
}

function subscribe(cb: () => void) {
  window.addEventListener(CHANGE_EVENT, cb)
  window.addEventListener('storage', cb)
  return () => {
    window.removeEventListener(CHANGE_EVENT, cb)
    window.removeEventListener('storage', cb)
  }
}

function readChoice(): Choice | null {
  return parseChoice(getSnapshot())
}

function setGaDisabled(disabled: boolean) {
  ;(window as unknown as Record<string, boolean>)[`ga-disable-${GA_ID}`] = disabled
}

// GA zapisuje _ga na nejvyšší možnou doménu (.wrapsy.cz) — mažeme na všech úrovních.
function deleteGaCookies() {
  const names = document.cookie
    .split(';')
    .map((c) => c.split('=')[0].trim())
    .filter((n) => n === '_ga' || n.startsWith('_ga_'))
  if (names.length === 0) return
  const parts = location.hostname.split('.')
  const domains: (string | null)[] = [null]
  for (let i = 0; i < parts.length - 1; i++) {
    const d = parts.slice(i).join('.')
    domains.push(d, `.${d}`)
  }
  for (const name of names) {
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; path=/${domain ? `; domain=${domain}` : ''}`
    }
  }
}

function ensureGtag() {
  if (window.gtag) return
  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    // gtag.js vyžaduje objekt `arguments`, ne pole
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments)
  }
  // Consent Mode v2 — výchozí stav: vše zamítnuto
  window.gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    wait_for_update: 500,
  })
}

function grantAnalytics() {
  ensureGtag()
  setGaDisabled(false)
  if (window.__gaLoaded) {
    window.gtag!('consent', 'update', { analytics_storage: 'granted' })
    return
  }
  window.__gaLoaded = true
  // Souhlas je jen s analytikou — reklamní signály zůstávají denied.
  window.gtag!('consent', 'update', { analytics_storage: 'granted' })
  window.gtag!('js', new Date())
  window.gtag!('config', GA_ID)
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_EVENT))
}

export function CookieSettingsButton({
  className,
  style,
}: {
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <button type="button" onClick={openCookieSettings} className={className} style={style}>
      Nastavení cookies
    </button>
  )
}

const btnBase =
  'cursor-pointer px-5 py-3 text-[12px] uppercase tracking-[0.12em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f4ede4]'

const primaryBtn: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontWeight: 900,
  background: '#ec7723',
  color: '#0a0a0a',
  border: '1px solid #ec7723',
}

export default function CookieConsent() {
  const raw = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
  // undefined = server / ještě nehydratováno, null = bez volby
  const choice = useMemo(() => (raw === null ? undefined : parseChoice(raw)), [raw])
  const [reopened, setReopened] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [analyticsChecked, setAnalyticsChecked] = useState(false)
  const titleId = useId()
  const checkboxId = useId()
  const open = choice === null || reopened

  useEffect(() => {
    if (choice === undefined) return
    ensureGtag()
    if (choice?.analytics) grantAnalytics()
    else deleteGaCookies() // zbytky po odmítnutí / prošlém souhlasu
  }, [choice])

  useEffect(() => {
    const onOpen = () => {
      setAnalyticsChecked(readChoice()?.analytics ?? false)
      setShowSettings(true)
      setReopened(true)
    }
    window.addEventListener(OPEN_EVENT, onOpen)
    return () => window.removeEventListener(OPEN_EVENT, onOpen)
  }, [])

  const save = useCallback((analytics: boolean) => {
    const next = JSON.stringify({ v: CONSENT_VERSION, analytics, ts: Date.now() } satisfies Choice)
    memoryRaw = next
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {}
    setReopened(false)
    setShowSettings(false)

    if (!analytics) {
      const wasLoaded = window.__gaLoaded
      setGaDisabled(true)
      window.gtag?.('consent', 'update', { analytics_storage: 'denied' })
      deleteGaCookies()
      // gtag.js nejde vyjmout z paměti — reload ho zahodí
      if (wasLoaded) {
        location.reload()
        return
      }
    }
    window.dispatchEvent(new Event(CHANGE_EVENT))
  }, [])

  return (
    <>
      {choice?.analytics && (
        <Script
          id="ga4"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
      )}

      {open && (
        <section
          aria-labelledby={titleId}
          className="fixed inset-x-0 bottom-0 z-[950] px-4 pb-4 md:px-6 md:pb-6"
        >
          <div
            className="mx-auto max-w-3xl p-5 md:p-6 flex flex-col gap-4"
            style={{
              background: '#0a0a0a',
              border: '1px solid rgba(244,237,228,0.15)',
              boxShadow: '0 8px 40px rgba(0,0,0,0.6)',
              color: '#f4ede4',
            }}
          >
            <h2
              id={titleId}
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 900,
                fontSize: '20px',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
              }}
            >
              Cookies
            </h2>
            <p style={{ fontSize: '14px', lineHeight: 1.55, color: 'rgba(244,237,228,0.75)' }}>
              Nezbytné cookies potřebuje web, aby fungoval. S tvým souhlasem použijeme i
              analytické cookies (Google Analytics), abychom věděli, co na webu lidi hledají.
              Volbu můžeš kdykoli změnit v patičce webu.{' '}
              <Link
                href={PRIVACY_PATH}
                style={{ color: '#ec7723', textDecoration: 'underline' }}
              >
                Zásady ochrany osobních údajů a cookies
              </Link>
            </p>

            {showSettings && (
              <fieldset
                className="flex flex-col gap-3 p-4"
                style={{ border: '1px solid rgba(244,237,228,0.1)' }}
              >
                <legend className="sr-only">Kategorie cookies</legend>
                <label className="flex items-start gap-3" style={{ fontSize: '14px' }}>
                  <input type="checkbox" checked disabled className="mt-1 accent-[#ec7723]" />
                  <span>
                    <strong>Nezbytné</strong>
                    <span style={{ display: 'block', color: 'rgba(244,237,228,0.6)' }}>
                      Uložení tvé volby o cookies. Vždy zapnuté.
                    </span>
                  </span>
                </label>
                <label
                  htmlFor={checkboxId}
                  className="flex items-start gap-3 cursor-pointer"
                  style={{ fontSize: '14px' }}
                >
                  <input
                    id={checkboxId}
                    type="checkbox"
                    checked={analyticsChecked}
                    onChange={(e) => setAnalyticsChecked(e.target.checked)}
                    className="mt-1 accent-[#ec7723]"
                  />
                  <span>
                    <strong>Analytické</strong>
                    <span style={{ display: 'block', color: 'rgba(244,237,228,0.6)' }}>
                      Google Analytics 4 — anonymní statistiky návštěvnosti.
                    </span>
                  </span>
                </label>
              </fieldset>
            )}

            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
              <button
                type="button"
                onClick={() => save(true)}
                className={btnBase}
                style={primaryBtn}
              >
                Přijmout vše
              </button>
              <button
                type="button"
                onClick={() => save(false)}
                className={btnBase}
                style={primaryBtn}
              >
                Odmítnout
              </button>
              {showSettings ? (
                <button
                  type="button"
                  onClick={() => save(analyticsChecked)}
                  className={btnBase}
                  style={{ ...primaryBtn, background: 'transparent', color: '#f4ede4' }}
                >
                  Uložit volbu
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setShowSettings(true)}
                  className={btnBase}
                  style={{
                    background: 'transparent',
                    color: '#f4ede4',
                    border: '1px solid rgba(244,237,228,0.3)',
                  }}
                >
                  Nastavení
                </button>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
