"use client"

import { useState } from "react"
import { Tenant } from "@/lib/tenants"
import { calculateSolarSystem, SimulationResult } from "@/hooks/useSolarCalculator"
import { Input } from "@/components/ui/input"
import { Zap, ArrowRight, Wallet, AlertCircle } from "lucide-react"

interface SimulatorWidgetProps {
  tenant: Tenant
}

type Step = "INPUT_BILL" | "INPUT_LEAD" | "RESULT"

export default function SimulatorWidget({ tenant }: SimulatorWidgetProps) {
  const [step, setStep] = useState<Step>("INPUT_BILL")
  const [billValue, setBillValue] = useState<string>("")
  const [lead, setLead] = useState({ name: "", phone: "" })
  const [result, setResult] = useState<SimulationResult | null>(null)

  const handleCalculate = () => {
    const value = parseFloat(billValue)
    if (!value || value < tenant.config.minBillValue) {
      alert(`Valor mínimo para análise: R$ ${tenant.config.minBillValue}`)
      return
    }
    const simResult = calculateSolarSystem(value, tenant.config)
    setResult(simResult)
    setStep("INPUT_LEAD")
  }

  const handleShowResult = () => {
    if (!lead.name || !lead.phone) {
      alert("Precisamos dos seus dados para liberar o relatório de economia.")
      return
    }
    setStep("RESULT")
  }

  const handleWhatsApp = () => {
    if (!result) return
    const whatsappMsg = `${tenant.name.toUpperCase()}: Olá! Acabei de fazer a simulação. Minha conta custa R$ ${billValue} e vi que estou perdendo R$ ${result.monthlySavings} todos os meses. Preciso de um projeto urgente.`
    const url = `https://wa.me/${tenant.whatsapp}?text=${encodeURIComponent(whatsappMsg)}`
    window.open(url, "_blank")
  }

  return (
    <div className="w-full bg-[#0F172A] border-4 border-[#EAB308] shadow-[12px_12px_0px_0px_rgba(234,179,8,1)] overflow-hidden">
      <div className="p-8">
        {step === "INPUT_BILL" && (
          <div className="space-y-6 animate-solar-reveal">
            <div className="space-y-4">
              <h2 className="text-2xl font-black uppercase tracking-tighter italic leading-none">
                Quanto você doa <br />
                Pela sua <span className="text-[#EAB308]">Inércia?</span>
              </h2>
              <p className="text-slate-400 text-sm font-medium">
                Informe sua média mensal de energia para calcularmos sua perda.
              </p>
            </div>

            <div className="space-y-2">
              <div className="relative group">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#EAB308] font-black">R$</span>
                <Input
                  type="number"
                  placeholder="0,00"
                  className="pl-12 py-8 bg-slate-900 border-2 border-slate-700 text-2xl font-black text-white rounded-none focus:border-[#EAB308] transition-colors"
                  value={billValue}
                  onChange={(e) => setBillValue(e.target.value)}
                />
              </div>
              <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">
                Valor médio dos últimos 12 meses
              </p>
            </div>

            <button className="btn-solar w-full text-xl" onClick={handleCalculate}>
              Calcular Prejuízo
            </button>
          </div>
        )}

        {step === "INPUT_LEAD" && (
          <div className="space-y-6 animate-solar-reveal">
            <div className="space-y-2">
              <div className="inline-block bg-[#EAB308] text-[#0F172A] px-2 py-0.5 text-[10px] font-black uppercase mb-2">
                Relatório Pronto
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tighter leading-none italic">
                Libere seus <br /> números de <span className="text-[#EAB308]">economia</span>
              </h3>
            </div>

            <div className="space-y-4">
              <Input
                placeholder="SEU NOME COMPLETO"
                className="bg-slate-900 border-2 border-slate-700 py-6 rounded-none font-bold placeholder:text-slate-600 focus:border-[#EAB308]"
                value={lead.name}
                onChange={(e) => setLead({ ...lead, name: e.target.value })}
              />
              <Input
                placeholder="SEU WHATSAPP"
                className="bg-slate-900 border-2 border-slate-700 py-6 rounded-none font-bold placeholder:text-slate-600 focus:border-[#EAB308]"
                value={lead.phone}
                onChange={(e) => setLead({ ...lead, phone: e.target.value })}
              />
              <button className="btn-solar w-full flex items-center justify-center gap-3" onClick={handleShowResult}>
                Ver Resultado <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {step === "RESULT" && result && (
          <div className="space-y-8 animate-solar-reveal">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#EAB308]">
                <AlertCircle className="w-5 h-5" />
                <span className="text-xs font-black uppercase tracking-wider">Análise de Desperdício</span>
              </div>
              <div className="space-y-1">
                <p className="text-slate-400 text-sm font-bold uppercase">Você está perdendo</p>
                <div className="text-5xl font-black text-[#EAB308] tracking-tighter italic">
                  R$ {result.monthlySavings}
                </div>
                <p className="text-slate-500 text-xs font-bold uppercase">A cada 30 dias de espera</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-px bg-slate-800 border-2 border-slate-800">
              <div className="bg-slate-900 p-4">
                <p className="text-[10px] text-slate-500 font-black uppercase mb-1">Custo do Projeto</p>
                <p className="text-lg font-black text-white">R$ {result.systemCost.toLocaleString("pt-BR")}</p>
              </div>
              <div className="bg-slate-900 p-4">
                <p className="text-[10px] text-slate-500 font-black uppercase mb-1">Payback Estimado</p>
                <p className="text-lg font-black text-white">{result.paybackMonths} MESES</p>
              </div>
              <div className="bg-slate-900 p-4">
                <p className="text-[10px] text-slate-500 font-black uppercase mb-1">Geração Mensal</p>
                <p className="text-lg font-black text-white">{Math.round(result.monthlyKwh)} KWH</p>
              </div>
              <div className="bg-slate-900 p-4">
                <p className="text-[10px] text-slate-500 font-black uppercase mb-1">Patrimônio Gerado</p>
                <p className="text-lg font-black text-green-500">+ VALORIZAÇÃO</p>
              </div>
            </div>

            <button
              className="w-full bg-[#25D366] text-black font-black py-5 uppercase tracking-tighter hover:scale-105 transition-transform flex items-center justify-center gap-2"
              onClick={handleWhatsApp}
            >
              Estancar Prejuízo no WhatsApp
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
