import type { Metadata, Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://wrapsy.cz'),

  title: {
    default: 'WRAPSY — Packed with Flavor',
    template: '%s | WRAPSY',
  },
  description:
    'WRAPSY — moderní street food chain z Lovosic. Čerstvé wrapy, bowls, fries a wings. Objednávej online nebo nás navštiv na 8. května 25, Lovosice.',
  keywords: [
    'WRAPSY', 'wrapsy', 'wrap', 'wrapy', 'bowls', 'fries', 'wings',
    'street food', 'Lovosice', 'fastfood', 'objednat online', 'jídlo',
    'Wolt', 'foodora', 'Bolt Food', 'Jídlopodnos',
  ],

  // Canonical + alternates
  alternates: {
    canonical: 'https://wrapsy.cz',
    languages: { 'cs-CZ': 'https://wrapsy.cz' },
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Google Search Console verification
  verification: {
    google: 'RAcBQn33Dw3u_zfP12_zJHlk0f5ymGH7O8gA7oDUS2Y',
  },

  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'cs_CZ',
    url: 'https://wrapsy.cz',
    siteName: 'WRAPSY',
    title: 'WRAPSY — Packed with Flavor',
    description:
      'Moderní street food chain. Čerstvé wrapy, bowls, fries a wings. Lovosice.',
    images: [
      {
        url: '/png/full-logo.png',
        width: 1200,
        height: 630,
        alt: 'WRAPSY — Packed with Flavor',
      },
    ],
  },

  // Twitter / X
  twitter: {
    card: 'summary_large_image',
    title: 'WRAPSY — Packed with Flavor',
    description: 'Moderní street food chain. Čerstvé wrapy, bowls, fries a wings.',
    images: ['/png/full-logo.png'],
  },

  // Favicon
  icons: {
    icon: [
      { url: '/SVG/favicon.svg', type: 'image/svg+xml' },
      { url: '/png/favicon.png', type: 'image/png', sizes: '512x512' },
    ],
    shortcut: '/png/favicon.png',
    apple: { url: '/png/favicon.png', sizes: '512x512' },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <head>
        {/* Google Fonts — Big Shoulders Display (headings) + Outfit (body) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@900&family=Outfit:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
