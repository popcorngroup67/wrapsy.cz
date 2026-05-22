# WRAPSY Web — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Přestavět statický coming soon web na plný Next.js one-pager s menu, brand sekcí a lokací, přičemž coming soon zůstane živé přes env variable.

**Architecture:** Next.js App Router, single route (`app/page.tsx`) s podmínkou na `NEXT_PUBLIC_SITE_MODE`. Všechny sekce jsou samostatné komponenty sestavené v `HomePage.tsx`. Statická data menu a konstant v `lib/`.

**Tech Stack:** Next.js 15, TypeScript, Tailwind CSS, Google Fonts (Big Shoulders Display + Outfit), Vercel

---

## Soubory

```
app/
  layout.tsx                  — root layout, fonty, metadata
  page.tsx                    — env gate: coming_soon vs live
  globals.css                 — CSS variables, Tailwind base, animace

components/
  ComingSoonPage.tsx          — konverze stávajícího index.html
  HomePage.tsx                — sestavuje všechny sekce
  layout/
    Navbar.tsx                — navigace s anchor links a CTA
    Footer.tsx                — logo, Instagram, copyright
    StickyOrderButton.tsx     — fixed bottom CTA, skryje se na hero
  sections/
    HeroSection.tsx           — fullscreen hero
    MenuSection.tsx           — filter tabs + grid karet
    BrandSection.tsx          — příběh + 3 pilíře
    LocationSection.tsx       — adresa, hodiny, mapa

  ui/
    MenuCard.tsx              — karta jídla
    MenuFilter.tsx            — filter tabs komponenta

lib/
  menu.ts                     — statická data menu
  constants.ts                — Restia URL, adresa, hodiny

vercel.json                   — odstranit outputDirectory, zachovat redirecty
.claude/launch.json           — aktualizovat pro Next.js dev server
```

---

## Task 1: Inicializace Next.js projektu

**Files:**
- Modify: `vercel.json`
- Create: `app/layout.tsx`, `app/globals.css`, `app/page.tsx`
- Delete: `index.html` (obsah zachován v ComingSoonPage)
- Modify: `.claude/launch.json`

- [ ] **Krok 1: Zálohuj index.html**

```bash
cp /Users/anhducngo/Desktop/wrapsy.cz/index.html /Users/anhducngo/Desktop/wrapsy.cz/index.html.bak
```

- [ ] **Krok 2: Inicializuj Next.js v existující složce**

```bash
cd /Users/anhducngo/Desktop/wrapsy.cz
npx create-next-app@latest . --typescript --tailwind --app --no-src-dir --import-alias "@/*" --no-git --eslint
```

Při dotazech potvrď defaults. Přepíše `package.json`, vytvoří `app/`, `tailwind.config.ts`, `next.config.ts`.

- [ ] **Krok 3: Smaž defaultní Next.js boilerplate**

```bash
rm -f app/page.tsx app/layout.tsx app/globals.css
rm -rf app/fonts
```

- [ ] **Krok 4: Aktualizuj vercel.json — odstraň outputDirectory**

