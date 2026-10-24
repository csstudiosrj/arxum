'use client'

import type { CSSProperties, PointerEvent } from 'react'
import type { Product } from './products'
import { ProductMark } from './product-mark'

// Cartão com brilho na cor do produto que acompanha o cursor.
export function ProductCard({ product, index }: { product: Product; index: number }) {
  const move = (e: PointerEvent<HTMLAnchorElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
  }

  return (
    <a
      href={product.href}
      onPointerMove={move}
      className={`product-card group relative isolate flex min-h-[280px] flex-col overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.025] p-7 transition duration-500 hover:-translate-y-1 hover:border-[color:var(--c)]/40 sm:p-8 ${product.span}`}
      style={{ '--c': product.color, animationDelay: `${120 + index * 70}ms` } as CSSProperties}
    >
      <span aria-hidden className="spotlight pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <span aria-hidden className="pointer-events-none absolute -right-24 -top-24 -z-10 size-64 rounded-full opacity-[0.12] blur-3xl transition-opacity duration-700 group-hover:opacity-30" style={{ background: product.color }} />

      <div className="flex items-start justify-between gap-4">
        <ProductMark product={product} />
        <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-white/50">
          {product.status ?? (product.soon ? 'Em breve' : product.segment)}
        </span>
      </div>

      <div className="mt-auto pt-10">
        <h3 className="font-display text-2xl font-bold tracking-[-0.03em] text-white sm:text-[28px]">
          {product.prefix && <span style={{ color: product.color }}>{product.prefix} </span>}
          {product.name}
        </h3>
        <p className="mt-1.5 text-[15px] font-medium text-white/80">{product.tagline}</p>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/45">{product.description}</p>
        <div className="mt-6 flex items-end justify-between gap-4">
          <ul className="flex flex-wrap gap-1.5">
            {product.features.map((f) => (
              <li key={f} className="rounded-md bg-white/[0.04] px-2.5 py-1 text-xs text-white/55">{f}</li>
            ))}
          </ul>
          <span aria-hidden className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/60 transition duration-500 group-hover:border-transparent group-hover:bg-[color:var(--c)] group-hover:text-black">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 12 12 4M5.5 4H12v6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </span>
        </div>
      </div>
    </a>
  )
}
