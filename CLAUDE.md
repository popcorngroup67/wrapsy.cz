# wrapsy.cz — pravidla projektu

Web klienta **WRAPSY** (street food, 8. května 25, Lovosice). Klient Popcorn Group.
Otevřené body: [`TODO.md`](TODO.md). Původní spec a plán: `docs/superpowers/`.

## Stack a nasazení

- Next.js 16 (App Router, Turbopack), React 19, Tailwind 4, TypeScript. Jen **npm**.
- Repo `popcorngroup67/wrapsy.cz`, Vercel pod `team@popcorngroup.cz`.
- ⚠️ **Push do `main` = okamžité nasazení živého webu.** Commit i push jen po Lukyho výslovném „ano“.
- `go.wrapsy.cz` = přesměrování z QR kódů (`vercel.json`). Neměnit cíle bez klienta — jsou vytištěné.
- Písma jen z vlastní domény: Outfit přes `next/font/google`, Big Shoulders Display jako
  `@font-face` z `public/fonts/` (v `globals.css`). Žádné odkazy na `fonts.googleapis.com` —
  posílaly by IP návštěvníka Googlu bez souhlasu.
- Google Maps jen přes `components/ui/MapEmbed.tsx` (načte se po kliknutí). Žádné další
  iframy třetích stran bez stejného řešení.

## Cookies a analytika — neobcházet

- GA4 `G-8KJ4RMF5BX` (GA účet PopCorn, property 565415511). ID v `lib/constants.ts`
  z `NEXT_PUBLIC_GA_ID` s fallbackem.
- Vše v `components/consent/CookieConsent.tsx`. **gtag.js se načte až po souhlasu**
  (Consent Mode v2: default denied → update granted jen pro `analytics_storage`; reklamní signály zůstávají denied).
- Odmítnutí/odvolání: `ga-disable-<ID>`, consent update denied, smazání `_ga*` na všech
  úrovních domény a reload, když už gtag.js běžel. Tohle **nezjednodušovat** —
  pouhé přepsání localStorage nechá GA měřit dál (chyba vzoru z webu Mostu).
- Žádný další tracking (pixel, Hotjar, …) mimo tuhle komponentu a bez nové kategorie v liště.
- „Přijmout vše“ a „Odmítnout“ musí zůstat vizuálně rovnocenné.
- Pořadí na začátku `<body>`: skip link „Přeskočit na obsah“ (`#obsah` = `<main>`), hned za ním lišta.
- Při změně nástrojů aktualizovat `app/ochrana-osobnich-udaju/page.tsx` a zvednout
  `CONSENT_VERSION` (všem se lišta ukáže znovu).

## Ověření změn v liště

Prohlížeč, ne jen build: první návštěva (žádný request na googletagmanager / google-analytics,
žádné `_ga`) → Přijmout (`g/collect` s `tid=G-…`) → reload → Nastavení cookies v patičce →
Odmítnout (reload, `_ga` pryč, žádné GA requesty).
