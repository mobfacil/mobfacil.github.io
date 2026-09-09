import type { Dictionary } from '../types';

export const en: Dictionary = {
  meta: {
    title: 'MobFácil | MobCred · Credit Decision Engine',
    description:
      'MobCred automates credit underwriting with custom business rules, queries to internal and external sources, and decisions in seconds.',
  },
  nav: {
    home: 'Home',
    howItWorks: 'How it works',
    platform: 'Platform',
    dataSources: 'Data sources',
    services: 'Services',
    docs: 'Documentation',
    clients: 'Clients',
    contact: 'Contact',
    cta: "Let's talk",
    themeToggle: 'Toggle theme',
  },
  hero: {
    eyebrow: 'MOBCRED · CREDIT DECISION ENGINE',
    headline: 'Intelligent solutions for',
    highlight: 'credit underwriting',
    subtext: 'Data analysis automation that brings certainty to the decisions driving your sales.',
    ctaPrimary: "Let's talk",
    ctaSecondary: 'How it works',
    pillars: [
      { number: '01', title: 'Decision engine', items: ['Custom rules', 'Automated decisions'] },
      { number: '02', title: 'Data sources and origin', items: ['Internal and external', 'Public and private'] },
      { number: '03', title: 'Required documents', items: ['Data extraction and processing', 'Facial validation'] },
    ],
    demo: {
      label: 'Real-time analysis',
      request: 'Credit application',
      steps: [
        'Query to public and private sources',
        'Business rules applied',
        'Document validation',
      ],
      decisionLabel: 'Automated decision',
      approved: 'Approved',
      time: '1.2s',
      note: 'Illustrative example',
    },
  },
  overview: {
    eyebrow: 'MOBCRED',
    title: 'Automate underwriting and protect your business',
    description:
      'In a challenging economic environment, where speed and accuracy are critical, MobCred stands out as the complete solution, combining advanced technology, operational flexibility and security for better decision-making.',
    flexTitle: 'Flexibility, speed and autonomy',
    flexDescription:
      'Adjust your credit policies in real time, without depending on third parties and without new development cycles.',
    engineTitle: 'MobCred automates the decision process with precision',
    engineDescription:
      'It gathers information, queries internal and external sources, applies your business rules and recommends the best course of action, in seconds.',
    bullets: [
      'Automated queries to public and private sources',
      'Application of your custom business rules',
      'Fast, standardized decisions',
    ],
  },
  platform: {
    eyebrow: 'MOBCRED',
    title: 'What the platform delivers',
    items: [
      {
        title: 'Integration with internal and external sources',
        description:
          'Your own databases and market providers, public and private, in a single, fully integrated query flow.',
      },
      {
        title: 'Configurable business rules',
        description:
          'Policies configured by your team, by financial product and service, customer profile, region and other risk parameters.',
      },
      {
        title: 'Standardized criteria',
        description: 'The same criteria on every application, with no variation between analysts and no human intervention.',
      },
      {
        title: 'Compliant with the LGPD',
        description:
          "Personal data handled under the requirements of Brazil's data protection law, with end-to-end traceability.",
      },
      {
        title: 'Full decision audit trail',
        description: 'A history of queries, rules applied and decisions made. Everything logged to support analysis and audit.',
      },
      {
        title: 'Answers in seconds',
        description: 'A high rate of automated decisions, with security, accuracy and an immediate answer to the customer.',
      },
    ],
  },
  howItWorks: {
    eyebrow: 'HOW IT WORKS',
    title: 'More accurate decisions in four steps',
    description: 'From integration to the credit decision, with no manual intervention and no rework.',
    steps: [
      {
        number: '01',
        title: 'API integration',
        description:
          'Connect MobCred to the systems you already use, such as ERPs and CRMs. Your data flows automatically into the analysis.',
      },
      {
        number: '02',
        title: 'Policy configuration',
        description:
          'Create policies and define your business rules according to the financial objectives and results you expect. Fast to build and maintain.',
      },
      {
        number: '03',
        title: 'Execution and queries',
        description:
          'Automated queries to every internal and external source to retrieve information and apply the rules, including the documents submitted.',
      },
      {
        number: '04',
        title: 'Credit decision',
        description: 'Approved, declined or referred for a more detailed review, in seconds.',
      },
    ],
    finalTitle: 'Final decision',
    finalDescription: 'Approved, declined or referred for review, with a complete record of the path to the decision.',
  },
  dataSources: {
    eyebrow: 'DATA SOURCES',
    title: 'Internal and external data sources',
    description: 'Fast integration with internal and external sources: public and private information, government records and social media.',
    items: [
      {
        title: 'Internal databases',
        description: 'Customer records, relationship history and payment behavior.',
      },
      {
        title: 'Bureaus and private sources',
        description: 'Market providers queried within the decision flow.',
      },
      {
        title: 'Public and government sources',
        description: 'Official queries integrated into the process, with every response logged.',
      },
      {
        title: 'Social media and open sources',
        description: 'Supplementary information to enrich the profile under analysis.',
      },
    ],
    highlightTitle: 'Custom APIs',
    highlightDescription: 'Direct connections or web scraping for automated access to information.',
    footnote: 'No manual lookups scattered across multiple portals and no re-keying of data between systems.',
  },
  documentAnalysis: {
    eyebrow: 'OTHER SERVICES',
    title: 'Document analysis for the decision process',
    description:
      'Analysis and classification of the documents required for the decision, with data extraction and automated validation by cross-checking against the sources available in your company and on the market.',
    items: [
      {
        title: 'Classification and extraction',
        description: 'Identification of the document type and automated capture of the data it contains.',
      },
      {
        title: 'Facial validation',
        description: "Comparison of the customer's selfie with the photo on the ID document or any other document carrying their photo.",
      },
      {
        title: 'Data verification',
        description: 'Name, date of birth, ID number, photo and tokens from scanned documents can be validated in seconds.',
      },
    ],
    highlightTitle: 'Single flow',
    highlightDescription: 'What is extracted from the documents feeds the credit rules automatically, with no re-keying and no manual checking.',
  },
  webSearch: {
    eyebrow: 'OTHER SERVICES',
    title: 'Search across public websites and social media',
    description: "Custom APIs built to each business's needs, retrieving information from public websites and social media.",
    items: [
      {
        title: 'Customization',
        description: "Beyond the sources already available, we build search solutions tailored to each company's needs and to the availability of the information.",
      },
      {
        title: 'Maintenance and monitoring',
        description: 'A dedicated monitoring team identifies and adjusts within the agreed SLA whenever a source changes.',
      },
      {
        title: 'Storage and reuse',
        description: 'All information is stored and can be reused without a new query, according to the reuse window defined for each query.',
      },
    ],
    highlightTitle: 'Single flow',
    highlightDescription: 'What is retrieved becomes available to the credit rules and can be reused.',
  },
  benefits: {
    eyebrow: 'BENEFITS',
    title: 'What your company gains',
    items: [
      {
        title: 'Full autonomy',
        description: 'Adjust credit policies in real time, without depending on third parties and with version control.',
      },
      {
        title: 'Automated decisions at scale',
        description: 'A high rate of automated decisions, with security and accuracy.',
      },
      {
        title: 'Lower costs',
        description: 'Less manual effort and standardized processes across the operation.',
      },
      {
        title: 'Better customer experience',
        description: 'A fast answer on the application, with direct impact on conversion.',
      },
    ],
  },
  segments: {
    title: 'Industries served',
    description: 'Companies already using the platform to automate credit and risk analysis.',
    items: ['Banks', 'Industry', 'Lenders', 'Insurance', 'Fintechs', 'Healthcare', 'Retail'],
    complianceTitle: 'Compliance',
    complianceDescription: 'The process runs in compliance with the LGPD, with a complete record of queries and decisions.',
  },
  clients: {
    title: 'Clients who trust MobFácil',
  },
  contact: {
    eyebrow: "LET'S TALK",
    title: 'Credit decisions with more confidence',
    description: 'Book a MobCred demo and see the decision engine running on your own credit policies.',
    siteLabel: 'Website',
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    ctaLabel: 'Talk to MobFácil',
  },
  footer: {
    tagline: 'MobCred · Credit Decision Engine',
    legalTitle: 'Legal',
    privacy: 'Privacy',
    terms: 'Terms',
    cookies: 'Cookies',
    rights: 'All rights reserved.',
  },
};