```json
{
  "redirects": [
    {
      "source": "/instagram",
      "has": [{ "type": "host", "value": "go.wrapsy.cz" }],
      "destination": "https://instagram.com/wrapsycz",
      "permanent": false
    },
    {
      "source": "/facebook",
      "has": [{ "type": "host", "value": "go.wrapsy.cz" }],
      "destination": "https://facebook.com/wrapsy",
      "permanent": false
    },
    {
      "source": "/social",
      "has": [{ "type": "host", "value": "go.wrapsy.cz" }],
      "destination": "https://instagram.com/wrapsycz",
      "permanent": false
    },
    {
      "source": "/menu",
      "has": [{ "type": "host", "value": "go.wrapsy.cz" }],
      "destination": "https://wrapsy.cz/menu",
      "permanent": false
    },
    {
      "source": "/objednat",
      "has": [{ "type": "host", "value": "go.wrapsy.cz" }],
      "destination": "https://wrapsy.cz",
      "permanent": false
    },
    {
      "source": "/feedback",
      "has": [{ "type": "host", "value": "go.wrapsy.cz" }],
      "destination": "https://wrapsy.cz",
      "permanent": false
    },
    {
      "source": "/stolek",
      "has": [{ "type": "host", "value": "go.wrapsy.cz" }],
      "destination": "https://wrapsy.cz",
      "permanent": false
    },
    {
      "source": "/vchod",
      "has": [{ "type": "host", "value": "go.wrapsy.cz" }],
      "destination": "https://wrapsy.cz",
      "permanent": false
    },
    {
      "source": "/obal",
      "has": [{ "type": "host", "value": "go.wrapsy.cz" }],
      "destination": "https://wrapsy.cz",
      "permanent": false
    },
    {
      "source": "/uctenka",
      "has": [{ "type": "host", "value": "go.wrapsy.cz" }],
      "destination": "https://wrapsy.cz",
      "permanent": false
    },
    {
      "source": "/banner",
      "has": [{ "type": "host", "value": "go.wrapsy.cz" }],
      "destination": "https://wrapsy.cz",
      "permanent": false
    },
    {
      "source": "/:path*",
      "has": [{ "type": "host", "value": "go.wrapsy.cz" }],
      "destination": "https://wrapsy.cz",
      "permanent": false
    }
  ]
}
```

- [ ] **Krok 5: Aktualizuj .claude/launch.json pro Next.js dev server**

```json
{
  "version": "0.0.1",
  "configurations": [
    {
      "name": "wrapsy",
      "runtimeExecutable": "npm",
      "runtimeArgs": ["run", "dev"],
      "port": 3000,
      "autoPort": true
    }
  ]
}
```

- [ ] **Krok 6: Commit**

```bash
git add -A
git commit -m "chore: inicializace Next.js projektu"
```

---

## Task 2: Globální styly a konstanty

**Files:**
- Create: `app/globals.css`
- Create: `lib/constants.ts`
- Create: `lib/menu.ts`

- [ ] **Krok 1: Vytvoř app/globals.css**

```css
@import "tailwindcss";

:root {
  --black:  #0a0a0a;
  --orange: #ec7723;
  --white:  #f4ede4;
  --muted:  rgba(244, 237, 228, 0.35);
  --font-display: var(--font-big-shoulders);
  --font-body: var(--font-outfit);
}

html {
  scroll-behavior: smooth;
}

body {
  background: var(--black);
  color: var(--white);
  font-family: var(--font-body), sans-serif;
}

/* Grain overlay */
body::after {
  content: '';
  position: fixed;
  inset: -50%;
  width: 200%;
  height: 200%;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  opacity: 0.04;
  pointer-events: none;
  z-index: 900;
  animation: grain 7s steps(8, end) infinite;
}

@keyframes grain {
  0%   { transform: translate(0, 0); }
  15%  { transform: translate(-2%, -3%); }
  30%  { transform: translate(3%, 2%); }
  45%  { transform: translate(-1%, 4%); }
  60%  { transform: translate(3%, -2%); }
  75%  { transform: translate(-3%, 1%); }
  100% { transform: translate(2%, -3%); }
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
```

- [ ] **Krok 2: Vytvoř lib/constants.ts**

```ts
export const RESTIA_URL = 'https://online.restia.cz/wrapsy'

export const ADDRESS = {
  street: '8. května 25',
  city: 'Lovosice',
  zip: '410 02',
  full: '8. května 25, 410 02 Lovosice',
  mapsUrl: 'https://maps.google.com/?q=8.+května+25,+Lovosice',
}

export const HOURS = [
  { days: 'Po – Čt', time: '10:00 – 21:00' },
  { days: 'Pá – So', time: '10:00 – 22:00' },
  { days: 'Ne',      time: '11:00 – 20:00' },
]

export const SOCIAL = {
  instagram: 'https://instagram.com/wrapsycz',
  instagramHandle: '@wrapsycz',
}
```

