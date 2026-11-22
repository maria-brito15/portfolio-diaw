import type { L } from './types'

export type ExpKind = 'teaching' | 'extension' | 'event' | 'course' | 'award' | 'internship'

export interface Experience {
  id: string
  org: string
  role: L
  period: L
  description: L
  kind: ExpKind
  sort: string
  link?: string
  ongoing?: boolean
}

export const kindLabels: Record<ExpKind, L> = {
  teaching: { pt: 'Ensino', en: 'Teaching' },
  extension: { pt: 'Extensão', en: 'Outreach' },
  event: { pt: 'Evento técnico', en: 'Tech event' },
  course: { pt: 'Curso', en: 'Course' },
  award: { pt: 'Reconhecimento', en: 'Recognition' },
  internship: { pt: 'Estágio', en: 'Internship' },
}

// Mais recente primeiro.
export const experiences: Experience[] = [
  {
    id: 'webtech',
    org: 'WebTech Network — PUC Minas',
    role: { pt: 'Instrutora e mediadora de workshop · Desenvolvimento de metodologia', en: 'Workshop instructor and facilitator · Methodology development' },
    period: { pt: '2º semestre de 2026 – em andamento', en: '2nd semester 2026 – ongoing' },
    description: {
      pt: 'Projeto de extensão que aproxima a universidade de empresas parceiras do setor de tecnologia. Ministrei o workshop “Spec-Driven Development (SDD) e Programação Agêntica” e atuo no desenvolvimento de uma metodologia de SDD para uso por uma equipe.',
      en: 'An outreach project that connects the university with partner tech companies. I taught the workshop “Spec-Driven Development (SDD) and Agentic Programming” and I am developing an SDD methodology for a team to use.',
    },
    kind: 'extension',
    sort: '2026-08',
    link: 'https://webtech.network/eventos/3644354',
    ongoing: true,
  },
  {
    id: 'monitoria',
    org: 'PUC Minas',
    role: { pt: 'Monitora — Desenvolvimento de Interfaces Web', en: 'Teaching assistant — Web Interface Development' },
    period: { pt: '2026', en: '2026' },
    description: {
      pt: 'Atuação como monitora da disciplina de Desenvolvimento de Interfaces Web.',
      en: 'Teaching assistant for the Web Interface Development course.',
    },
    kind: 'teaching',
    sort: '2026-03',
  },
  {
    id: 'alura',
    org: 'Alura',
    role: { pt: 'Imersão em Análise de Dados com Python', en: 'Data Analysis with Python immersion' },
    period: { pt: '2026', en: '2026' },
    description: {
      pt: 'Estudos de análise de dados utilizando pandas e matplotlib.',
      en: 'Data analysis studies using pandas and matplotlib.',
    },
    kind: 'course',
    sort: '2026-02',
  },
  {
    id: 'devart',
    org: 'DevArt',
    role: { pt: 'Curso de Desenvolvimento Web (instrutor: Gustavo Campelo)', en: 'Web Development course (instructor: Gustavo Campelo)' },
    period: { pt: '2026', en: '2026' },
    description: {
      pt: 'Conteúdo de Figma, design responsivo e animações.',
      en: 'Figma, responsive design and animation content.',
    },
    kind: 'course',
    sort: '2026-01',
  },
  {
    id: 'awards',
    org: 'PUC Minas',
    role: { pt: 'Finalista — melhores trabalhos do semestre (2×)', en: 'Finalist — best projects of the semester (2×)' },
    period: { pt: '2025 – 2026', en: '2025 – 2026' },
    description: {
      pt: 'Duas vezes finalista, com os projetos EcoShop e Planoriza.',
      en: 'Two-time finalist with the EcoShop and Planoriza projects.',
    },
    kind: 'award',
    sort: '2025-12',
  },
  {
    id: 'icpc',
    org: 'SBC — Maratona de Programação ICPC Brasil',
    role: { pt: 'Participante', en: 'Participant' },
    period: { pt: '2025', en: '2025' },
    description: {
      pt: 'Participação na maratona nacional de programação competitiva, com foco em algoritmos e resolução de problemas.',
      en: 'Took part in the national competitive programming marathon, focused on algorithms and problem solving.',
    },
    kind: 'event',
    sort: '2025-09',
  },
  {
    id: 'palestra',
    org: 'PUC Minas — Projeto de extensão de programação',
    role: { pt: 'Palestrante de Computação', en: 'Computing speaker' },
    period: { pt: '2025', en: '2025' },
    description: {
      pt: 'Ministrei uma palestra em um projeto de extensão de programação da universidade.',
      en: 'Gave a talk at one of the university’s programming outreach projects.',
    },
    kind: 'extension',
    sort: '2025-06',
  },
]
