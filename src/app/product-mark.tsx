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

  if (product.slug === 'zelo') {
    // símbolo do Zelo: escudo com portão
    return (
      <span className="flex items-center justify-center rounded-xl border" style={{ ...box, borderColor: `${product.color}40`, background: `${product.color}14` }} aria-hidden>
        <svg width={size * 0.62} height={size * 0.62} viewBox="0 0 24 24" fill="none">
          <path d="M12 2 L20 5 V11 C20 16.2 16.6 20.3 12 22 C7.4 20.3 4 16.2 4 11 V5 Z" fill={product.color} fillOpacity="0.12" stroke={product.color} strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M8.5 17 V10.5 a3.5 3.5 0 0 1 7 0 V17" stroke={product.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="8.5" y1="13.5" x2="15.5" y2="13.5" stroke={product.color} strokeWidth="1.6" strokeLinecap="round" />
          <line x1="8.5" y1="17" x2="15.5" y2="17" stroke={product.color} strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="12" cy="7.2" r="1.1" fill={product.color} />
        </svg>
      </span>
    )
  }

  // Símbolos de Fest, Crew, Edu e Suite (traço 1.8, preenchimento a 12%).
  const c = product.color
  const simbolos: Record<string, React.ReactNode> = {
    // ingresso com estrela
    fest: (
      <>
        <path d="M4 7.5a1.5 1.5 0 0 1 1.5-1.5h13a1.5 1.5 0 0 1 1.5 1.5v2a2.5 2.5 0 0 0 0 5v2a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 16.5v-2a2.5 2.5 0 0 0 0-5Z" fill={c} fillOpacity="0.12" stroke={c} strokeWidth="1.8" strokeLinejoin="round" />
        <path d="m12 9 .9 1.85 2 .3-1.45 1.4.35 2-1.8-.95-1.8.95.35-2-1.45-1.4 2-.3Z" fill={c} />
      </>
    ),
    // crachá de equipe
    crew: (
      <>
        <rect x="4.5" y="5.5" width="15" height="16" rx="3" fill={c} fillOpacity="0.12" stroke={c} strokeWidth="1.8" />
        <path d="M9.5 5.5V3.8a1.3 1.3 0 0 1 1.3-1.3h2.4a1.3 1.3 0 0 1 1.3 1.3v1.7" stroke={c} strokeWidth="1.8" strokeLinejoin="round" />
        <circle cx="12" cy="11.4" r="2.3" stroke={c} strokeWidth="1.8" />
        <path d="M8.3 18.2a3.7 3.7 0 0 1 7.4 0" stroke={c} strokeWidth="1.8" strokeLinecap="round" />
      </>
    ),
    // livro aberto com o ponto da ideia
    edu: (
      <>
        <path d="M12 7.2C10.2 5.7 7.3 5.2 3.5 5.6v12.6c3.8-.4 6.7.1 8.5 1.6 1.8-1.5 4.7-2 8.5-1.6V5.6c-3.8-.4-6.7.1-8.5 1.6Z" fill={c} fillOpacity="0.12" stroke={c} strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M12 7.2v12.6" stroke={c} strokeWidth="1.8" />
        <circle cx="12" cy="3" r="1.2" fill={c} />
      </>
    ),
    // módulos: um ativo, três disponíveis
    suite: (
      <>
        <rect x="3.5" y="3.5" width="7.5" height="7.5" rx="2" fill={c} />
        <rect x="13" y="3.5" width="7.5" height="7.5" rx="2" fill={c} fillOpacity="0.12" stroke={c} strokeWidth="1.8" />
        <rect x="3.5" y="13" width="7.5" height="7.5" rx="2" fill={c} fillOpacity="0.12" stroke={c} strokeWidth="1.8" />
        <rect x="13" y="13" width="7.5" height="7.5" rx="2" fill={c} fillOpacity="0.12" stroke={c} strokeWidth="1.8" />
      </>
    ),
  }

  if (simbolos[product.slug]) {
    return (
      <span className="flex items-center justify-center rounded-xl border" style={{ ...box, borderColor: `${c}40`, background: `${c}14` }} aria-hidden>
        <svg width={size * 0.6} height={size * 0.6} viewBox="0 0 24 24" fill="none">
          {simbolos[product.slug]}
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