- [ ] **Krok 3: Vytvoř lib/menu.ts**

```ts
export type MenuCategory = 'wrapy' | 'bowls' | 'fries' | 'wings'

export type MenuItem = {
  id: string
  name: string
  description: string
  category: MenuCategory
}

export const MENU_CATEGORIES: { id: MenuCategory; label: string }[] = [
  { id: 'wrapy',  label: 'Wrapy'  },
  { id: 'bowls',  label: 'Bowls'  },
  { id: 'fries',  label: 'Fries'  },
  { id: 'wings',  label: 'Wings'  },
]

export const MENU_ITEMS: MenuItem[] = [
  // Wrapy
  {
    id: 'classic-wrapsy',
    name: 'Classic WRAPSY',
    description: 'Kuřecí, římský salát, rajče, cheddar, WRAPSY omáčka',
    category: 'wrapy',
  },
  {
    id: 'spicy-ranch',
    name: 'Spicy Ranch',
    description: 'Kuřecí, jalapeños, červené zelí, ranch',
    category: 'wrapy',
  },
  {
    id: 'bbq-beef',
    name: 'BBQ Beef',
    description: 'Hovězí, karamelizovaná cibulka, pickles, BBQ omáčka',
    category: 'wrapy',
  },
  {
    id: 'veggie',
    name: 'Veggie',
    description: 'Falafel, hummus, grilovaná zelenina, tahini',
    category: 'wrapy',
  },
  {
    id: 'caesar',
    name: 'Caesar',
    description: 'Kuřecí, caesar dressing, parmazán, krutony',
    category: 'wrapy',
  },
  // Bowls
  {
    id: 'power-bowl',
    name: 'Power Bowl',
    description: 'Kuřecí, rýže, avokádo, corn, fazole, lime dressing',
    category: 'bowls',
  },
  {
    id: 'spicy-bowl',
    name: 'Spicy Bowl',
    description: 'Hovězí, rýže, jalapeños, sour cream, salsa',
    category: 'bowls',
  },
  {
    id: 'veggie-bowl',
    name: 'Veggie Bowl',
    description: 'Falafel, quinoa, grilovaná zelenina, tahini',
    category: 'bowls',
  },
  // Fries
  {
    id: 'classic-fries',
    name: 'Classic',
    description: 'Křupavé hranolky, sůl',
    category: 'fries',
  },
  {
    id: 'loaded-fries',
    name: 'Loaded',
    description: 'Sýrová omáčka, jalapeños, cibulka',
    category: 'fries',
  },
  {
    id: 'truffle-fries',
    name: 'Truffle',
    description: 'Lanýžový olej, parmazán, pažitka',
    category: 'fries',
  },
  // Wings
  {
    id: 'buffalo-wings',
    name: 'Buffalo',
    description: 'Klasické ostré, blue cheese dip (6 ks)',
    category: 'wings',
  },
  {
    id: 'honey-garlic-wings',
    name: 'Honey Garlic',
    description: 'Sladko-česnekové, sezam (6 ks)',
    category: 'wings',
  },
  {
    id: 'bbq-smoke-wings',
    name: 'BBQ Smoke',
    description: 'Kouřové BBQ, pickles (6 ks)',
    category: 'wings',
  },
]
```

- [ ] **Krok 4: Commit**

```bash
git add app/globals.css lib/constants.ts lib/menu.ts
git commit -m "feat: globals, menu data a konstanty"
```

---

## Task 3: Root layout a fonty

**Files:**
- Create: `app/layout.tsx`

- [ ] **Krok 1: Vytvoř app/layout.tsx**

