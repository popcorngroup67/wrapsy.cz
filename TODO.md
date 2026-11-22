# TODO — wrapsy.cz

## Údaje

- GA4: účet PopCorn (team@popcorngroup.cz), property **565415511**, měření **G-8KJ4RMF5BX**,
  retence 14 měsíců, propojeno se Search Console.

## Hotovo

- ✅ 23. 11. 2026 — cookie lišta + GA4 s Consent Mode v2 nasazené (`b9ff7f6`). Na wrapsy.cz ověřeno:
  před souhlasem 0 GA requestů a 0 cookies; po „Přijmout“ `g/collect` s `tid=G-8KJ4RMF5BX`;
  „Odmítnout“ z patičky → reload, `_ga*` smazané.
- ✅ 23. 11. 2026 — Google Maps se načítá až po kliknutí na „Zobrazit mapu“ (`components/ui/MapEmbed.tsx`),
  do té doby žádný request na google.com; zásady upravené.
- ✅ 23. 11. 2026 — provozovatel doplněn do zásad a patičky (IČO od Lukyho, zbytek z ARES:
  CIDAD.YOSEF s.r.o., Dr. Davida Bechera 907/27, 360 01 Karlovy Vary, C 39387 KS Plzeň);
  zásady přidány do sitemap.xml.
- ✅ 23. 11. 2026 — Luky potvrdil: `ahoj@wrapsy.cz` je kontakt pro GDPR; telefonické objednávky berou → doplněno do zásad.
- ✅ 23. 11. 2026 — písma z vlastní domény (Outfit přes next/font, Big Shoulders Display v `public/fonts/`),
  skip link „Přeskočit na obsah“, `package-lock.json` srovnaný (`npm ci` prochází).
- ✅ 23. 11. 2026 — GA4 *V reálném čase* (property 565415511) přijímá data: 2 aktivní uživatelé za 30 min, události page_view, first_visit, session_start, scroll, click.
- ✅ 23. 11. 2026 — nasazeno `e2b0076` (písma, skip link, telefon v zásadách, lockfile); na Vercelu `NEXT_PUBLIC_GA_ID=G-8KJ4RMF5BX` pro production + preview + development.
- ✅ 23. 11. 2026 — na Vercelu smazaná stará `NEXT_PUBLIC_SITE_MODE` (production `coming_soon`, preview `live`); zbývá jen `NEXT_PUBLIC_GA_ID`.
