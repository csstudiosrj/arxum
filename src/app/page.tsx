export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">ARXUM</h1>
        <p className="text-lg text-gray-400">Soluções inteligentes para gestão e produção.</p>
        <nav className="flex gap-4 justify-center mt-8">
          <a href="/poseidon" className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-6 py-3 rounded-lg transition-all">Poseidon</a>
          <a href="/fest" className="bg-gray-800 hover:bg-gray-700 text-white font-semibold px-6 py-3 rounded-lg transition-all">Fest</a>
          <a href="/crew" className="bg-gray-800 hover:bg-gray-700 text-white font-semibold px-6 py-3 rounded-lg transition-all">Crew</a>
        </nav>
        <p className="text-xs text-gray-600 mt-12">© 2026 ARXUM Sistemas — Todos os direitos reservados.</p>
      </div>
    </main>
  );
}