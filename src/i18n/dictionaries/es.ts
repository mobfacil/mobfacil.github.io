import type { Dictionary } from '../types';

export const es: Dictionary = {
  meta: {
    title: 'MobFácil | MobCred · Motor de Decisión de Crédito',
    description:
      'MobCred automatiza el otorgamiento de crédito con reglas de negocio personalizadas, consulta a fuentes internas y externas, y decisiones en segundos.',
  },
  nav: {
    home: 'Inicio',
    howItWorks: 'Cómo funciona',
    platform: 'Plataforma',
    dataSources: 'Fuentes de datos',
    services: 'Servicios',
    docs: 'Documentación',
    clients: 'Clientes',
    contact: 'Contacto',
    cta: 'Conversemos',
    themeToggle: 'Cambiar tema',
  },
  hero: {
    eyebrow: 'MOBCRED · MOTOR DE DECISIÓN DE CRÉDITO',
    headline: 'Soluciones inteligentes para el',
    highlight: 'otorgamiento de crédito',
    subtext: 'La automatización del análisis de datos que da seguridad a las decisiones que impactan en sus ventas.',
    ctaPrimary: 'Conversemos',
    ctaSecondary: 'Cómo funciona',
    pillars: [
      { number: '01', title: 'Motor de decisión', items: ['Reglas personalizadas', 'Decisión automática'] },
      { number: '02', title: 'Fuentes y origen de datos', items: ['Internas y externas', 'Públicas y privadas'] },
      { number: '03', title: 'Documentos necesarios', items: ['Extracción y tratamiento de datos', 'Validación facial'] },
    ],
    demo: {
      label: 'Análisis en tiempo real',
      request: 'Solicitud de crédito',
      steps: [
        'Consulta a fuentes públicas y privadas',
        'Aplicación de las reglas del negocio',
        'Validación de documentos',
      ],
      decisionLabel: 'Decisión automática',
      approved: 'Aprobado',
      time: '1,2s',
      note: 'Ejemplo ilustrativo',
    },
  },
  overview: {
    eyebrow: 'MOBCRED',
    title: 'Automatice el otorgamiento y proteja su negocio',
    description:
      'En un entorno económico desafiante, donde la agilidad y la precisión son cruciales, MobCred se destaca por ser la solución completa que combina tecnología avanzada, flexibilidad operativa y seguridad para la mejor toma de decisiones.',
    flexTitle: 'Flexibilidad, agilidad y autonomía',
    flexDescription: 'Ajuste las políticas de crédito en tiempo real, sin depender de terceros y sin nuevos ciclos de desarrollo.',
    engineTitle: 'MobCred automatiza el proceso de decisión con precisión',
    engineDescription:
      'Reúne información, consulta fuentes internas y externas, aplica las reglas de su negocio y sugiere la mejor medida a tomar, en segundos.',
    bullets: [
      'Consulta automática a fuentes públicas y privadas',
      'Aplicación de las reglas de negocio personalizadas',
      'Decisión rápida y estandarizada',
    ],
  },
  platform: {
    eyebrow: 'MOBCRED',
    title: 'Lo que ofrece la plataforma',
    items: [
      {
        title: 'Integración con fuentes internas y externas',
        description: 'Bases de su empresa y proveedores del mercado, públicos y privados, en un único flujo de consulta, de forma integrada.',
      },
      {
        title: 'Reglas de negocio parametrizables',
        description:
          'Políticas configuradas por su equipo, por producto y servicio financiero, perfil de cliente, región y demás parámetros de riesgo.',
      },
      {
        title: 'Estandarización de los criterios',
        description: 'El mismo criterio en todas las solicitudes, sin variación entre analistas ni intervención humana.',
      },
      {
        title: 'En conformidad con la LGPD',
        description: 'Tratamiento de los datos personales conforme a la ley brasileña de protección de datos, con trazabilidad de punta a punta.',
      },
      {
        title: 'Trazabilidad completa de decisiones',
        description: 'Historial de consultas, reglas aplicadas y decisiones tomadas. Todo registrado como respaldo para el análisis y la auditoría.',
      },
      {
        title: 'Respuesta en segundos',
        description: 'Alta tasa de decisiones automáticas, con seguridad, precisión y respuesta inmediata al cliente.',
      },
    ],
  },
  howItWorks: {
    eyebrow: 'CÓMO FUNCIONA',
    title: 'Decisiones más precisas en cuatro etapas',
    description: 'De la integración a la decisión de crédito, sin intervención manual y sin retrabajo.',
    steps: [
      {
        number: '01',
        title: 'Integración vía API',
        description: 'Conecte MobCred a los sistemas que ya utiliza, como ERPs y CRMs. Sus datos fluyen automáticamente hacia el análisis.',
      },
      {
        number: '02',
        title: 'Configuración de las políticas',
        description:
          'Cree políticas y defina sus reglas de negocio según los objetivos y resultados financieros esperados. Agilidad en la creación y el mantenimiento.',
      },
      {
        number: '03',
        title: 'Ejecución y consulta',
        description:
          'Consulta automática a todas las fuentes internas y externas para la búsqueda de información y la aplicación de las reglas, incluidos los documentos enviados.',
      },
      {
        number: '04',
        title: 'Decisión de crédito',
        description: 'Aprobado, rechazado o derivado a un análisis más detallado, en segundos.',
      },
    ],
    finalTitle: 'Decisión final',
    finalDescription: 'Aprobado, rechazado o derivado a análisis, con el registro completo del camino hasta la decisión.',
  },
  dataSources: {
    eyebrow: 'FUENTES DE DATOS',
    title: 'Fuentes de datos internas y externas',
    description: 'Integración ágil con fuentes internas y externas, información pública y privada, gubernamental y de redes sociales.',
    items: [
      {
        title: 'Bases internas',
        description: 'Registros, historial de relación y comportamiento de pago.',
      },
      {
        title: 'Bureaus y fuentes privadas',
        description: 'Proveedores del mercado consultados dentro del flujo de decisión.',
      },
      {
        title: 'Fuentes públicas y gubernamentales',
        description: 'Consultas oficiales integradas, con registro de cada respuesta.',
      },
      {
        title: 'Redes sociales y fuentes abiertas',
        description: 'Información complementaria para enriquecer el perfil analizado.',
      },
    ],
    highlightTitle: 'APIs personalizadas',
    highlightDescription: 'Conexiones directas o webscraping para el acceso automático a la información.',
    footnote: 'Sin consultas manuales dispersas en varios portales y sin carga manual de datos entre sistemas.',
  },
  documentAnalysis: {
    eyebrow: 'OTROS SERVICIOS',
    title: 'Análisis de la documentación del proceso decisorio',
    description:
      'Análisis y tipificación de los documentos necesarios para la decisión, con extracción de datos y validación automática por cruzamiento con las fuentes disponibles en la empresa y en el mercado.',
    items: [
      {
        title: 'Tipificación y extracción',
        description: 'Identificación del tipo de documento y captura automática de los datos que contiene.',
      },
      {
        title: 'Validación facial',
        description: 'Comparación de la selfie del cliente con la foto de la cédula de identidad u otro documento que contenga su foto.',
      },
      {
        title: 'Verificación de datos',
        description: 'Nombre, fecha de nacimiento, número de cédula, foto y tokens de los documentos digitalizados pueden validarse en segundos.',
      },
    ],
    highlightTitle: 'Flujo único',
    highlightDescription: 'Lo extraído de los documentos alimenta las reglas de crédito automáticamente, sin carga ni verificación manual.',
  },
  webSearch: {
    eyebrow: 'OTROS SERVICIOS',
    title: 'Búsqueda de información en sitios públicos y redes sociales',
    description: 'Personalización de APIs según la necesidad de cada negocio para buscar información en sitios públicos y redes sociales.',
    items: [
      {
        title: 'Personalización',
        description:
          'Además de las fuentes ya disponibles, construimos soluciones de búsqueda según la necesidad de cada empresa y la disponibilidad de la información.',
      },
      {
        title: 'Mantenimiento y monitoreo',
        description: 'Contamos con un equipo de monitoreo para identificar y ajustar dentro del plazo del SLA en caso de cambios en la fuente.',
      },
      {
        title: 'Almacenamiento y reutilización',
        description:
          'Toda la información se almacena y puede reutilizarse sin necesidad de una nueva consulta, según las reglas de plazo de reutilización de cada consulta.',
      },
    ],
    highlightTitle: 'Flujo único',
    highlightDescription: 'Lo consultado queda disponible para la aplicación de las reglas de crédito y puede reaprovecharse.',
  },
  benefits: {
    eyebrow: 'BENEFICIOS',
    title: 'Lo que gana su empresa',
    items: [
      {
        title: 'Autonomía total',
        description: 'Ajuste de las políticas de crédito en tiempo real, sin depender de terceros y con control de versiones.',
      },
      {
        title: 'Decisión automática a escala',
        description: 'Alta tasa de decisiones automáticas, con seguridad y precisión.',
      },
      {
        title: 'Reducción de costos',
        description: 'Menos esfuerzo manual y procesos estandarizados en toda la operación.',
      },
      {
        title: 'Mejor experiencia del cliente',
        description: 'Respuesta rápida en la solicitud, con impacto directo en la conversión.',
      },
    ],
  },
  segments: {
    title: 'Segmentos atendidos',
    description: 'Empresas que ya utilizan la plataforma para automatizar el análisis de crédito y de riesgos.',
    items: ['Bancos', 'Industria', 'Financieras', 'Seguros', 'Fintechs', 'Salud', 'Comercio'],
    complianceTitle: 'Conformidad',
    complianceDescription: 'Proceso ejecutado en conformidad con la LGPD, con registro completo de las consultas y de las decisiones.',
  },
  clients: {
    title: 'Clientes que confían en MobFácil',
  },
  contact: {
    eyebrow: 'CONVERSEMOS',
    title: 'Decisiones de crédito con más seguridad',
    description: 'Agende una demostración de MobCred y vea el motor de decisión funcionando con las políticas de crédito de su negocio.',
    siteLabel: 'Sitio web',
    emailLabel: 'E-mail',
    phoneLabel: 'Teléfono',
    ctaLabel: 'Hablar con MobFácil',
  },
  footer: {
    tagline: 'MobCred · Motor de Decisión de Crédito',
    legalTitle: 'Legal',
    privacy: 'Privacidad',
    terms: 'Términos',
    cookies: 'Cookies',
    rights: 'Todos los derechos reservados.',
  },
};
