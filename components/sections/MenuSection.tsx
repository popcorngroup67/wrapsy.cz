'use client'

import { useState } from 'react'
import { MENU_ITEMS, type MenuCategory } from '@/lib/menu'
import { RESTIA_URL } from '@/lib/constants'
import MenuCard from '@/components/ui/MenuCard'
import MenuFilter from '@/components/ui/MenuFilter'

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('wrapy')

  const filtered = MENU_ITEMS.filter((item) => item.category === activeCategory)

  return (
    <section id="menu" className="py-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* Section header */}
        <div className="flex flex-col gap-6">
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 900,
              fontSize: 'clamp(48px, 8vw, 96px)',
              lineHeight: 0.9,
              textTransform: 'uppercase',
              color: '#f4ede4',
            }}
          >
            Menu
          </h2>
          <div style={{ width: '40px', height: '2px', background: '#ec7723' }} />
        </div>

        {/* Category filter tabs */}
        <MenuFilter active={activeCategory} onChange={setActiveCategory} />

        {/* Food grid — no prices shown */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>

        {/* Section CTA */}
        <div className="flex justify-center pt-4">
          <a
            href={RESTIA_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 900,
              fontSize: '13px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              padding: '16px 40px',
              background: '#ec7723',
              color: '#0a0a0a',
              textDecoration: 'none',
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#f08a35')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#ec7723')}
          >
            Objednat online
          </a>
        </div>
      </div>
    </section>
  )
}
