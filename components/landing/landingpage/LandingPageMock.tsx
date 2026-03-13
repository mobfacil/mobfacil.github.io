import React from 'react';
import Hero from './Hero';
import Navbar from './Navbar';
import FeaturesGrid, { Feature } from './FeaturesGrid';
import Testimonials from './Testimonials';
import Footer, { FooterColumn } from './Footer';
import { Rocket, ShieldCheck, Smartphone } from 'lucide-react';
import { LandingCurvedLinesCtaBg } from '@/components/landing/cta-backgrounds/LandingCurvedLinesCtaBg';


const navbarLinks = [
  { label: 'Início', href: '#hero' },
  { label: 'Funcionalidades', href: '#features' },
  { label: 'Depoimentos', href: '#testimonials' },
  { label: 'Planos', href: '#pricing' },
];

const features: Feature[] = [
  {
    id: 1,
    title: 'Lançamento Rápido',
    description: 'Implemente soluções em minutos com nossa plataforma intuitiva.',
    icon: Rocket,
  },
  {
    id: 2,
    title: 'Segurança Garantida',
    description: 'Seus dados protegidos com criptografia de ponta a ponta.',
    icon: ShieldCheck,
  },
  {
    id: 3,
    title: 'Mobile First',
    description: 'Experiência otimizada para dispositivos móveis.',
    icon: Smartphone,
  },
];

const footerColumns: FooterColumn[] = [
  {
    title: 'Produto',
    links: [
      { label: 'Funcionalidades', href: '#' },
      { label: 'Preços', href: '#' },
      { label: 'Blog', href: '#' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Sobre', href: '#' },
      { label: 'Carreiras', href: '#' },
      { label: 'Contato', href: '#' },
    ],
  },
  {
    title: 'Recursos',
    links: [
      { label: 'Ajuda', href: '#' },
      { label: 'API', href: '#' },
      { label: 'Status', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacidade', href: '#' },
      { label: 'Termos', href: '#' },
      { label: 'Cookies', href: '#' },
    ],
  },
];

const LandingPageMock: React.FC = () => {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <LandingCurvedLinesCtaBg variant="primary" />
      <div className="w-full flex justify-center pt-8">
        <Navbar links={navbarLinks} />
      </div>
      <main className="flex-1">
        <div id="hero">
          <Hero headline="Otimize suas vendas com segurança" subtext="Utilize dados públicos e inteligência analítica para avaliar risco de crédito com mais precisão e menos inadimplência." />
        </div>
        <div id="features">
          <FeaturesGrid features={features} />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
      </main>
      <Footer columns={footerColumns} />
    </div>
  );
};

export default LandingPageMock;
