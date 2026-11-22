import type { L } from './types'

export interface Project {
  slug: string
  name: string
  /** Chave de ordenação (AAAA-MM). A timeline é exibida do mais antigo ao mais recente. */
  sort: string
  period: L
  subtitle: L
  description: L
  highlights: L<string[]>
  stack: string[]
  repo?: string
  badge?: L
  status?: L
}

export const projects: Project[] = [
  {
    slug: 'planoriza',
    name: 'Planoriza',
    sort: '2025-01',
    period: { pt: 'Janeiro de 2025', en: 'January 2025' },
    subtitle: { pt: 'Gerenciamento de tarefas com prevenção de burnout', en: 'Task management with burnout prevention' },
    description: {
      pt: 'Aplicação criada a partir de um problema comum entre estudantes: listas de atividades que crescem além do que é possível realizar. A prevenção de sobrecarga é uma decisão de produto.',
      en: 'An app born from a common student problem: to-do lists that grow beyond what anyone can actually do. Overload prevention is a product decision.',
    },
    highlights: {
      pt: ['Limite máximo de tarefas por dia', 'Sistema de streak para incentivar consistência', 'Calendário interativo', 'Temporizador integrado para foco'],
      en: ['Maximum number of tasks per day', 'Streak system to encourage consistency', 'Interactive calendar', 'Built-in focus timer'],
    },
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    badge: { pt: 'Finalista — melhores trabalhos PUC Minas 2025', en: 'Finalist — PUC Minas best projects 2025' },
  },
  {
    slug: 'ecoshop',
    name: 'EcoShop',
    sort: '2025-03',
    period: { pt: '2025 – atual', en: '2025 – present' },
    subtitle: { pt: 'E-commerce sustentável com IA', en: 'Sustainable e-commerce with AI' },
    description: {
      pt: 'E-commerce sustentável com IA em duas etapas: identificação de materiais recicláveis por imagem (modelo treinado no Azure Custom Vision) e análise de sustentabilidade com a API do Google Gemini. Nasceu como trabalho acadêmico (V1, Java + Spark) e evoluiu para uma reescrita completa em Next.js 15 (V2); a V3 refatora o projeto com SDD.',
      en: 'Sustainable e-commerce with AI in two steps: image-based recycling material identification (a model trained on Azure Custom Vision) and sustainability analysis with the Google Gemini API. It started as an academic project (V1, Java + Spark), was fully rewritten in Next.js 15 (V2), and V3 refactors it using SDD.',
    },
    highlights: {
      pt: [
        'V1: MVC em camadas, PostgreSQL/JDBC, sessões com BCrypt, JUnit 5 e Mockito, deploy Docker no Render',
        'V2: Next.js 15, Prisma, JWT stateless, Zod, cache em duas camadas com Redis',
        'Degradação graciosa quando os serviços de IA ficam indisponíveis',
        'CI/CD com GitHub Actions: lint, type-check, build, registry e deploy',
      ],
      en: [
        'V1: layered MVC, PostgreSQL/JDBC, BCrypt sessions, JUnit 5 and Mockito, Docker deploy on Render',
        'V2: Next.js 15, Prisma, stateless JWT, Zod, two-layer cache with Redis',
        'Graceful degradation when AI services are unavailable',
        'CI/CD with GitHub Actions: lint, type-check, build, registry and deploy',
      ],
    },
    stack: ['Java', 'Spark', 'PostgreSQL', 'Next.js 15', 'TypeScript', 'Prisma', 'Redis', 'JWT', 'Zod', 'Azure Custom Vision', 'Gemini', 'Docker', 'GitHub Actions'],
    repo: 'https://github.com/maria-brito15/ecoshop-nextjs',
    badge: { pt: 'Finalista — melhores trabalhos PUC Minas 2025', en: 'Finalist — PUC Minas best projects 2025' },
    status: { pt: 'V3 (refatoração com SDD) em desenvolvimento', en: 'V3 (SDD refactor) in progress' },
  },
  {
    slug: 'shorturl',
    name: 'ShortURL',
    sort: '2026-01',
    period: { pt: '2026', en: '2026' },
    subtitle: { pt: 'API REST de encurtamento de URLs', en: 'URL shortener REST API' },
    description: {
      pt: 'API REST para encurtar URLs, com persistência em MongoDB e Redis para cache de redirecionamentos.',
      en: 'A REST API for shortening URLs, persisting to MongoDB and using Redis to cache redirects.',
    },
    highlights: {
      pt: ['Rastreamento de cliques por URL', 'Cache de redirecionamentos com Redis', 'Docker Compose', 'Pipeline de CI/CD com GitHub Actions'],
      en: ['Per-URL click tracking', 'Redirect caching with Redis', 'Docker Compose', 'CI/CD pipeline with GitHub Actions'],
    },
    stack: ['Node.js', 'Express', 'TypeScript', 'MongoDB', 'Redis', 'Docker', 'GitHub Actions'],
    repo: 'https://github.com/maria-brito15/shorturl-express',
  },
  {
    slug: 'file-name-standardizer',
    name: 'File Name Standardizer',
    sort: '2026-02',
    period: { pt: '2026', en: '2026' },
    subtitle: { pt: 'Padronizador de nomes de arquivos', en: 'File name standardizer' },
    description: {
      pt: 'Ferramenta para padronizar nomes de arquivos em lote, removendo acentos e substituindo espaços por underscores, sem dependências externas.',
      en: 'A tool that standardizes file names in batch, stripping accents and replacing spaces with underscores, with zero external dependencies.',
    },
    highlights: {
      pt: ['Processamento em lote', 'Sem dependências externas'],
      en: ['Batch processing', 'No external dependencies'],
    },
    stack: ['JavaScript ES6+'],
    repo: 'https://github.com/maria-brito15/file-name-standardizer',
  },
  {
    slug: 'whatsapp-dispatcher',
    name: 'WhatsApp Dispatcher',
    sort: '2026-06',
    period: { pt: '2026', en: '2026' },
    subtitle: { pt: 'Estudo de arquitetura de um sistema de mensageria', en: 'Architecture study of a messaging system' },
    description: {
      pt: 'Desafio técnico de estágio: estudo de caso arquitetural (implementação parcial) de um sistema de disparo de mensagens para campanhas e fluxos automatizados. O valor está na investigação e nas decisões documentadas, não em uma afirmação de que tudo foi validado em produção.',
      en: 'Internship technical challenge: an architectural case study (partial implementation) of a message-dispatch system for campaigns and automated flows. The value lies in the investigation and documented decisions, not in a claim that everything was validated in production.',
    },
    highlights: {
      pt: ['Processamento assíncrono, filas e workers (producer–consumer)', 'BullMQ e Redis: concorrência, retentativas e backoff', 'DDD, Clean Architecture e arquitetura hexagonal', 'Documentação técnica com trade-offs e alternativas'],
      en: ['Asynchronous processing, queues and workers (producer–consumer)', 'BullMQ and Redis: concurrency, retries and backoff', 'DDD, Clean Architecture and hexagonal architecture', 'Technical docs with trade-offs and alternatives'],
    },
    stack: ['Node.js', 'TypeScript', 'BullMQ', 'Redis', 'PostgreSQL', 'Prisma', 'Docker'],
    status: { pt: 'Estudo de caso · implementação parcial', en: 'Case study · partial implementation' },
  },
  {
    slug: 'portfolio-react-vite',
    name: 'portfolio-react-vite',
    sort: '2026-10',
    period: { pt: 'Outubro de 2026', en: 'October 2026' },
    subtitle: { pt: 'Portfólio interativo em formato de terminal (versão ambiciosa)', en: 'Interactive terminal-style portfolio (ambitious version)' },
    description: {
      pt: 'Primeira versão do meu portfólio, bem mais complexa: um terminal interativo em que a página inicial funciona como linha de comando e currículo, projetos e conteúdo acadêmico abrem como janelas do mesmo ambiente. Desenvolvida com Specification-Driven Development, não foi finalizada a tempo da entrega do trabalho — por isso criei uma segunda versão, mais enxuta (portfolio-diaw).',
      en: 'The first, much more complex version of my portfolio: an interactive terminal where the home page works as a command line and résumé, projects and academic content open as windows in the same environment. Built with Specification-Driven Development, it could not be finished in time for the assignment — so I built a second, leaner version (portfolio-diaw).',
    },
    highlights: {
      pt: ['Bilíngue (PT/EN), tema claro e escuro e roteador próprio', 'Funcionalidades a partir de especificações SDD com requisitos rastreáveis', '215 testes automatizados com Vitest'],
      en: ['Bilingual (PT/EN), light and dark theme and a custom router', 'Features built from SDD specs with traceable requirements', '215 automated tests with Vitest'],
    },
    stack: ['React 19', 'Vite', 'TypeScript estrito', 'Vitest', 'SDD'],
    repo: 'https://github.com/maria-brito15/portfolio-react-vite',
    status: { pt: 'Versão complexa · não finalizada a tempo da entrega', en: 'Complex version · not finished in time for the deadline' },
  },
  {
    slug: 'portfolio-diaw',
    name: 'portfolio-diaw',
    sort: '2026-11',
    period: { pt: 'Novembro de 2026', en: 'November 2026' },
    subtitle: { pt: 'Este site — portfólio entregue no Trabalho Prático 1', en: 'This site — the portfolio delivered for Practical Assignment 1' },
    description: {
      pt: 'Versão enxuta e finalizada do portfólio, feita para a entrega da disciplina: navegação por menu, linha do tempo de projetos, experiências, contato com formulário por e-mail e conteúdo bilíngue. É o site que você está vendo agora.',
      en: 'The leaner, finished version of the portfolio, built for the course delivery: menu navigation, project timeline, experience, an email contact form and bilingual content. It is the site you are viewing right now.',
    },
    highlights: {
      pt: ['React 19, Vite e TypeScript estrito', 'Formulário com React Hook Form e EmailJS', 'Cor própria por seção, responsivo e acessível', 'CI com GitHub Actions e deploy no GitHub Pages'],
      en: ['React 19, Vite and strict TypeScript', 'Form with React Hook Form and EmailJS', 'A color per section, responsive and accessible', 'CI with GitHub Actions and GitHub Pages deploy'],
    },
    stack: ['React 19', 'Vite', 'TypeScript', 'React Router', 'React Hook Form', 'EmailJS', 'GitHub Pages'],
    repo: 'https://github.com/maria-brito15/portfolio-diaw',
  },
]
