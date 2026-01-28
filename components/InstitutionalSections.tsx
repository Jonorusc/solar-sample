import {
  Zap,
  TrendingDown,
  Clock,
  ShieldCheck,
  PlayCircle,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
} from "lucide-react"
import { Tenant } from "@/lib/tenants"

interface InstitutionalSectionsProps {
  tenant: Tenant
}

export default function InstitutionalSections({ tenant }: InstitutionalSectionsProps) {
  const facebookUrl = tenant.facebook || "#"
  const instagramUrl = tenant.instagram || "#"
  const mapsUrl = process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL || ""
  const whatsappNumber = tenant.whatsapp || "5511999999999"

  return (
    <div className="space-y-32 pb-20">
      {/* 1. Benefits Section */}
      <section className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4 animate-solar-reveal">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic">
            Por que escolher a <span className="text-[#EAB308]">{tenant.name}</span>?
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto font-medium">
            Entregamos mais que painéis: entregamos independência financeira e previsibilidade para sua vida ou negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: TrendingDown,
              title: "Economia Real",
              desc: "Redução de até 95% na conta de luz desde o primeiro mês.",
            },
            {
              icon: ShieldCheck,
              title: "Durabilidade",
              desc: "Sistemas projetados para performar por mais de 25 anos.",
            },
            { icon: Clock, title: "Instalação Ágil", desc: "Processo limpo, rápido e homologado na concessionária." },
            { icon: Zap, title: "Alta Eficiência", desc: "Equipamentos de última geração com máxima captação solar." },
          ].map((benefit, i) => (
            <div key={i} className="sharp-card group hover:bg-[#EAB308] transition-colors duration-300">
              <benefit.icon className="w-12 h-12 text-[#EAB308] group-hover:text-[#0F172A] mb-6 transition-colors" />
              <h3 className="font-black uppercase tracking-tighter mb-2 group-hover:text-[#0F172A] transition-colors">
                {benefit.title}
              </h3>
              <p className="text-slate-400 text-sm group-hover:text-[#0F172A]/80 transition-colors font-medium">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Featured Projects Grid */}
      <section className="bg-slate-900 py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-end mb-16">
            <div className="space-y-4">
              <span className="text-[#EAB308] font-black uppercase text-xs tracking-[0.3em]">Portfolio</span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic leading-none">
                Nossos Projetos <br /> em <span className="text-[#EAB308]">Destaque</span>
              </h2>
            </div>
            <p className="text-slate-400 font-medium max-w-md">
              Instalações realizadas com excelência técnica e satisfação total dos clientes.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-square bg-slate-800 relative group overflow-hidden">
                <div className="absolute inset-0 bg-[#EAB308]/20 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                <div className="absolute inset-0 flex items-center justify-center text-slate-700 font-black text-6xl italic select-none">
                  #{i}
                </div>
                <div className="absolute bottom-4 left-4 z-20 translate-y-8 group-hover:translate-y-0 transition-transform">
                  <span className="bg-[#EAB308] text-[#0F172A] px-3 py-1 font-black uppercase text-[10px]">
                    Ver Projeto
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. About Us Section */}
      <section className="bg-[#EAB308] text-[#0F172A] py-24">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic leading-none">
              Sobre <br /> Nós.
            </h2>
            <div className="space-y-4 font-bold text-lg leading-tight uppercase">
              <p>{tenant.about}</p>
              <p>A {tenant.name} combina engenharia de ponta com um atendimento focado na economia real do cliente.</p>
              <p>
                Não vendemos apenas tecnologia; entregamos liberdade contra os aumentos abusivos das concessionárias.
              </p>
            </div>
            {/* <button className="border-4 border-[#0F172A] px-10 py-4 font-black uppercase tracking-tighter hover:bg-[#0F172A] hover:text-[#EAB308] transition-colors">
              Nossa História
            </button> */}
          </div>
          <div className="relative">
            <div className="aspect-[4/5] bg-[#0F172A] shadow-[-20px_20px_0px_0px_#CA8A04] overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-[#EAB308]/20 font-black text-8xl italic">
                EQUIPE
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Contact / Lead Capture Anchor */}
      <section className="container mx-auto px-6 grid lg:grid-cols-2 gap-20">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic">
              Entre em <span className="text-[#EAB308]">Contato.</span>
            </h2>
            <p className="text-slate-400 font-medium">
              Pronto para começar sua jornada solar? Estamos aqui para tirar suas dúvidas.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-[#EAB308] shrink-0" />
              <div>
                <h4 className="font-black uppercase text-sm">Endereço</h4>
                <p className="text-slate-400 text-sm">{tenant.address}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-[#EAB308] shrink-0" />
              <div>
                <h4 className="font-black uppercase text-sm">Telefone / WhatsApp</h4>
                <p className="text-slate-400 text-sm">{whatsappNumber}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-[#EAB308] shrink-0" />
              <div>
                <h4 className="font-black uppercase text-sm">E-mail</h4>
                <p className="text-slate-400 text-sm">{tenant.email}</p>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href={facebookUrl}
                target="_blank"
                className="w-12 h-12 bg-slate-900 border-2 border-slate-700 flex items-center justify-center hover:bg-[#EAB308] hover:text-[#0F172A] transition-all"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href={instagramUrl}
                target="_blank"
                className="w-12 h-12 bg-slate-900 border-2 border-slate-700 flex items-center justify-center hover:bg-[#EAB308] hover:text-[#0F172A] transition-all"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="w-full h-80 sharp-card p-0 overflow-hidden grayscale contrast-125 opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            {mapsUrl ? (
              <iframe
                src={mapsUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-slate-800 text-slate-500 italic">
                Mapa não configurado
              </div>
            )}
          </div>
        </div>

        <div className="sharp-card bg-slate-900 border-slate-700">
          <h3 className="text-2xl font-black uppercase tracking-tighter italic mb-8">Solicite um Orçamento</h3>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="NOME"
              className="w-full bg-slate-800 border-2 border-slate-700 p-4 rounded-none font-bold placeholder:text-slate-600 focus:border-[#EAB308] outline-none text-white"
            />
            <input
              type="email"
              placeholder="E-MAIL"
              className="w-full bg-slate-800 border-2 border-slate-700 p-4 rounded-none font-bold placeholder:text-slate-600 focus:border-[#EAB308] outline-none text-white"
            />
            <input
              type="tel"
              placeholder="WHATSAPP"
              className="w-full bg-slate-800 border-2 border-slate-700 p-4 rounded-none font-bold placeholder:text-slate-600 focus:border-[#EAB308] outline-none text-white"
            />
            <textarea
              placeholder="COMO PODEMOS AJUDAR?"
              rows={4}
              className="w-full bg-slate-800 border-2 border-slate-700 p-4 rounded-none font-bold placeholder:text-slate-600 focus:border-[#EAB308] outline-none text-white"
            ></textarea>
            <button className="btn-solar w-full text-lg">Enviar Mensagem</button>
          </form>
        </div>
      </section>
    </div>
  )
}
