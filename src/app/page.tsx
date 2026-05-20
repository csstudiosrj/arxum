export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="text-center space-y-6 max-w-2xl">
        <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
          ARXUM
        </h1>
        <p className="text-lg text-gray-400">
          Soluções inteligentes para gestão, automação e produção cultural.
        </p>
        
        {/* Grid de Sistemas Atualizado */}
        <nav className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-center mt-8 w-full">
          <a href="/suite" className="bg-gray-900 hover:bg-gray-800 border border-gray-800 text-white font-semibold px-4 py-3 rounded-lg transition-all text-center">
            Suite
          </a>
          <a href="/fest" className="bg-purple-900/40 hover:bg-purple-900/60 border border-purple-800/50 text-purple-200 font-semibold px-4 py-3 rounded-lg transition-all text-center">
            Fest
          </a>
          <a href="/crew" className="bg-gray-900 hover:bg-gray-800 border border-gray-800 text-white font-semibold px-4 py-3 rounded-lg transition-all text-center">
            Crew
          </a>
          <a href="/calculadoras" className="bg-gray-900 hover:bg-gray-800 border border-gray-800 text-white font-semibold px-4 py-3 rounded-lg transition-all text-center">
            Calculadoras
          </a>
          <a href="/poseidon" className="bg-cyan-950/40 hover:bg-cyan-950/60 border border-cyan-800/50 text-cyan-200 font-semibold px-4 py-3 rounded-lg transition-all text-center">
            Poseidon
          </a>
        </nav>

        <p className="text-xs text-gray-600 mt-12">
          © 2026 ARXUM Sistemas — Todos os direitos reservados.
        </p>
      </div>
    </main>
  );
}