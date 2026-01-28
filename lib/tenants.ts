export type Tenant = {
  slug: string
  name: string
  primaryColor: string
  whatsapp: string
  address?: string
  email?: string
  facebook?: string
  instagram?: string
  about?: string
  tagline?: string
  config: {
    kwhPrice: number // R$/kWh
    sunHours: number // HSP average
    costPerWatt: number // R$/Wp
    minBillValue: number
  }
}

export const tenants: Record<string, Tenant> = {
  "modelo-solar": {
    slug: "modelo-solar",
    name: process.env.NEXT_PUBLIC_COMPANY_NAME || "Sua Empresa Solar",
    primaryColor: "#EAB308", // Yellow 600
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5511999999999",
    address: process.env.NEXT_PUBLIC_ADDRESS || "Seu Endereço, 123 - Cidade - UF",
    email: process.env.NEXT_PUBLIC_EMAIL || "contato@suaempresa.com.br",
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || "#",
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "#",
    about: process.env.NEXT_PUBLIC_ABOUT || "Somos especialistas em energia limpa com foco em economia real.",
    tagline: process.env.NEXT_PUBLIC_TAGLINE || "Pare de rasgar dinheiro com a conta de luz.",
    config: {
      kwhPrice: 0.95,
      sunHours: 5.1,
      costPerWatt: 3.8,
      minBillValue: 150,
    },
  },
}

export function getTenant(slug: string): Tenant | null {
  return tenants[slug] || tenants["modelo-solar"]
}
