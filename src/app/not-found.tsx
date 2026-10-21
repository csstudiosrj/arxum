import type { Metadata } from "next";

export const metadata: Metadata = { title: "Página não encontrada", robots: { index: false } };

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#05070a] px-5 text-center text-white">
      <p className="font-display text-xl font-extrabold tracking-[-0.04em]">ARXUM</p>
      <h1 className="font-display mt-10 text-6xl font-extrabold tracking-[-0.04em] sm:text-8xl">404</h1>
      <p className="mt-4 max-w-sm text-white/55">Esta página não existe ou mudou de endereço.</p>
      <a href="/" className="mt-10 inline-flex h-12 items-center rounded-full bg-white px-7 text-sm font-semibold text-black transition hover:bg-white/90">Voltar ao início</a>
    </main>
  );
}