```tsx
import type { Metadata } from 'next'
import { Big_Shoulders_Display, Outfit } from 'next/font/google'
import './globals.css'

const bigShoulders = Big_Shoulders_Display({
  weight: ['900'],
  subsets: ['latin'],
  variable: '--font-big-shoulders',
})

const outfit = Outfit({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  title: 'WRAPSY — Packed with Flavor',
  description: 'WRAPSY — moderní street food chain zaměřený na wrapy, bowls, fries a wings. Lovosice.',
  metadataBase: new URL('https://wrapsy.cz'),
  openGraph: {
    title: 'WRAPSY — Packed with Flavor',
    description: 'Moderní street food chain. Wrapy, bowls, fries, wings. Lovosice.',
    url: 'https://wrapsy.cz',
    siteName: 'WRAPSY',
    locale: 'cs_CZ',
    type: 'website',
    images: [{ url: '/png/full-logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WRAPSY — Packed with Flavor',
    description: 'Moderní street food chain. Wrapy, bowls, fries, wings.',
    images: ['/png/full-logo.png'],
  },
  verification: {
    google: 'RAcBQn33Dw3u_zfP12_zJHlk0f5ymGH7O8gA7oDUS2Y',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs" className={`${bigShoulders.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  )
}
```

- [ ] **Krok 2: Commit**

```bash
git add app/layout.tsx
git commit -m "feat: root layout s fonty a metadata"
```

---

## Task 4: ComingSoonPage komponenta

**Files:**
- Create: `components/ComingSoonPage.tsx`

Konverze stávajícího `index.html` do React komponenty. Zachová všechny animace a styly.

- [ ] **Krok 1: Vytvoř components/ComingSoonPage.tsx**

```tsx
import Image from 'next/image'

