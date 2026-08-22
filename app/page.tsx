import HomePage from '@/components/HomePage'
import { ADDRESS, RESTIA_URL, SOCIAL } from '@/lib/constants'

// Site is live. The holding page lives in components/ComingSoonPage.tsx if ever
// needed again — re-gate here and set NEXT_PUBLIC_SITE_MODE to bring it back.

// Static, fully-trusted structured data (no user input) — standard Next.js JSON-LD pattern.
const restaurantSchema = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'WRAPSY',
  description:
    'WRAPSY Lovosice — čerstvé wrapy, křupavé stripsy, pizza 40 cm, bowls a kebab. Objednej online s rozvozem, nebo přijď na 8. května 25, Lovosice.',
  url: 'https://wrapsy.cz',
  image: 'https://wrapsy.cz/png/full-logo.png',
  servesCuisine: ['Street food', 'Kebab', 'Pizza', 'Rychlé občerstvení'],
  priceRange: '100–200 Kč',
  address: {
    '@type': 'PostalAddress',
    streetAddress: ADDRESS.street,
    addressLocality: ADDRESS.city,
    postalCode: ADDRESS.zip,
    addressCountry: 'CZ',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 50.513033,
    longitude: 14.052931,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '21:00',
    },
  ],
  hasMenu: 'https://wrapsy.cz/#menu',
  acceptsReservations: false,
  sameAs: [SOCIAL.instagram],
  potentialAction: {
    '@type': 'OrderAction',
    target: RESTIA_URL,
  },
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger -- static trusted JSON-LD, no user input
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
      />
      <HomePage />
    </>
  )
}
