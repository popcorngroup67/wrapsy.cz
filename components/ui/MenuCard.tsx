import type { MenuItem } from '@/lib/menu'

type Props = {
  item: MenuItem
}

export default function MenuCard({ item }: Props) {
  return (
    <div
      className="group flex flex-col rounded-sm overflow-hidden border transition-colors duration-200"
      style={{
        background: 'rgba(255,255,255,0.03)',
        borderColor: 'rgba(255,255,255,0.08)',
      }}
    >
      {/* Placeholder until real food photos are available */}
      <div
        className="aspect-square w-full flex items-center justify-center"
        style={{ background: 'rgba(236,119,35,0.06)' }}
      >
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 900,
            fontSize: '13px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(236,119,35,0.3)',
          }}
        >
          Foto brzy
        </span>
      </div>

      <div className="p-3 md:p-4 flex flex-col gap-1">
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 900,
            fontSize: 'clamp(14px, 3vw, 18px)',
            letterSpacing: '0.02em',
            textTransform: 'uppercase',
            color: '#f4ede4',
          }}
        >
          {item.name}
        </h3>
        <p
          style={{
            fontSize: '12px',
            color: 'rgba(244,237,228,0.45)',
            lineHeight: '1.5',
          }}
        >
          {item.description}
        </p>
      </div>
    </div>
  )
}
