import type { Dictionary } from '../types';

export const pt: Dictionary = {
  meta: {
    title: 'MobFácil | MobCred · Motor de Decisão de Crédito',
    description:
      'MobCred automatiza a concessão de crédito com regras de negócio customizadas, consulta a fontes internas e externas e decisão em segundos.',
  },
  nav: {
    home: 'Início',
    howItWorks: 'Como funciona',
    platform: 'Plataforma',
    dataSources: 'Fontes de dados',
    services: 'Serviços',
    clients: 'Clientes',
    contact: 'Contato',
    cta: 'Vamos conversar',
    themeToggle: 'Alternar tema',
  },
  hero: {
    eyebrow: 'MOBCRED · MOTOR DE DECISÃO DE CRÉDITO',
    headline: 'Soluções inteligentes para',
    highlight: 'concessão de crédito',
    subtext:
      'A automação para análise de dados que gera segurança para decisões que impactam nas suas vendas.',
    ctaPrimary: 'Vamos conversar',
    ctaSecondary: 'Como funciona',
    pillars: [
      { number: '01', title: 'Motor de decisão', items: ['Regras customizadas', 'Decisão automática'] },
      { number: '02', title: 'Fontes e origem de dados', items: ['Internas e externas', 'Públicas e privadas'] },
      { number: '03', title: 'Documentos necessários', items: ['Extração e tratamento de dados', 'Validação facial'] },
    ],
    demo: {
      label: 'Análise em tempo real',
      request: 'Proposta de crédito',
      steps: [
        'Consulta a fontes públicas e privadas',
        'Aplicação das regras do negócio',
        'Validação de documentos',
      ],
      decisionLabel: 'Decisão automática',
      approved: 'Aprovado',
      time: '1,2s',
      note: 'Exemplo ilustrativo',
    },
  },
  overview: {
    eyebrow: 'MOBCRED',
    title: 'Automatize a concessão e proteja seus negócios',
    description:
      'Em um ambiente econômico desafiador, onde agilidade e precisão são cruciais, o MobCred se destaca por ser a solução completa que alia tecnologia avançada, flexibilidade operacional e segurança para a melhor tomada de decisões.',
    flexTitle: 'Flexibilidade, agilidade e autonomia',
    flexDescription:
      'Ajuste as políticas de crédito em tempo real, sem depender de terceiros e sem novos ciclos de desenvolvimento.',
    engineTitle: 'O MobCred automatiza o processo de decisão com precisão',
    engineDescription:
      'Reúne informações, consulta fontes internas e externas, aplica as regras do seu negócio e sugere a melhor medida a ser tomada, em segundos.',
    bullets: [
      'Consulta automática às fontes públicas e privadas',
      'Aplicação das regras de negócio customizadas',
      'Decisão rápida e padronizada',
    ],
  },
  platform: {
    eyebrow: 'MOBCRED',
    title: 'O que a plataforma disponibiliza',
    items: [
      {
        title: 'Integração com fontes internas e externas',
        description:
          'Bases da sua empresa e provedores de mercado, públicos e privados, em um único fluxo de consulta de forma integrada.',
      },
      {
        title: 'Regras de negócio parametrizáveis',
        description:
          'Políticas configuradas pela sua equipe, por produto e serviço financeiro, perfil de cliente, região e demais parâmetros de risco.',
      },
      {
        title: 'Padronização nos critérios',
        description:
          'O mesmo critério em todas as propostas, sem variação entre analistas ou qualquer intervenção humana.',
      },
      {
        title: 'Em conformidade com a LGPD',
        description:
          'Tratamento dos dados pessoais dentro das exigências legais, com rastreabilidade de ponta a ponta.',
      },
      {
        title: 'Trilha completa de decisões',
        description:
          'Histórico de consultas, das regras aplicadas e decisões tomadas. Tudo registrado para suporte à análise e à auditoria.',
      },
      {
        title: 'Resposta em segundos',
        description:
          'Alta taxa de decisões automáticas, com segurança, precisão e retorno imediato ao cliente.',
      },
    ],
  },
  howItWorks: {
    eyebrow: 'COMO FUNCIONA',
    title: 'Decisões mais precisas em quatro etapas',
    description: 'Da integração à decisão de crédito, sem intervenção manual e sem retrabalho.',
    steps: [
      {
        number: '01',
        title: 'Integração via API',
        description:
          'Conecte o MobCred aos sistemas que você já usa, como ERPs e CRMs. Seus dados fluem automaticamente para a análise.',
      },
      {
        number: '02',
        title: 'Configuração das políticas',
        description:
          'Crie políticas e defina suas regras de negócio conforme os objetivos e resultados financeiros esperados. Agilidade na criação e manutenção.',
      },
      {
        number: '03',
        title: 'Execução e consulta',
        description:
          'Consulta automática a todas as fontes internas e externas para busca de informações e aplicação das regras, incluindo os documentos enviados.',
      },
      {
        number: '04',
        title: 'Decisão de crédito',
        description: 'Aprovado, reprovado ou derivado para uma análise mais detalhada, em segundos.',
      },
    ],
    finalTitle: 'Decisão final',
    finalDescription:
      'Aprovado, reprovado ou derivado para análise, com o registro completo do caminho até a decisão.',
  },
  dataSources: {
    eyebrow: 'FONTES DE DADOS',
    title: 'Fontes de dados internas e externas',
    description:
      'Integração ágil com fontes internas e externas, informações públicas e privadas, governamentais e redes sociais.',
    items: [
      {
        title: 'Bases internas',
        description: 'Cadastros, histórico de relacionamento e comportamento de pagamento.',
      },
      {
        title: 'Bureaus e fontes privadas',
        description: 'Provedores de mercado consultados dentro do fluxo de decisão.',
      },
      {
        title: 'Fontes públicas e governamentais',
        description: 'Consultas oficiais integradas, com registro de cada retorno.',
      },
      {
        title: 'Redes sociais e fontes abertas',
        description: 'Informações complementares para enriquecer o perfil analisado.',
      },
    ],
    highlightTitle: 'APIs customizadas',
    highlightDescription: 'Conexões diretas ou webscraping para o acesso automático às informações.',
    footnote:
      'Sem consultas manuais espalhadas por vários portais e sem digitação de dados entre sistemas.',
  },
  documentAnalysis: {
    eyebrow: 'OUTROS SERVIÇOS',
    title: 'Análise de documentação do processo decisório',
    description:
      'Análise e tipificação dos documentos necessários à decisão, com extração de dados e validação automática por cruzamento com as fontes disponíveis na empresa e no mercado.',
    items: [
      {
        title: 'Tipificação e extração',
        description: 'Identificação do tipo de documento e captura automática dos dados nele contidos.',
      },
      {
        title: 'Validação facial',
        description:
          'Comparação da selfie do cliente com a foto do documento de identificação ou outro documento que contenha a foto do cliente.',
      },
      {
        title: 'Conferência de dados',
        description:
          'Nome, data de nascimento, número de identificação, foto e tokens dos documentos digitalizados podem ser validados em segundos.',
      },
    ],
    highlightTitle: 'Fluxo único',
    highlightDescription:
      'O que é extraído dos documentos alimenta as regras de crédito automaticamente, sem digitação e sem conferência manual.',
  },
  webSearch: {
    eyebrow: 'OUTROS SERVIÇOS',
    title: 'Busca de informações em sites públicos e redes sociais',
    description:
      'Customização de APIs conforme a necessidade de cada negócio para buscar informações em sites públicos e redes sociais.',
    items: [
      {
        title: 'Customização',
        description:
          'Além das fontes já disponíveis, construímos soluções de busca de acordo com a necessidade de cada empresa e a disponibilidade das informações.',
      },
      {
        title: 'Manutenção e monitoramento',
        description:
          'Temos uma equipe de monitoramento para identificar e ajustar dentro do prazo de SLA em caso de alteração.',
      },
      {
        title: 'Armazenamento e reutilização',
        description:
          'Todas as informações são armazenadas e podem ser reutilizadas sem necessidade de nova consulta, conforme as regras de prazo de reutilização de cada consulta.',
      },
    ],
    highlightTitle: 'Fluxo único',
    highlightDescription:
      'O que é consultado é disponibilizado para utilização das regras de crédito e pode ser reaproveitado.',
  },
  benefits: {
    eyebrow: 'BENEFÍCIOS',
    title: 'O que a sua empresa ganha',
    items: [
      {
        title: 'Autonomia total',
        description:
          'Ajuste das políticas de crédito em tempo real, sem depender de terceiros e com controle de versionamento.',
      },
      {
        title: 'Decisão automática em escala',
        description: 'Alta taxa de decisões automáticas, com segurança e precisão.',
      },
      {
        title: 'Redução de custos',
        description: 'Menos esforço manual e processos padronizados em toda a operação.',
      },
      {
        title: 'Melhor experiência do cliente',
        description: 'Resposta rápida na proposta, com impacto direto na conversão.',
      },
    ],
  },
  segments: {
    title: 'Segmentos atendidos',
    description: 'Empresas que já utilizam a plataforma para automação da análise de crédito e de riscos.',
    items: ['Bancos', 'Indústria', 'Financeiras', 'Seguros', 'Fintechs', 'Saúde', 'Varejo'],
    complianceTitle: 'Conformidade',
    complianceDescription:
      'Processo executado em conformidade com a LGPD, com registro completo das consultas e das decisões.',
  },
  clients: {
    title: 'Clientes que confiam na MobFácil',
  },
  contact: {
    eyebrow: 'VAMOS CONVERSAR',
    title: 'Decisões de crédito com mais segurança',
    description:
      'Agende uma demonstração do MobCred e veja o motor de decisão rodando com as políticas de crédito do seu negócio.',
    siteLabel: 'Site',
    emailLabel: 'E-mail',
    phoneLabel: 'Telefone',
    ctaLabel: 'Falar com a MobFácil',
  },
  footer: {
    tagline: 'MobCred · Motor de Decisão de Crédito',
    legalTitle: 'Legal',
    privacy: 'Privacidade',
    terms: 'Termos',
    cookies: 'Cookies',
    rights: 'Todos os direitos reservados.',
  },
};
