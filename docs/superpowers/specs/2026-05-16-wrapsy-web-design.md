# WRAPSY Web — Design Spec
_2026-05-16_

## Kontext

Plný web pro WRAPSY — moderní street food chain z Lovosic. Nahrazuje současnou coming soon stránku (`index.html`). Coming soon zůstane živé přes env variable dokud není web připraven ke spuštění.

**Stávající setup:**
- Vercel projekt: `popcorngroup67s-projects/wrapsy.cz`
- Doména: `wrapsy.cz` (+ `www.wrapsy.cz`, `go.wrapsy.cz`)
- GitHub: `github.com/popcorngroup67/wrapsy.cz`
- Akcentová barva: `#ec7723`, pozadí: `#0a0a0a`

---

## Tech Stack

- **Framework:** Next.js App Router (TypeScript)
- **Styling:** Tailwind CSS
- **Fonty:** Big Shoulders Display (headlinesy) + Outfit (body) — Google Fonts
- **Deployment:** Vercel (stávající projekt)
- **Obrázky:** Next.js `<Image>` s placeholdery, připraveno na reálné fotky

---

## Coming Soon Gate

Env variable `NEXT_PUBLIC_SITE_MODE`:
- `coming_soon` → renderuje `<ComingSoonPage>` (konverze současného `index.html`)
- `live` → renderuje plný web

Na Vercelu production env nastaveno na `coming_soon`. Přepnutí = změna env hodnoty v Vercel dashboard, bez nutnosti nového deploye (nebo s rychlým redeploy).

`app/page.tsx` obsahuje podmínku:
```tsx
if (process.env.NEXT_PUBLIC_SITE_MODE === 'coming_soon') {
  return <ComingSoonPage />
}
return <HomePage />
```

---

## Architektura

### Stránky / Routes

```
app/
  page.tsx          — homepage (nebo coming soon gate)
  layout.tsx        — root layout, fonty, metadata
  globals.css       — CSS variables, base styles
```

### Komponenty

```
components/
  layout/
    Navbar.tsx          — logo, anchor links, CTA button
    Footer.tsx          — logo, Instagram, copyright
    StickyOrderButton.tsx — fixed bottom CTA, skryje se když hero CTA ve viewportu
  sections/
    HeroSection.tsx     — fullscreen hero
    MenuSection.tsx     — filter tabs + menu grid
    BrandSection.tsx    — příběh + pilíře
    LocationSection.tsx — adresa, hodiny, mapa
  ui/
    MenuCard.tsx        — karta jídla (fotka, název, popis)
    MenuFilter.tsx      — filter tabs (Wrapy/Bowls/Fries/Wings)
  ComingSoonPage.tsx    — konverze současného index.html
  HomePage.tsx          — sestavuje sekce do one-pageru
  
lib/
  menu.ts           — statická data menu
  constants.ts      — Restia URL, adresa, hodiny
```

---

## Sekce

### Navbar
- Logo vlevo (SVG z `public/SVG/`)
- Anchor links: Menu, O nás, Kde nás najdeš
- CTA button vpravo: "Objednat online" → Restia URL
- Na mobile: hamburger menu
- Průhledný na hero, tmavý při scrollu (`backdrop-blur`)

### Hero
- Full viewport height
- Velký headline (Big Shoulders Display): tbd — brand tagline
- Subline: "Lovosice — Packed with Flavor"
- CTA button: "Objednat online" → Restia URL (primary, orange)
- Pozadí: tmavé s grain texturou a orange glow (stejné jako coming soon)
- Fotka nebo placeholder pozadí jídla

### Menu sekce
- Nadpis: "Menu"
- Filter tabs: Wrapy / Bowls / Fries / Wings
- Grid karet: 2 sloupce mobile, 3-4 desktop
- Karta: placeholder fotka (1:1), název, krátký popis (1 řádek)
- **Žádné ceny**
- Na konci sekce: CTA button "Objednat online"

#### Menu položky

**Wrapy:**
- Classic WRAPSY — kuřecí, římský salát, rajče, cheddar, WRAPSY omáčka
- Spicy Ranch — kuřecí, jalapeños, červené zelí, ranch
- BBQ Beef — hovězí, karamelizovaná cibulka, pickles, BBQ omáčka
- Veggie — falafel, hummus, grilovaná zelenina, tahini
- Caesar — kuřecí, caesar dressing, parmazán, krutony

**Bowls:**
- Power Bowl — kuřecí, rýže, avokádo, corn, fazole, lime dressing
- Spicy Bowl — hovězí, rýže, jalapeños, sour cream, salsa
- Veggie Bowl — falafel, quinoa, grilovaná zelenina, tahini

**Fries:**
- Classic — křupavé hranolky, sůl
- Loaded — sýrová omáčka, jalapeños, cibulka
- Truffle — lanýžový olej, parmazán, pažitka

**Wings (6 ks):**
- Buffalo — klasické ostré, blue cheese dip
- Honey Garlic — sladko-česnekové, sezam
- BBQ Smoke — kouřové BBQ, pickles

### Brand sekce
- Krátký příběh WRAPSY (2-3 věty)
- 3 pilíře: Rychlost / Chuť / Čerstvost — ikona + nadpis + 1 věta

### Lokace sekce
- Adresa: 8. května 25, 410 02 Lovosice
- Otevírací doba:
  - Po – Čt: 10:00 – 21:00
  - Pá – So: 10:00 – 22:00
  - Ne: 11:00 – 20:00
- Google Maps embed nebo statická mapa s odkazem

### Footer
- Logo
- Odkaz na Instagram (`@wrapsycz`)
- Copyright: © 2026 WRAPSY
- (Franšíza odkaz — přidat v další fázi)

### Sticky Order Button
- Fixed bottom center / bottom right
- "Objednat online" → Restia URL
- Skryje se (opacity 0) pokud je Hero CTA button ve viewportu (IntersectionObserver)
- Vždy viditelný na mobile při scrollu

---

## Vizuální styl

- **Pozadí:** `#0a0a0a`
- **Akcent:** `#ec7723`
- **Text:** `#f4ede4`
- **Muted text:** `rgba(244,237,228,0.35)`
- **Grain overlay:** stejný jako coming soon (CSS SVG filter)
- **Karty:** `rgba(255,255,255,0.04)` background, border `rgba(255,255,255,0.08)`, orange hover

---

## Online objednávání

Restia poskytuje jediný odkaz (žádný embed). Všechny CTA tlačítka odkazují na:
```
https://online.restia.cz/wrapsy
```
_(URL bude upřesněna)_

---

## Co se zatím neřeší

- Franšíza stránka (připomenout v další fázi)
- Blog / novinky
- Věrnostní program
- Více provozoven
- Platby / e-shop

---

## Otevřené otázky

- Finální Restia URL (zatím placeholder)
- Reálné fotky jídel (zatím placeholdery)
- Finální headline pro hero sekci
