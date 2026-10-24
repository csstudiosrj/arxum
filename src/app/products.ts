// Produtos do ecossistema ARXUM exibidos no hub.
// `sitemap: true` só para produtos com página pública pronta para indexar.

export type Product = {
  slug: string
  href: string
  prefix?: string
  name: string
  color: string
  segment: string
  tagline: string
  description: string
  features: string[]
  span: string
  soon?: boolean
  sitemap?: boolean
}

export const PRODUCTS: Product[] = [
  {
    slug: 'fest',
    href: '/fest',
    prefix: 'ARXUM',
    name: 'Fest',
    color: '#d4af37',
    segment: 'Festivais',
    tagline: 'O festival inteiro em um só lugar.',
    description: 'Gestão operacional de festivais: programação, riders, fornecedores e logística em tempo real.',
    features: ['Programação', 'Riders', 'Fornecedores', 'Logística'],
    span: 'lg:col-span-7',
    sitemap: true,
  },
  {
    slug: 'normato',
    href: '/normato',
    name: 'Normato',
    color: '#E8A020',
    segment: 'Eventos',
    tagline: 'Dimensione o evento dentro da norma.',
    description: '16 calculadoras de brigada, saídas de emergência, sanitários, equipe médica e mais, com as regras dos Bombeiros de SP e RJ e a legislação federal.',
    features: ['16 calculadoras', 'Normas por estado', 'Memória de cálculo'],
    span: 'lg:col-span-5',
    sitemap: true,
  },
  {
    slug: 'crew',
    href: '/crew',
    prefix: 'ARXUM',
    name: 'Crew',
    color: '#8b5cf6',
    segment: 'Equipes',
    tagline: 'Sua equipe freelancer, sem planilha.',
    description: 'Casting e gestão de freelancers: escalas, contratos e pagamentos para qualquer segmento.',
    features: ['Casting', 'Escalas', 'Contratos', 'Pagamentos'],
    span: 'lg:col-span-5',
    sitemap: true,
  },
  {
    slug: 'poseidon',
    href: '/poseidon',
    name: 'Poseidon',
    color: '#22d3ee',
    segment: 'Cultura',
    tagline: 'Feito para quem vive de edital.',
    description: 'Controle e auditoria de projetos culturais incentivados: Lei Rouanet, FNC e PNAB, da captação à prestação de contas.',
    features: ['Lei Rouanet', 'FNC', 'PNAB', 'Prestação de contas'],
    span: 'lg:col-span-7',
  },
  {
    slug: 'edu',
    href: '/edu',
    prefix: 'ARXUM',
    name: 'Edu',
    color: '#0d9488',
    segment: 'Educação',
    tagline: 'A escola conectada de ponta a ponta.',
    description: 'Plataforma escolar com matrículas, comunicação, financeiro, sala virtual e EduFlix em um só lugar.',
    features: ['Matrículas', 'Financeiro', 'Sala virtual', 'EduFlix'],
    span: 'lg:col-span-6',
    sitemap: true,
  },
  {
    slug: 'descomplicai',
    href: '/descomplicai',
    name: 'Descomplicaí',
    color: '#10B981',
    segment: 'Casamentos',
    tagline: 'O casamento planejado sem estresse.',
    description: 'Planejamento completo de casamentos: memorial descritivo, fornecedores, cerimonialistas e checklist inteligente.',
    features: ['Fornecedores', 'Checklist', 'Cerimonial'],
    span: 'lg:col-span-6',
    sitemap: true,
  },
  {
    slug: 'studio',
    href: '/studio',
    prefix: 'ARXUM',
    name: 'Studio',
    color: '#3B82F6',
    segment: 'Beleza',
    tagline: 'Agenda cheia, cadeira ocupada.',
    description: 'Agendamento online e gestão para salões, barbearias, esmalterias, estética, tatuagem e piercing: agenda, comandas, comissões, fila por QR code e filiais.',
    features: ['Agenda online', 'Comandas', 'Comissões', 'Filiais'],
    span: 'lg:col-span-7',
    sitemap: true,
  },
  {
    slug: 'suite',
    href: '/suite',
    prefix: 'ARXUM',
    name: 'Suite',
    color: '#ef4444',
    segment: 'Gestão',
    tagline: 'O ERP que fala com a família ARXUM.',
    description: 'ERP modular com financeiro, CRM e RH, integrado aos demais produtos do ecossistema.',
    features: ['Financeiro', 'CRM', 'RH'],
    span: 'lg:col-span-5',
    soon: true,
  },
]

export const CONTACT_EMAIL = 'contato@arxum.com.br'
export const SITE_URL = 'https://www.arxum.com.br'
