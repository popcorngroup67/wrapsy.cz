import ComingSoonPage from '@/components/ComingSoonPage'
import HomePage from '@/components/HomePage'

// Env gate: NEXT_PUBLIC_SITE_MODE=coming_soon keeps the holding page live.
// Switch to "live" in Vercel dashboard when ready to launch.
export default function Page() {
  const isComingSoon = false // TEMP: hardcoded for preview test

  if (isComingSoon) {
    return <ComingSoonPage />
  }

  return <HomePage />
}
