import type { Metadata } from 'next'
import './globals.css'

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
    <html lang="cs">
      <head>
        {/* Google Fonts — Big Shoulders Display (display headings) + Outfit (body) */}
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
