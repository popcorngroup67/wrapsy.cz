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
  { days: 'Pá – So', time: '10:00 – 21:00' },
  { days: 'Ne',      time: 'Zavřeno' },
]

export const PHONE = {
  display: '+420 606 724 681',
  href: 'tel:+420606724681',
  e164: '+420606724681',
}

export const SOCIAL = {
  instagram: 'https://instagram.com/wrapsycz',
  instagramHandle: '@wrapsycz',
}

// GA4 — ID z env (Vercel), fallback na produkční property PopCorn / wrapsy.cz
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-8KJ4RMF5BX'

export const PRIVACY_PATH = '/ochrana-osobnich-udaju'

// Provozovatel (ARES, ověřeno 23. 11. 2026)
export const COMPANY = {
  name: 'CIDAD.YOSEF s.r.o.',
  ico: '07198787',
  seat: 'Dr. Davida Bechera 907/27, 360 01 Karlovy Vary',
  register: 'C 39387 vedená u Krajského soudu v Plzni',
  email: 'ahoj@wrapsy.cz',
}
