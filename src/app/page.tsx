export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="text-center space-y-8 max-w-4xl">
        {/* Logo ARXUM com brilho */}
        <div className="relative inline-block">
          <h1
            className="text-6xl md:text-7xl font-bold tracking-tight"
            style={{
              fontFamily: "'Syne', sans-serif",
              letterSpacing: '-0.04em',
              background: 'linear-gradient(90deg, #ffffff 0%, #d8e4f0 25%, #ffffff 50%, #d8e4f0 75%, #ffffff 100%)',
              backgroundSize: '200% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'arxumShine 3s linear infinite',
            }}
          >
            ARXUM
          </h1>
          <style jsx>{`
            @keyframes arxumShine {
              0% { background-position: 200% 0; }
              100% { background-position: -200% 0; }
            }
          `}</style>
        </div>

        <p className="text-lg text-gray-400">
          Soluções inteligentes para gestão, automação e produção cultural.
        </p>

        {/* Grid de Produtos — 3 colunas, 2 linhas */}
        <nav className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center mt-10 w-full">
          {/* Suite */}
          <a
            href="/suite"
            className="group bg-gray-900 hover:bg-gray-800 border border-gray-800 hover:border-red-900/50 rounded-xl p-5 transition-all text-left"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-red-950/40 border border-red-800/30 flex items-center justify-center">
                <span className="text-red-400 font-bold text-sm" style={{ fontFamily: "'Syne', sans-serif" }}>S</span>
              </div>
              <span className="font-bold text-lg" style={{ fontFamily: "'Syne', sans-serif", color: '#dc2626' }}>
                ARXUM <span className="text-white">Suite</span>
              </span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              ERP modular. Financeiro, CRM, RH e integrações nativas com toda a família ARXUM.
            </p>
          </a>

          {/* Fest */}
          <a
            href="/fest"
            className="group bg-gray-900 hover:bg-gray-800 border border-gray-800 hover:border-yellow-900/50 rounded-xl p-5 transition-all text-left"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-yellow-950/20 border border-yellow-800/30 flex items-center justify-center">
                <span className="text-yellow-500 font-bold text-sm" style={{ fontFamily: "'Syne', sans-serif" }}>F</span>
              </div>
              <span className="font-bold text-lg" style={{ fontFamily: "'Syne', sans-serif", color: '#d4af37' }}>
                ARXUM <span className="text-white">Fest</span>
              </span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Gestão operacional de festivais. Programação, riders, fornecedores e logística em tempo real.
            </p>
          </a>

          {/* Crew */}
          <a
            href="/crew"
            className="group bg-gray-900 hover:bg-gray-800 border border-gray-800 hover:border-violet-900/50 rounded-xl p-5 transition-all text-left"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-violet-950/30 border border-violet-800/30 flex items-center justify-center">
                <span className="text-violet-400 font-bold text-sm" style={{ fontFamily: "'Syne', sans-serif" }}>C</span>
              </div>
              <span className="font-bold text-lg" style={{ fontFamily: "'Syne', sans-serif", color: '#7c3aed' }}>
                ARXUM <span className="text-white">Crew</span>
              </span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Casting e gestão de freelancers. Escalas, contratos e pagamentos para qualquer segmento.
            </p>
          </a>

          {/* Calculadoras */}
          <a
            href="/calculadoras"
            className="group bg-gray-900 hover:bg-gray-800 border border-gray-800 hover:border-green-900/50 rounded-xl p-5 transition-all text-left"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-green-950/30 border border-green-800/30 flex items-center justify-center">
                <span className="text-green-400 font-bold text-sm" style={{ fontFamily: "'Syne', sans-serif" }}>C</span>
              </div>
              <span className="font-bold text-lg" style={{ fontFamily: "'Syne', sans-serif", color: '#1db954' }}>
                ARXUM <span className="text-white">Calc</span>
              </span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Dimensionamento técnico para eventos. 16 calculadoras baseadas em normas ABNT e legislação federal.
            </p>
          </a>

          {/* Poseidon */}
          <a
            href="/poseidon"
            className="group bg-gray-900 hover:bg-gray-800 border border-gray-800 hover:border-cyan-900/50 rounded-xl p-5 transition-all text-left"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-cyan-950/30 border border-cyan-800/30 flex items-center justify-center">
                {/* Tridente como gráfico de crescimento */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20" />
                  <path d="M12 8l4-4" />
                  <path d="M12 12l6-6" />
                  <path d="M12 16l8-8" />
                  <circle cx="12" cy="6" r="1.5" fill="#22d3ee" />
                  <circle cx="16" cy="10" r="1.5" fill="#22d3ee" />
                  <circle cx="20" cy="14" r="1.5" fill="#22d3ee" />
                </svg>
              </div>
              <span className="font-bold text-lg" style={{ fontFamily: "'Syne', sans-serif", color: '#22d3ee' }}>
                Poseidon
              </span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Controle e auditoria de projetos culturais. Lei Rouanet, FNC, PNAB. Feito para quem vive de edital.
            </p>
          </a>

          {/* Descomplicaí */}
          <a
            href="/descomplicai"
            className="group bg-gray-900 hover:bg-gray-800 border border-gray-800 hover:border-amber-900/50 rounded-xl p-5 transition-all text-left"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-amber-950/20 border border-amber-800/30 flex items-center justify-center">
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: '14px', color: '#8B6F5E' }}>
                  d<span style={{ fontFamily: "'Space Mono', monospace", fontStyle: 'italic', color: '#10B981' }}>í</span>
                </span>
              </div>
              <span className="font-bold text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                <span style={{ color: '#8B6F5E', fontWeight: 300 }}>descomplica</span>
                <span style={{ fontFamily: "'Space Mono', monospace", fontStyle: 'italic', color: '#10B981' }}>í</span>
              </span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Planejamento completo de casamentos. Memorial descritivo, fornecedores, cerimonialistas e checklist inteligente.
            </p>
          </a>
        </nav>

        <p className="text-xs text-gray-600 mt-12">
          © 2026 ARXUM Sistemas — Todos os direitos reservados.
        </p>
      </div>
    </main>
  );
}
