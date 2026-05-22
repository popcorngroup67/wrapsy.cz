'use client'

import { useRef } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import StickyOrderButton from '@/components/layout/StickyOrderButton'
import HeroSection from '@/components/sections/HeroSection'
import MenuSection from '@/components/sections/MenuSection'
import BrandSection from '@/components/sections/BrandSection'
import LocationSection from '@/components/sections/LocationSection'
import DeliverySection from '@/components/sections/DeliverySection'
import FranchiseSection from '@/components/sections/FranchiseSection'

// Ref is created here and passed to Hero (attaches to CTA button)
// and StickyOrderButton (watches that element via IntersectionObserver).
export default function HomePage() {
  const heroCTARef = useRef<HTMLAnchorElement>(null)

  return (
    <>
      <Navbar />
      <main>
        <HeroSection ctaRef={heroCTARef} />
        <DeliverySection />
        <MenuSection />
        <BrandSection />
        <FranchiseSection />
        <LocationSection />
      </main>
      <Footer />
      <StickyOrderButton heroCTARef={heroCTARef} />
    </>
  )
}
