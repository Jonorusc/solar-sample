"use client"

import { getTenant } from "@/lib/tenants"
import SimulatorWidget from "@/components/simulator/SimulatorWidget"
import InstitutionalSections from "@/components/InstitutionalSections"
import { CheckCircle2, TrendingDown, Zap } from "lucide-react"

export default function Home() {
  const tenant = getTenant("modelo-solar")

  if (!tenant) return null

  return (
    <div className="min-h-screen bg-[#0F172A] relative overflow-x-hidden text-white">
      {/* Texture Overlay */}
      <div className="fixed inset-0 bg-grain pointer-events-none z-50" />

      {/* Header */}
      <header className="relative z-20 container mx-auto px-6 py-8 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-[#EAB308] text-[#0F172A] flex items-center justify-center font-black text-xl transform transition-transform group-hover:rotate-12">
            {tenant.name.charAt(0)}
          </div>
          <span className="font-black text-xl tracking-tighter uppercase">{tenant.name}</span>
        </div>
        <a href={`https://wa.me/${tenant.whatsapp}`} target="_blank" className="btn-solar hidden md:block">
          Falar com Especialista
        </a>
      </header>

      <main className="relative z-10 container mx-auto px-6 pt-12 pb-24">
        {/* Hero Section - Asymmetric 70/30 */}
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-start mb-40">
          {/* Left: Aggressive Copy */}
          <div className="space-y-12 animate-solar-reveal">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-[#EAB308] font-bold tracking-widest uppercase text-sm">
                <span className="w-8 h-px bg-[#EAB308]" />
                Pare de Rasgar Dinheiro
              </div>
              <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter uppercase italic">
                Sua conta de luz <br />é um <span className="text-[#EAB308]">aluguel</span> <br />
                que nunca acaba.
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 max-w-xl font-medium leading-relaxed">
                {tenant.about} Geramos economia real e liberdade energética com tecnologia de ponta.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="sharp-card border-slate-700 bg-slate-900/50 shadow-none">
                <TrendingDown className="w-8 h-8 text-[#EAB308] mb-4" />
                <h3 className="font-bold text-lg mb-2 uppercase">Redução Imediata</h3>
                <p className="text-slate-400 text-sm">Corte até 95% do custo mensal já no primeiro mês de ativação.</p>
              </div>
              <div className="sharp-card border-slate-700 bg-slate-900/50 shadow-none">
                <Zap className="w-8 h-8 text-[#EAB308] mb-4" />
                <h3 className="font-bold text-lg mb-2 uppercase">Independência</h3>
                <p className="text-slate-400 text-sm">
                  Proteja-se contra os aumentos abusivos e as bandeiras tarifárias.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#EAB308]" />
                <span className="text-sm font-bold uppercase tracking-tight">Instalação Ágil</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#EAB308]" />
                <span className="text-sm font-bold uppercase tracking-tight">Garantia de Performance</span>
              </div>
            </div>
          </div>

          {/* Right: Simulator Widget (The "Lead Key") */}
          <div className="lg:sticky lg:top-32 animate-solar-reveal delay-200">
            <div className="relative group">
              <div className="absolute -inset-4 bg-[#EAB308]/10 blur-3xl rounded-full group-hover:bg-[#EAB308]/20 transition-colors" />

              <div className="relative">
                <div className="bg-slate-900 border-x-4 border-t-4 border-[#EAB308] p-4 text-center">
                  <span className="font-black text-[#EAB308] uppercase tracking-[0.2em] text-xs">
                    Simulador de Economia Real
                  </span>
                </div>
                <SimulatorWidget tenant={tenant} />
              </div>
            </div>
          </div>
        </div>

        {/* Institutional Sections Expansion */}
        <InstitutionalSections tenant={tenant} />
      </main>

      <footer className="bg-black py-12 mt-20 relative z-10 border-t-4 border-[#EAB308]">
        <div className="container mx-auto px-6 text-center space-y-6">
          <div className="font-black text-2xl tracking-tighter uppercase italic">{tenant.name}</div>
          <p className="text-slate-500 text-sm max-w-md mx-auto">
            {tenant.about} <br />© {new Date().getFullYear()} {tenant.name}.
          </p>
          <div className="flex justify-center gap-8 pt-4">
            <a
              href="#"
              className="text-slate-400 hover:text-[#EAB308] transition-colors uppercase text-xs font-bold font-mono"
            >
              Simulador
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-[#EAB308] transition-colors uppercase text-xs font-bold font-mono"
            >
              Projetos
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-[#EAB308] transition-colors uppercase text-xs font-bold font-mono"
            >
              Contato
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
