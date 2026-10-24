import type { Product } from './products'

// Símbolo de cada produto, nas cores da própria marca.
export function ProductMark({ product, size = 48 }: { product: Product; size?: number }) {
  const box = { width: size, height: size }

  if (product.slug === 'normato') {
    return (
      <svg {...box} viewBox="0 0 40 40" fill="none" aria-hidden>
        <rect width="40" height="40" rx="10" fill="#0B1F3A" />
        <rect x="9" y="9" width="5" height="22" rx="1.5" fill="#fff" />
        <rect x="26" y="9" width="5" height="22" rx="1.5" fill="#fff" />
        <line x1="14" y1="9" x2="26" y2="31" stroke="#E8A020" strokeWidth="5" strokeLinecap="round" />
      </svg>
    )
  }

  if (product.slug === 'poseidon') {
    return (
      <span className="flex items-center justify-center rounded-xl border" style={{ ...box, borderColor: `${product.color}40`, background: `${product.color}14` }} aria-hidden>
        <svg width={size * 0.45} height={size * 0.45} viewBox="0 0 24 24" fill="none" stroke={product.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20" /><path d="M12 8l4-4" /><path d="M12 12l6-6" /><path d="M12 16l8-8" />
          <circle cx="12" cy="6" r="1.5" fill={product.color} /><circle cx="16" cy="10" r="1.5" fill={product.color} /><circle cx="20" cy="14" r="1.5" fill={product.color} />
        </svg>
      </span>
    )
  }

  if (product.slug === 'studio') {
    // símbolo "Encaixe": três horários, o do meio encaixado
    return (
      <span className="flex items-center justify-center rounded-xl border" style={{ ...box, borderColor: `${product.color}40`, background: `${product.color}14` }} aria-hidden>
        <svg width={size * 0.58} height={size * 0.58} viewBox="0 0 40 40" fill="none">
          <rect x="5.5" y="5.5" width="22" height="7" rx="3.5" stroke={product.color} strokeWidth="3" />
          <rect x="11" y="15" width="24.5" height="10" rx="5" fill={product.color} />
          <rect x="5.5" y="27.5" width="22" height="7" rx="3.5" stroke={product.color} strokeWidth="3" />
        </svg>
      </span>
    )
  }

  if (product.slug === 'descomplicai') {
    return (
      <span className="flex items-center justify-center rounded-xl border border-[#8B6F5E]/40 bg-[#8B6F5E]/10" style={box} aria-hidden>
        <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: size * 0.36, color: '#c4a593' }}>
          d<span style={{ fontFamily: 'ui-monospace, monospace', fontStyle: 'italic', color: '#10B981' }}>í</span>
        </span>
      </span>
    )
  }

  return (
    <span className="font-display flex items-center justify-center rounded-xl border text-lg font-black" style={{ ...box, borderColor: `${product.color}40`, background: `${product.color}14`, color: product.color }} aria-hidden>
      {product.name[0]}
    </span>
  )
}
