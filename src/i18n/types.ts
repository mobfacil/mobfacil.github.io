export interface KeyPointItem {
  title: string;
  description: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
}

export interface Dictionary {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    home: string;
    howItWorks: string;
    platform: string;
    dataSources: string;
    services: string;
    docs: string;
    clients: string;
    contact: string;
    cta: string;
    themeToggle: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    highlight: string;
    subtext: string;
    ctaPrimary: string;
    ctaSecondary: string;
    pillars: { number: string; title: string; items: string[] }[];
    demo: {
      label: string;
      request: string;
      steps: string[];
      decisionLabel: string;
      approved: string;
      time: string;
      note: string;
    };
  };
  overview: {
    eyebrow: string;
    title: string;
    description: string;
    flexTitle: string;
    flexDescription: string;
    engineTitle: string;
    engineDescription: string;
    bullets: string[];
  };
  platform: {
    eyebrow: string;
    title: string;
    items: KeyPointItem[];
  };
  howItWorks: {
    eyebrow: string;
    title: string;
    description: string;
    steps: StepItem[];
    finalTitle: string;
    finalDescription: string;
  };
  dataSources: {
    eyebrow: string;
    title: string;
    description: string;
    items: KeyPointItem[];
    highlightTitle: string;
    highlightDescription: string;
    footnote: string;
  };
  documentAnalysis: {
    eyebrow: string;
    title: string;
    description: string;
    items: KeyPointItem[];
    highlightTitle: string;
    highlightDescription: string;
  };
  webSearch: {
    eyebrow: string;
    title: string;
    description: string;
    items: KeyPointItem[];
    highlightTitle: string;
    highlightDescription: string;
  };
  benefits: {
    eyebrow: string;
    title: string;
    items: KeyPointItem[];
  };
  segments: {
    title: string;
    description: string;
    items: string[];
    complianceTitle: string;
    complianceDescription: string;
  };
  clients: {
    title: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    siteLabel: string;
    emailLabel: string;
    phoneLabel: string;
    ctaLabel: string;
  };
  footer: {
    tagline: string;
    legalTitle: string;
    privacy: string;
    terms: string;
    cookies: string;
    rights: string;
  };
}
