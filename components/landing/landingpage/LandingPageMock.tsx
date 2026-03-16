"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Hero from './Hero';
import Navbar from './Navbar';
import FeaturesGrid, { Feature } from './FeaturesGrid';
import Testimonials from './Testimonials';
import Footer, { FooterColumn } from './Footer';
import { Rocket, ShieldCheck, Smartphone } from 'lucide-react';
import { LandingCurvedLinesCtaBg } from '@/components/landing/cta-backgrounds/LandingCurvedLinesCtaBg';
import NavbarMobile from './NavbarMobile';

const navbarLinks = [
  { label: 'Início', href: '#hero' },
  { label: 'Funcionalidades', href: '#features' },
  { label: 'Depoimentos', href: '#testimonials' }
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
  // {
  //   title: 'Produto',
  //   links: [
  //     { label: 'Funcionalidades', href: '#' },
  //     { label: 'Preços', href: '#' },
  //     { label: 'Blog', href: '#' },
  //   ],
  // },
  // {
  //   title: 'Empresa',
  //   links: [
  //     { label: 'Sobre', href: '#' },
  //     { label: 'Carreiras', href: '#' },
  //     { label: 'Contato', href: '#' },
  //   ],
  // },
  // {
  //   title: 'Recursos',
  //   links: [
  //     { label: 'Ajuda', href: '#' },
  //     { label: 'API', href: '#' },
  //     { label: 'Status', href: '#' },
  //   ],
  // },
  {
    title: 'Legal',
    links: [
      { label: 'Privacidade', href: '/privacidade' },
      { label: 'Termos', href: '/termos' },
      { label: 'Cookies', href: '/cookies' },
    ],
  },
];

const LandingPageMock: React.FC = () => {
  const easeOut = [0.16, 1, 0.3, 1] as const;

  const sectionMotion = {
    initial: { opacity: 0, y: 32 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.75, ease: easeOut },
    viewport: { once: true, amount: 0.35 },
  };

  return (
    <motion.div
      className="bg-background min-h-screen flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: easeOut }}
    >
      <LandingCurvedLinesCtaBg variant="primary" />
      <div className="w-full flex justify-center pt-8">
        <div className='flex md:hidden'>
          <NavbarMobile links={navbarLinks} />
        </div>
        <div className='hidden md:flex'>
          <Navbar links={navbarLinks} />
        </div>
      </div>
      <main className="flex-1">
        <motion.section id="hero" {...sectionMotion}>
          <Hero
            headline="Otimize suas vendas com segurança"
            subtext="Utilize dados públicos e inteligência analítica para avaliar risco de crédito com mais precisão e menos inadimplência."
          />
        </motion.section>
        <motion.section id="features" {...sectionMotion}>
          <FeaturesGrid features={features} />
        </motion.section>
        <motion.section id="testimonials" {...sectionMotion}>
          <Testimonials />
        </motion.section>
      </main>
      <Footer columns={footerColumns} />
    </motion.div>
  );
};

export default LandingPageMock;
