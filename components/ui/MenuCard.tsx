import Image from 'next/image'
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
      <div
        className="aspect-square w-full relative overflow-hidden"
        style={{ background: 'rgba(236,119,35,0.06)' }}
      >
        {item.image ? (
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
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
        )}

        <div className="absolute top-2 right-2 flex flex-col gap-1 items-end">
          {item.star && (
            <span
              style={{
                fontSize: '10px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                background: '#ec7723',
                color: '#0a0a0a',
                padding: '2px 6px',
              }}
            >
              ⭐ TOP
            </span>
          )}
          {item.hot && (
            <span
              style={{
                fontSize: '10px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                background: '#c0392b',
                color: '#fff',
                padding: '2px 6px',
              }}
            >
              🌶️ HOT
            </span>
          )}
        </div>
      </div>

      <div className="p-3 md:p-4 flex flex-col gap-1 flex-1">
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 900,
            fontSize: 'clamp(13px, 2.5vw, 16px)',
            letterSpacing: '0.02em',
            textTransform: 'uppercase',
            color: '#f4ede4',
            lineHeight: 1.2,
          }}
        >
          {item.name}
        </h3>
        <p
          style={{
            fontSize: '11px',
            color: 'rgba(244,237,228,0.4)',
            lineHeight: '1.5',
            flexGrow: 1,
          }}
        >
          {item.description}
        </p>
      </div>
    </div>
  )
}
