import { CONTACT_EMAIL, PRODUCTS, SITE_URL } from './products'
import { ProductCard } from './product-card'
import { ProductMark } from './product-mark'

const PILLARS = [
  {
    title: 'Um produto para cada operação',
    text: 'Em vez de um sistema genérico que serve para tudo e para nada, cada produto ARXUM nasce para um nicho: festivais, equipes, editais, escolas, casamentos.',
  },
  {
    title: 'Feito para a realidade brasileira',
    text: 'Lei Rouanet, normas do Corpo de Bombeiros, meia-entrada, Pix. As regras do Brasil estão no centro do produto, não em um ajuste de última hora.',
  },
  {
    title: 'Uma família que conversa',
    text: 'Os produtos compartilham a mesma base e evoluem juntos, para que a sua operação cresça sem trocar de ferramenta a cada etapa.',
  },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ARXUM',
    url: SITE_URL,
    email: CONTACT_EMAIL,
    description: 'Ecossistema de software para gestão, eventos, cultura e educação.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Produtos ARXUM',
    itemListElement: PRODUCTS.filter((p) => !p.soon).map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: p.prefix ? `${p.prefix} ${p.name}` : p.name,
      url: `${SITE_URL}${p.href}`,
    })),
  },
]

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#05070a] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Fundo: aurora nas cores dos produtos, grade e granulado */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[1100px] overflow-hidden [mask-image:linear-gradient(to_bottom,#000_55%,transparent)]">
        <div className="aurora aurora-a" />
        <div className="aurora aurora-b" />
        <div className="aurora aurora-c" />
        <div className="grid-lines absolute inset-0" />
      </div>
      <div aria-hidden className="grain pointer-events-none fixed inset-0 z-50" />

      <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-[#05070a]/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="/" className="font-display text-xl font-extrabold tracking-[-0.04em]" aria-label="ARXUM, início">ARXUM</a>
          <nav className="flex items-center gap-1 text-sm text-white/60">
            <a href="#produtos" className="hidden rounded-full px-4 py-2 transition hover:text-white sm:block">Produtos</a>
            <a href="#sobre" className="hidden rounded-full px-4 py-2 transition hover:text-white sm:block">Sobre</a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="ml-2 rounded-full bg-white px-4 py-2 font-medium text-black transition hover:bg-white/85">Fale com a gente</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative mx-auto max-w-7xl px-5 pb-24 pt-24 text-center sm:px-8 sm:pt-32 lg:pb-32 lg:pt-40">
          <p className="reveal mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white/60">
            <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px] shadow-emerald-400" />
            Ecossistema ARXUM
          </p>
          <h1 className="reveal font-display mx-auto mt-8 max-w-6xl text-[40px] font-bold leading-[1.02] tracking-[-0.05em] sm:text-6xl lg:text-[76px]" style={{ animationDelay: '80ms' }}>
            Software para quem faz <span className="arxum-shine">acontecer</span>.
          </h1>
          <p className="reveal mx-auto mt-7 max-w-2xl text-base leading-relaxed text-white/55 sm:text-lg" style={{ animationDelay: '160ms' }}>
            Uma família de produtos para gestão, eventos, cultura e educação. Cada um especialista no seu nicho, todos feitos para a realidade brasileira.
          </p>
          <div className="reveal mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row" style={{ animationDelay: '240ms' }}>
            <a href="#produtos" className="group inline-flex h-12 items-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-black transition hover:bg-white/90">
              Conheça os produtos
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="transition group-hover:translate-y-0.5"><path d="M8 3v10m0 0 4-4m-4 4L4 9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex h-12 items-center rounded-full border border-white/15 px-7 text-sm font-medium text-white/80 transition hover:border-white/30 hover:text-white">
              Fale com a gente
            </a>
          </div>

          <ul className="reveal mx-auto mt-20 flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-4" style={{ animationDelay: '320ms' }} aria-label="Produtos">
            {PRODUCTS.map((p) => (
              <li key={p.slug}>
                <a href={p.href} className="flex items-center gap-2.5 text-sm text-white/45 transition hover:text-white">
                  <ProductMark product={p} size={26} />
                  {p.prefix ? `${p.prefix} ${p.name}` : p.name}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section id="produtos" className="mx-auto max-w-7xl scroll-mt-20 px-5 pb-28 sm:px-8">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">Produtos</p>
              <h2 className="font-display mt-3 max-w-xl text-4xl font-bold tracking-[-0.035em] sm:text-5xl">Escolha por onde começar.</h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-white/45">Cada produto funciona sozinho. Juntos, cobrem a operação de ponta a ponta.</p>
          </div>
          <div className="grid gap-4 lg:grid-cols-12">
            {PRODUCTS.map((p, i) => <ProductCard key={p.slug} product={p} index={i} />)}
          </div>
        </section>

        <section id="sobre" className="relative scroll-mt-20 border-y border-white/[0.06] bg-white/[0.015]">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 py-28 sm:px-8 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">Sobre a ARXUM</p>
              <h2 className="font-display mt-3 text-4xl font-bold tracking-[-0.035em] sm:text-5xl">Ferramentas sob medida, não adaptadas.</h2>
            </div>
            <div className="grid gap-10 sm:grid-cols-3 lg:gap-8">
              {PILLARS.map((p, i) => (
                <div key={p.title}>
                  <span className="font-display text-sm font-bold text-white/30">0{i + 1}</span>
                  <h3 className="mt-3 text-lg font-semibold tracking-tight">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/50">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-28 sm:px-8">
          <div className="relative overflow-hidden rounded-[32px] border border-white/[0.08] px-6 py-20 text-center sm:px-16">
            <div aria-hidden className="cta-glow pointer-events-none absolute inset-0" />
            <div className="relative">
              <h2 className="font-display mx-auto max-w-3xl text-4xl font-bold tracking-[-0.035em] sm:text-6xl">Vamos construir a sua operação?</h2>
              <p className="mx-auto mt-5 max-w-xl text-white/55">Conte o que você precisa e indicamos o produto certo, ou a combinação certa, para o seu negócio.</p>
              <a href={`mailto:${CONTACT_EMAIL}`} className="mt-10 inline-flex h-12 items-center rounded-full bg-white px-8 text-sm font-semibold text-black transition hover:bg-white/90">{CONTACT_EMAIL}</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/[0.06]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.2fr_2fr]">
          <div>
            <p className="font-display text-xl font-extrabold tracking-[-0.04em]">ARXUM</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/40">Soluções inteligentes para gestão, automação, eventos, cultura e educação.</p>
          </div>
          <nav aria-label="Produtos" className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm sm:grid-cols-3">
            {PRODUCTS.map((p) => (
              <a key={p.slug} href={p.href} className="text-white/50 transition hover:text-white">{p.prefix ? `${p.prefix} ${p.name}` : p.name}</a>
            ))}
          </nav>
        </div>
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 border-t border-white/[0.06] px-5 py-6 text-xs text-white/30 sm:flex-row sm:px-8">
          <p>© 2026 ARXUM Sistemas. Todos os direitos reservados.</p>
          <a href={`mailto:${CONTACT_EMAIL}`} className="transition hover:text-white/60">{CONTACT_EMAIL}</a>
        </div>
      </footer>
    </div>
  )
}
