import type { MenuCategory } from '@/lib/menu'
import { MENU_CATEGORIES } from '@/lib/menu'

type Props = {
  active: MenuCategory
  onChange: (cat: MenuCategory) => void
}

export default function MenuFilter({ active, onChange }: Props) {
  return (
    <div className="flex gap-2 flex-wrap">
      {MENU_CATEGORIES.map((cat) => {
        const isActive = cat.id === active
        return (
          <button
            key={cat.id}
            onClick={() => onChange(cat.id)}
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 900,
              fontSize: '13px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              padding: '10px 20px',
              border: '1px solid',
              borderColor: isActive ? '#ec7723' : 'rgba(255,255,255,0.12)',
              background: isActive ? '#ec7723' : 'transparent',
              color: isActive ? '#0a0a0a' : 'rgba(244,237,228,0.6)',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          >
            <span style={{ marginRight: '6px' }}>{cat.emoji}</span>{cat.label}
          </button>
        )
      })}
    </div>
  )
}
