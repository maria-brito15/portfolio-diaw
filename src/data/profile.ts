import type { L } from './types'

export const profile = {
  name: 'Maria Eduarda de Paula Brito',
  shortName: 'Maria Brito',
  location: 'Belo Horizonte, MG, Brasil',
  university: 'PUC Minas',
  emailPersonal: 'mariaeduardadepaulabrito@gmail.com',
  emailProfessional: 'mariab.dev@zohomail.com',
  linkedin: 'https://www.linkedin.com/in/maria-eduarda-p-brito-a18064358/',
  github: 'https://github.com/maria-brito15',
  whatsapp: (import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined) ?? '',
  role: {
    pt: 'Estudante de Engenharia de Software',
    en: 'Software Engineering Student',
  } as L,
  tagline: {
    pt: 'Engenharia de Software · Desenvolvimento Agêntico · SDD · IA',
    en: 'Software Engineering · Agentic Development · SDD · AI',
  } as L,
}

export const pillars = [
  { id: 'se', color: 'blue', title: { pt: 'Engenharia de Software', en: 'Software Engineering' } as L,
    text: { pt: 'Do requisito à validação: qualidade, testes e rastreabilidade.', en: 'From requirement to validation: quality, testing and traceability.' } as L },
  { id: 'agentic', color: 'purple', title: { pt: 'Desenvolvimento Agêntico', en: 'Agentic Development' } as L,
    text: { pt: 'Programar com agentes de IA, guiados por especificações claras.', en: 'Building with AI agents, guided by clear specifications.' } as L },
  { id: 'sdd', color: 'pink', title: { pt: 'Specification-Driven Development', en: 'Specification-Driven Development' } as L,
    text: { pt: 'Especificações como referência para planejar, implementar e validar.', en: 'Specs as the reference to plan, implement and validate.' } as L },
  { id: 'ai', color: 'orange', title: { pt: 'Inteligência Artificial', en: 'Artificial Intelligence' } as L,
    text: { pt: 'IA aplicada a produto: visão computacional (Azure Custom Vision) e IA generativa (Gemini).', en: 'AI applied to products: computer vision (Azure Custom Vision) and generative AI (Gemini).' } as L },
  { id: 'arch', color: 'green', title: { pt: 'Arquitetura de Software', en: 'Software Architecture' } as L,
    text: { pt: 'Camadas, DDD, Clean e hexagonal, com decisões e trade-offs documentados.', en: 'Layers, DDD, Clean and hexagonal, with documented decisions and trade-offs.' } as L },
  { id: 'pm', color: 'teal', title: { pt: 'Gestão de Projetos', en: 'Project Management' } as L,
    text: { pt: 'Processos, metodologias ágeis e colaboração em equipe.', en: 'Processes, agile methodologies and team collaboration.' } as L },
]

