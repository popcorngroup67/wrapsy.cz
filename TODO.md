# TODO — wrapsy.cz

## Rozhodnout / schválit

- ❓ Google Fonts z `fonts.googleapis.com` předávají IP Googlu bez souhlasu. Návrh: přejít na
  `next/font/google` (self-hosting, žádný request na Google, i rychlejší).

## Čeká na klienta (WRAPSY)

- 📧 Údaje správce do `app/ochrana-osobnich-udaju/page.tsx` (`CONTROLLER`): obchodní firma /
  jméno, **IČO**, **sídlo**, **kontaktní e-mail** pro GDPR + datum platnosti. Teď tam jsou `[DOPLNIT]`.
- 📧 Potvrdit, zda berou objednávky po telefonu (jméno, adresa) — pak doplnit účel do zásad.
- 📧 IČO a sídlo provozovatele i do patičky (povinná identifikace podnikatele).

## Po nasazení

- 🔨 Na Vercelu nastavit `NEXT_PUBLIC_GA_ID=G-8KJ4RMF5BX` (production + preview + development) —
  volitelné, kód má fallback; projeví se až dalším buildem.
- 🔨 V GA4 *V reálném čase* zkontrolovat, že návštěvy přicházejí (test z prohlížeče agenta se tam nemusí započítat).
- 🔨 Přidat `/ochrana-osobnich-udaju` do `public/sitemap.xml`, až budou doplněné údaje správce.

## Mimo rozsah, zjištěno při práci

- 🔨 Chybí „Přeskočit na obsah“ (skip link) jako první fokusovatelný prvek.
- 🔨 Srovnat `package-lock.json` s `package.json` (`npm ci` padá) — samostatný commit.

## Údaje

- GA4: účet PopCorn (team@popcorngroup.cz), property **565415511**, měření **G-8KJ4RMF5BX**,
  retence 14 měsíců, propojeno se Search Console.

## Hotovo

- ✅ 23. 11. 2026 — cookie lišta + GA4 s Consent Mode v2 nasazené (`b9ff7f6`). Na wrapsy.cz ověřeno:
  před souhlasem 0 GA requestů a 0 cookies; po „Přijmout“ `g/collect` s `tid=G-8KJ4RMF5BX`;
  „Odmítnout“ z patičky → reload, `_ga*` smazané.
- ✅ 23. 11. 2026 — Google Maps se načítá až po kliknutí na „Zobrazit mapu“ (`components/ui/MapEmbed.tsx`),
  do té doby žádný request na google.com; zásady upravené.
