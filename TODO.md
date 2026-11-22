# TODO — wrapsy.cz

## Rozhodnout / schválit

- ❓ Commit + push cookie lišty a GA4 (22. 11. 2026, lokálně ověřeno, necommitnuto) — push = živý web.
- ❓ Google Maps iframe (`components/sections/LocationSection.tsx`) se načítá **před souhlasem**
  a volá `www.google.com` (cookies třetí strany). Návrh: mapa až po kliknutí („Zobrazit mapu“)
  nebo statický obrázek s odkazem na Mapy. Zatím jen přiznáno v zásadách.
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
- 🔨 Na wrapsy.cz ověřit: před souhlasem žádný GA request; po „Přijmout“ odchází `g/collect`;
  v GA4 *V reálném čase* je vidět návštěva.
- 🔨 Přidat `/ochrana-osobnich-udaju` do `public/sitemap.xml`, až budou doplněné údaje správce.

## Mimo rozsah, zjištěno při práci

- 🔨 Chybí „Přeskočit na obsah“ (skip link) jako první fokusovatelný prvek.
- 🔨 Srovnat `package-lock.json` s `package.json` (`npm ci` padá) — samostatný commit.

## Údaje

- GA4: účet PopCorn (team@popcorngroup.cz), property **565415511**, měření **G-8KJ4RMF5BX**,
  retence 14 měsíců, propojeno se Search Console.