export default function ComingSoonPage() {
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
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.18); opacity: 1; }
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
          font-family: var(--font-big-shoulders), sans-serif;
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
        .cs-marquee-item span {
          font-family: var(--font-big-shoulders), sans-serif;
          font-weight: 900;
          font-size: 11px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(244,237,228,0.18);
        }
        .cs-marquee-item span.dot {
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

        <div className="cs-marquee-track">
          <div className="cs-marquee-inner">
            {[0, 1].map((i) => (
              <div key={i} className="cs-marquee-item" aria-hidden={i === 1}>
                {Array(6).fill(['Wrap', 'Bowl', 'Fries', 'Wings']).flat().map((word, j) => (
                  <>
                    <span key={`${i}-${j}-word`}>{word}</span>
                    <span key={`${i}-${j}-dot`} className="dot">●</span>
                  </>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
```

- [ ] **Krok 2: Commit**

```bash
git add components/ComingSoonPage.tsx
git commit -m "feat: ComingSoonPage komponenta z index.html"
```

---

## Task 5: Page gate

**Files:**
- Create: `app/page.tsx`

- [ ] **Krok 1: Vytvoř app/page.tsx**

```tsx
import ComingSoonPage from '@/components/ComingSoonPage'
import HomePage from '@/components/HomePage'

export default function Page() {
  const isComingSoon = process.env.NEXT_PUBLIC_SITE_MODE === 'coming_soon'

  if (isComingSoon) {
    return <ComingSoonPage />
  }

  return <HomePage />
}
```

- [ ] **Krok 2: Nastav env variable lokálně**

Vytvoř soubor `.env.local` v kořeni projektu:

```
NEXT_PUBLIC_SITE_MODE=coming_soon
```

Přidej do `.gitignore` (pokud tam ještě není):
```
.env.local
```

- [ ] **Krok 3: Nastav env variable na Vercelu**

```bash
export PATH="$HOME/.npm-global/bin:$PATH"
vercel env add NEXT_PUBLIC_SITE_MODE production
# Zadej hodnotu: coming_soon
```

- [ ] **Krok 4: Commit**

```bash
git add app/page.tsx .gitignore
git commit -m "feat: env gate coming_soon vs live"
```

---

## Task 6: UI komponenty — MenuCard a MenuFilter

**Files:**
- Create: `components/ui/MenuCard.tsx`
- Create: `components/ui/MenuFilter.tsx`

- [ ] **Krok 1: Vytvoř components/ui/MenuCard.tsx**

```tsx
import type { MenuItem } from '@/lib/menu'

type Props = {
  item: MenuItem
}

export default function MenuCard({ item }: Props) {
  return (
    <div
      className="group flex flex-col rounded-sm overflow-hidden border transition-colors duration-200"
      style={{
        background: 'rgba(255,255,255,0.03)',
        borderColor: 'rgba(255,255,255,0.08)',
      }}
    >
      {/* Placeholder obrázek */}
      <div
        className="aspect-square w-full flex items-center justify-center"
        style={{ background: 'rgba(236,119,35,0.06)' }}
      >
        <span
          style={{
            fontFamily: 'var(--font-big-shoulders)',
            fontWeight: 900,
            fontSize: '13px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(236,119,35,0.3)',
          }}
        >
          Foto brzy
        </span>
      </div>

      {/* Obsah */}
      <div className="p-4 flex flex-col gap-1">
        <h3
          style={{
            fontFamily: 'var(--font-big-shoulders)',
            fontWeight: 900,
            fontSize: '18px',
            letterSpacing: '0.02em',
            textTransform: 'uppercase',
            color: '#f4ede4',
          }}
        >
          {item.name}
        </h3>
        <p
          style={{
            fontSize: '12px',
            color: 'rgba(244,237,228,0.45)',
            lineHeight: '1.5',
          }}
        >
          {item.description}
        </p>
      </div>
    </div>
  )
}
```

- [ ] **Krok 2: Vytvoř components/ui/MenuFilter.tsx**

```tsx
import type { MenuCategory } from '@/lib/menu'
import { MENU_CATEGORIES } from '@/lib/menu'

type Props = {
  active: MenuCategory
  onChange: (cat: MenuCategory) => void
}

export default function MenuFilter({ active, onChange }: Props) {
  return (
    <div className="flex gap-2 flex-wrap">
      {MENU_CATEGORIES.map((cat) => {
        const isActive = cat.id === active
        return (
          <button
            key={cat.id}
            onClick={() => onChange(cat.id)}
            style={{
              fontFamily: 'var(--font-big-shoulders)',
              fontWeight: 900,
              fontSize: '13px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              padding: '10px 20px',
              border: '1px solid',
              borderColor: isActive ? '#ec7723' : 'rgba(255,255,255,0.12)',
              background: isActive ? '#ec7723' : 'transparent',
              color: isActive ? '#0a0a0a' : 'rgba(244,237,228,0.6)',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          >
            {cat.label}
          </button>
        )
      })}
    </div>
  )
}
```

- [ ] **Krok 3: Commit**

```bash
git add components/ui/
git commit -m "feat: MenuCard a MenuFilter komponenty"
```

---

## Task 7: Navbar

**Files:**
- Create: `components/layout/Navbar.tsx`

- [ ] **Krok 1: Vytvoř components/layout/Navbar.tsx**

```tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { RESTIA_URL } from '@/lib/constants'

const NAV_LINKS = [
  { label: 'Menu',           href: '#menu'    },
  { label: 'O nás',          href: '#o-nas'   },
  { label: 'Kde nás najdeš', href: '#lokace'  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#top">
          <Image
            src="/SVG/full-logo.svg"
            alt="WRAPSY"
            width={140}
            height={30}
            priority
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontSize: '11px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(244,237,228,0.6)',
                textDecoration: 'none',
                transition: 'color 0.2s',
                fontWeight: 400,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#f4ede4')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(244,237,228,0.6)')}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href={RESTIA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block"
          style={{
            fontFamily: 'var(--font-big-shoulders)',
            fontWeight: 900,
            fontSize: '12px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            padding: '10px 20px',
            background: '#ec7723',
            color: '#0a0a0a',
            textDecoration: 'none',
            transition: 'background 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = '#f08a35')}
          onMouseLeave={(e) => (e.currentTarget.style.background = '#ec7723')}
        >
          Objednat
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-6 h-px transition-all duration-300"
              style={{ background: '#f4ede4' }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden flex flex-col px-6 pb-6 gap-4"
          style={{ background: 'rgba(10,10,10,0.98)' }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                fontSize: '13px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(244,237,228,0.7)',
                textDecoration: 'none',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={RESTIA_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-big-shoulders)',
              fontWeight: 900,
              fontSize: '13px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              padding: '12px 24px',
              background: '#ec7723',
              color: '#0a0a0a',
              textDecoration: 'none',
              textAlign: 'center',
            }}
          >
            Objednat online
          </a>
        </div>
      )}
    </nav>
  )
}
```

- [ ] **Krok 2: Commit**

```bash
git add components/layout/Navbar.tsx
git commit -m "feat: Navbar s anchor links a mobile hamburger"
```

---

## Task 8: HeroSection

**Files:**
- Create: `components/sections/HeroSection.tsx`

- [ ] **Krok 1: Vytvoř components/sections/HeroSection.tsx**

```tsx
import { RESTIA_URL } from '@/lib/constants'

type Props = {
  ctaRef: React.RefObject<HTMLAnchorElement | null>
}

export default function HeroSection({ ctaRef }: Props) {
  return (
    <section
      id="top"
      className="relative flex items-center justify-center min-h-screen text-center px-6"
    >
      {/* Orange ambient glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(236,119,35,0.12) 0%, transparent 70%)',
          animation: 'pulse 7s ease-in-out infinite',
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Badge */}
        <span
          style={{
            fontSize: '11px',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'rgba(244,237,228,0.35)',
          }}
        >
          Lovosice — Street Food
        </span>

        {/* Headline */}
        <h1
          style={{
            fontFamily: 'var(--font-big-shoulders)',
            fontWeight: 900,
            fontSize: 'clamp(64px, 12vw, 160px)',
            lineHeight: 0.88,
            letterSpacing: '-0.01em',
            textTransform: 'uppercase',
            color: '#f4ede4',
          }}
        >
          Packed<br />
          <span style={{ color: '#ec7723' }}>with Flavor.</span>
        </h1>

        {/* Subline */}
        <p
          style={{
            fontSize: 'clamp(13px, 1.8vw, 16px)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'rgba(244,237,228,0.45)',
            maxWidth: '480px',
          }}
        >
          Wrapy, bowls, fries a wings — rychle, výrazně, bez kompromisů.
        </p>

        {/* CTA */}
        <a
          ref={ctaRef}
          href={RESTIA_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: 'var(--font-big-shoulders)',
            fontWeight: 900,
            fontSize: '14px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            padding: '16px 40px',
            background: '#ec7723',
            color: '#0a0a0a',
            textDecoration: 'none',
            transition: 'background 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = '#f08a35')}
          onMouseLeave={(e) => (e.currentTarget.style.background = '#ec7723')}
        >
          Objednat online
        </a>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 flex flex-col items-center gap-2"
        style={{ opacity: 0.3 }}
      >
        <span style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
          Scroll
        </span>
        <div style={{ width: '1px', height: '40px', background: '#ec7723' }} />
      </div>
    </section>
  )
}
```

- [ ] **Krok 2: Commit**

```bash
git add components/sections/HeroSection.tsx
git commit -m "feat: HeroSection"
```

---

## Task 9: MenuSection

**Files:**
- Create: `components/sections/MenuSection.tsx`

- [ ] **Krok 1: Vytvoř components/sections/MenuSection.tsx**

```tsx
'use client'

import { useState } from 'react'
import { MENU_ITEMS, MENU_CATEGORIES, type MenuCategory } from '@/lib/menu'
import { RESTIA_URL } from '@/lib/constants'
import MenuCard from '@/components/ui/MenuCard'
import MenuFilter from '@/components/ui/MenuFilter'

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('wrapy')

  const filtered = MENU_ITEMS.filter((item) => item.category === activeCategory)

  return (
    <section id="menu" className="py-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* Hlavička */}
        <div className="flex flex-col gap-6">
          <h2
            style={{
              fontFamily: 'var(--font-big-shoulders)',
              fontWeight: 900,
              fontSize: 'clamp(48px, 8vw, 96px)',
              lineHeight: 0.9,
              textTransform: 'uppercase',
              color: '#f4ede4',
            }}
          >
            Menu
          </h2>
          <div
            style={{
              width: '40px',
              height: '2px',
              background: '#ec7723',
            }}
          />
        </div>

        {/* Filter */}
        <MenuFilter active={activeCategory} onChange={setActiveCategory} />

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center pt-4">
          <a
            href={RESTIA_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-big-shoulders)',
              fontWeight: 900,
              fontSize: '13px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              padding: '16px 40px',
              background: '#ec7723',
              color: '#0a0a0a',
              textDecoration: 'none',
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#f08a35')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#ec7723')}
          >
            Objednat online
          </a>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Krok 2: Commit**

```bash
git add components/sections/MenuSection.tsx
git commit -m "feat: MenuSection s filtry a grid"
```

---

## Task 10: BrandSection

**Files:**
- Create: `components/sections/BrandSection.tsx`

- [ ] **Krok 1: Vytvoř components/sections/BrandSection.tsx**

```tsx
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
        {/* Text */}
        <div className="flex flex-col gap-8">
          <h2
            style={{
              fontFamily: 'var(--font-big-shoulders)',
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

        {/* Pilíře */}
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
                    fontFamily: 'var(--font-big-shoulders)',
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
```

- [ ] **Krok 2: Commit**

```bash
git add components/sections/BrandSection.tsx
git commit -m "feat: BrandSection s piliri znacky"
```

---

## Task 11: LocationSection

**Files:**
- Create: `components/sections/LocationSection.tsx`

- [ ] **Krok 1: Vytvoř components/sections/LocationSection.tsx**

```tsx
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
            fontFamily: 'var(--font-big-shoulders)',
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
          {/* Info */}
          <div className="flex flex-col gap-8">
            {/* Adresa */}
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

            {/* Otevírací doba */}
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

          {/* Mapa */}
          <div
            className="w-full rounded-sm overflow-hidden"
            style={{ height: '320px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1244.5!2d14.0525!3d50.5152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z8a4gbcOhamEgMjUsIExvdm9zaWNl!5e0!3m2!1scs!2scz!4v1"
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
```

- [ ] **Krok 2: Commit**

```bash
git add components/sections/LocationSection.tsx
git commit -m "feat: LocationSection s adresou a oteviracidobou"
```

---

## Task 12: Footer a StickyOrderButton

**Files:**
- Create: `components/layout/Footer.tsx`
- Create: `components/layout/StickyOrderButton.tsx`

- [ ] **Krok 1: Vytvoř components/layout/Footer.tsx**

```tsx
import Image from 'next/image'
import { SOCIAL } from '@/lib/constants'

export default function Footer() {
  return (
    <footer
      className="py-12 px-6"
      style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <Image
          src="/SVG/full-logo.svg"
          alt="WRAPSY"
          width={120}
          height={26}
        />

        <a
          href={SOCIAL.instagram}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: '11px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(244,237,228,0.4)',
            textDecoration: 'none',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#ec7723')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(244,237,228,0.4)')}
        >
          {SOCIAL.instagramHandle}
        </a>

        <span style={{ fontSize: '11px', color: 'rgba(244,237,228,0.2)', letterSpacing: '0.1em' }}>
          © {new Date().getFullYear()} WRAPSY
        </span>
      </div>
    </footer>
  )
}
```

- [ ] **Krok 2: Vytvoř components/layout/StickyOrderButton.tsx**

```tsx
'use client'

import { useEffect, useState } from 'react'
import { RESTIA_URL } from '@/lib/constants'

type Props = {
  heroCTARef: React.RefObject<HTMLAnchorElement | null>
}

export default function StickyOrderButton({ heroCTARef }: Props) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!heroCTARef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    )

    observer.observe(heroCTARef.current)
    return () => observer.disconnect()
  }, [heroCTARef])

  return (
    <a
      href={RESTIA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 transition-all duration-300"
      style={{
        fontFamily: 'var(--font-big-shoulders)',
        fontWeight: 900,
        fontSize: '13px',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        padding: '14px 28px',
        background: '#ec7723',
        color: '#0a0a0a',
        textDecoration: 'none',
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        transform: visible ? 'translateY(0)' : 'translateY(16px)',
        boxShadow: '0 4px 24px rgba(236,119,35,0.3)',
      }}
    >
      Objednat online
    </a>
  )
}
```

- [ ] **Krok 3: Commit**

```bash
git add components/layout/Footer.tsx components/layout/StickyOrderButton.tsx
git commit -m "feat: Footer a StickyOrderButton"
```

---

## Task 13: HomePage assembly

**Files:**
- Create: `components/HomePage.tsx`

- [ ] **Krok 1: Vytvoř components/HomePage.tsx**

```tsx
'use client'

import { useRef } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import StickyOrderButton from '@/components/layout/StickyOrderButton'
import HeroSection from '@/components/sections/HeroSection'
import MenuSection from '@/components/sections/MenuSection'
import BrandSection from '@/components/sections/BrandSection'
import LocationSection from '@/components/sections/LocationSection'

export default function HomePage() {
  const heroCTARef = useRef<HTMLAnchorElement>(null)

  return (
    <>
      <Navbar />
      <main>
        <HeroSection ctaRef={heroCTARef} />
        <MenuSection />
        <BrandSection />
        <LocationSection />
      </main>
      <Footer />
      <StickyOrderButton heroCTARef={heroCTARef} />
    </>
  )
}
```

- [ ] **Krok 2: Commit**

```bash
git add components/HomePage.tsx
git commit -m "feat: HomePage assembly"
```

---

## Task 14: Spuštění dev serveru a ověření

**Files:**
- Modify: `.env.local` (přepnout na `live` pro lokální náhled)

- [ ] **Krok 1: Přepni na live lokálně**

Uprav `.env.local`:
```
NEXT_PUBLIC_SITE_MODE=live
```

- [ ] **Krok 2: Spusť dev server**

```bash
npm run dev
```

Otevři `http://localhost:3000` a ověř:
- [ ] Logo se zobrazuje v Navbaru
- [ ] Hero sekce s headlinem a CTA tlačítkem
- [ ] Menu sekce — filter tabs fungují, karty se zobrazují
- [ ] Brand sekce — text a pilíře
- [ ] Lokace — adresa, hodiny, mapa
- [ ] Footer
- [ ] Sticky button se zobrazí po scrollu dolů

- [ ] **Krok 3: Přepni zpět na coming_soon**

```
NEXT_PUBLIC_SITE_MODE=coming_soon
```

Ověř že `localhost:3000` ukazuje coming soon stránku.

- [ ] **Krok 4: Commit a push**

```bash
git add -A
git commit -m "chore: ověření lokálního buildu"
git push
```

---

## Task 15: Deploy na Vercel

- [ ] **Krok 1: Nastav env variable na Vercelu (production = coming_soon)**

```bash
export PATH="$HOME/.npm-global/bin:$PATH"
vercel env add NEXT_PUBLIC_SITE_MODE production
# hodnota: coming_soon
```

- [ ] **Krok 2: Deploy**

```bash
vercel --prod --yes
```

- [ ] **Krok 3: Ověř na wrapsy.cz**

Otevři `https://wrapsy.cz` — měla by se zobrazit coming soon stránka (ne nový web).

- [ ] **Krok 4: Až budeš chtít spustit plný web**

V Vercel dashboardu: Settings → Environment Variables → `NEXT_PUBLIC_SITE_MODE` → změň na `live` → Redeploy.

---

## Poznámky

- **Google Maps embed** v LocationSection bude potřeba aktualizovat se správným embed URL pro konkrétní adresu
- **Restia URL** (`https://online.restia.cz/wrapsy`) potvrdit až bude účet aktivní
- **Fotky jídel** — až budou k dispozici, přidat do `public/images/menu/` a aktualizovat `MenuCard` komponentu
- **Franšíza sekce** — připomenout v další fázi (bylo domluveno)
