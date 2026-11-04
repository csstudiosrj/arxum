import type { ReactNode } from 'react'
import Link from 'next/link'
import { CONTACT_EMAIL } from './products'

// Identificação de quem opera a ARXUM, usada nos documentos legais.
export const EMPRESA = {
  marca: 'ARXUM Sistemas',
  razaoSocial: 'Creative Solutions Comunicação Ltda.',
  cnpj: '18.550.581/0001-09',
  cidade: 'Rio de Janeiro/RJ',
  email: CONTACT_EMAIL,
}

export type Secao = { id: string; titulo: string; corpo: ReactNode }

// Página de documento legal (Termos de Uso, Política de Privacidade): sumário
// com âncoras e texto em largura de leitura confortável.
export function DocumentoLegal({ titulo, versao, vigencia, resumo, secoes }: {
  titulo: string
  versao: string
  vigencia: string
  resumo: ReactNode
  secoes: Secao[]
}) {
  return (
    <div className="min-h-screen bg-[#05070a] text-white">
      <header className="border-b border-white/[0.06]">
        <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-5 sm:px-8">
          <Link href="/" className="font-display text-xl font-extrabold tracking-[-0.04em]">ARX<span className="text-[#1db954]">UM</span></Link>
          <nav className="flex gap-5 text-sm text-white/50">
            <a href="/termos-de-uso" className="transition hover:text-white">Termos de Uso</a>
            <a href="/privacidade" className="transition hover:text-white">Privacidade</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-5 py-14 sm:px-8">
        <h1 className="font-display text-4xl font-extrabold tracking-[-0.03em] sm:text-5xl">{titulo}</h1>
        <p className="mt-4 text-sm text-white/40">Versão {versao} · em vigor desde {vigencia}</p>

        <div className="mt-8 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 text-[15px] leading-relaxed text-white/70">
          {resumo}
        </div>

        <nav aria-label="Sumário" className="mt-10">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/35">Sumário</p>
          <ol className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
            {secoes.map((s, i) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="text-white/55 transition hover:text-white">{i + 1}. {s.titulo}</a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="mt-12 space-y-12">
          {secoes.map((s, i) => (
            <section key={s.id} id={s.id} className="scroll-mt-8">
              <h2 className="font-display text-xl font-bold tracking-[-0.02em] sm:text-2xl">{i + 1}. {s.titulo}</h2>
              <div className="mt-4 space-y-4 text-[15px] leading-[1.75] text-white/70">{s.corpo}</div>
            </section>
          ))}
        </div>

        <p className="mt-16 border-t border-white/[0.06] pt-8 text-sm leading-relaxed text-white/40">
          {EMPRESA.marca} é marca de {EMPRESA.razaoSocial}, CNPJ {EMPRESA.cnpj}, com sede em {EMPRESA.cidade}.
          Contato: <a href={`mailto:${EMPRESA.email}`} className="text-white/60 underline underline-offset-2 hover:text-white">{EMPRESA.email}</a>.
        </p>
      </main>
    </div>
  )
}

// Peças de texto reutilizadas nos documentos.
export const Lista = ({ children }: { children: ReactNode }) => (
  <ul className="list-disc space-y-2 pl-5 marker:text-white/30">{children}</ul>
)

export const Item = ({ titulo, children }: { titulo?: string; children: ReactNode }) => (
  <li>{titulo && <strong className="font-semibold text-white/90">{titulo} </strong>}{children}</li>
)

export const Destaque = ({ children }: { children: ReactNode }) => (
  <strong className="font-semibold text-white/90">{children}</strong>
)

export function Tabela({ cabecalho, linhas }: { cabecalho: string[]; linhas: ReactNode[][] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-white/[0.08]">
      <table className="w-full min-w-[640px] text-left text-sm">
        <thead className="bg-white/[0.04] text-white/80">
          <tr>{cabecalho.map((c) => <th key={c} className="px-4 py-3 font-semibold">{c}</th>)}</tr>
        </thead>
        <tbody className="divide-y divide-white/[0.06] align-top text-white/65">
          {linhas.map((l, i) => (
            <tr key={i}>{l.map((c, j) => <td key={j} className="px-4 py-3 leading-relaxed">{c}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