export const about = {
  statement: {
    pt: 'Estudo engenharia de software e gosto de projetar sistemas com intenção: entender o problema, pesar as decisões de arquitetura e construir o que o produto realmente pede.',
    en: 'I study software engineering and like to design systems with intent: understand the problem, weigh the architectural decisions and build what the product actually needs.',
  } as L,
  greeting: { pt: 'Olá, eu sou', en: "Hi, I'm" } as L,
  bio: {
    pt: [
      'Sou estudante de Engenharia de Software na PUC Minas, interessada em projetar sistemas com intenção: compreender os problemas, avaliar decisões arquiteturais e construir soluções alinhadas aos requisitos do produto.',
      'Tenho experiência no desenvolvimento de aplicações full-stack, com foco em back-end, utilizando principalmente Java, Node.js e TypeScript. Ao longo dos meus projetos, venho aprofundando conhecimentos em arquitetura de software, qualidade, integração de sistemas e engenharia de requisitos.',
      'Atualmente, estudo e aplico Specification-Driven Development (SDD), incluindo o desenvolvimento de uma metodologia para utilização por uma equipe. Também ministrei um workshop sobre SDD e programação agêntica pela WebTech Network.',
      'Meu foco é a engenharia de software como um todo: SDD, desenvolvimento agêntico e IA aplicada a produto, arquitetura de software, qualidade e gestão de projetos.',
    ],
    en: [
      "I'm a Software Engineering student at PUC Minas, interested in designing systems with intent: understanding problems, weighing architectural decisions and building solutions aligned with product requirements.",
      'I have experience building full-stack applications with a back-end focus, mainly using Java, Node.js and TypeScript. Through my projects I have been deepening my knowledge of software architecture, quality, systems integration and requirements engineering.',
      'I currently study and apply Specification-Driven Development (SDD), including the development of a methodology for a team to use. I also taught a workshop on SDD and agentic programming for WebTech Network.',
      'My focus is software engineering as a whole: SDD, agentic development and AI applied to products, software architecture, quality and project management.',
    ],
  } as L<string[]>,
  goal: {
    pt: 'Desenvolver uma visão abrangente de engenharia de software, conectando decisões técnicas, processos de desenvolvimento e necessidades reais de produtos e organizações.',
    en: 'To develop a broad view of software engineering, connecting technical decisions, development processes and the real needs of products and organizations.',
  } as L,
  focus: {
    pt: [
      'Specification-Driven Development (SDD), desenvolvimento agêntico e IA',
      'Metodologia de SDD para orientar o trabalho de uma equipe',
      'SDD na evolução e refatoração de projetos existentes',
      'Arquitetura, qualidade e rastreabilidade entre requisitos, implementação e validação',
    ],
    en: [
      'Specification-Driven Development (SDD), agentic development and AI',
      'An SDD methodology to guide a team’s workflow',
      'Applying SDD to evolve and refactor existing projects',
      'Architecture, quality and traceability between requirements, implementation and validation',
    ],
  } as L<string[]>,
  interests: {
    pt: [
      'Arquitetura de software e design de sistemas',
      'Desenvolvimento back-end e engenharia de APIs',
      'SDD e desenvolvimento agêntico',
      'Engenharia de requisitos, qualidade e testes',
      'Gestão de projetos e processos',
      'Liderança técnica e colaboração em equipes',
    ],
    en: [
      'Software architecture and systems design',
      'Back-end development and API engineering',
      'SDD and agentic development',
      'Requirements engineering, quality and testing',
      'Project management and processes',
      'Technical leadership and team collaboration',
    ],
  } as L<string[]>,
  education: [
    {
      degree: { pt: 'Bacharelado em Engenharia de Software', en: 'B.Sc. in Software Engineering' } as L,
      school: 'PUC Minas',
      period: { pt: '2026 – 2029 (previsão)', en: '2026 – 2029 (expected)' } as L,
    },
    {
      degree: { pt: 'Bacharelado em Ciência da Computação', en: 'B.Sc. in Computer Science' } as L,
      school: 'PUC Minas',
      period: { pt: '2025 – 2026', en: '2025 – 2026' } as L,
    },
  ],
  languages: [
    { name: { pt: 'Português', en: 'Portuguese' } as L, level: { pt: 'Nativo', en: 'Native' } as L },
    { name: { pt: 'Inglês', en: 'English' } as L, level: { pt: 'Avançado / fluente', en: 'Advanced / fluent' } as L },
    { name: { pt: 'Francês', en: 'French' } as L, level: { pt: 'Básico', en: 'Basic' } as L },
  ],
  skills: [
    { group: { pt: 'Linguagens', en: 'Languages' } as L, items: ['Java', 'TypeScript', 'JavaScript', 'Python', 'C/C++', 'PHP'] },
    { group: { pt: 'Back-end e APIs', en: 'Back-end & APIs' } as L, items: ['Node.js', 'Express', 'Spring Boot', 'REST', 'JWT', 'BullMQ'] },
    { group: { pt: 'Front-end', en: 'Front-end' } as L, items: ['React', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Figma'] },
    { group: { pt: 'Dados', en: 'Data' } as L, items: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'Flyway', 'JDBC'] },
    { group: { pt: 'Arquitetura', en: 'Architecture' } as L, items: ['SDD', 'Clean Architecture', 'DDD', 'MVC', 'Hexagonal'] },
    { group: { pt: 'Qualidade e DevOps', en: 'Quality & DevOps' } as L, items: ['JUnit 5', 'Mockito', 'Jest', 'Vitest', 'Docker', 'GitHub Actions', 'CI/CD'] },
    { group: { pt: 'IA', en: 'AI' } as L, items: ['Azure Custom Vision', 'Google Gemini API'] },
  ],
}
