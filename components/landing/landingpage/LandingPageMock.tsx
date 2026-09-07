"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Hero from './Hero';
import Navbar from './Navbar';
import NavbarMobile from './NavbarMobile';
import Overview from './Overview';
import PlatformFeatures from './PlatformFeatures';
import HowItWorks from './HowItWorks';
import DataSources from './DataSources';
import Services from './Services';
import BenefitsSegments from './BenefitsSegments';
import Testimonials from './Testimonials';
import ContactCta from './ContactCta';
import Footer from './Footer';
import { LandingCurvedLinesCtaBg } from '@/components/landing/cta-backgrounds/LandingCurvedLinesCtaBg';
import { LocaleProvider, useLocale } from '@/src/i18n/LocaleContext';
import { Locale } from '@/src/i18n';

const easeOut = [0.16, 1, 0.3, 1] as const;

const sectionMotion = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.75, ease: easeOut },
  viewport: { once: true, amount: 0.35 },
};

const LandingPageContent: React.FC = () => {
  const { t } = useLocale();

  return (
    <>
      <Head>
        <title>{t.meta.title}</title>
        <meta name="description" content={t.meta.description} />
      </Head>

      <motion.div
        className="flex min-h-screen flex-col bg-background text-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: easeOut }}
      >
        <LandingCurvedLinesCtaBg variant="primary" />

        <div className="md:hidden">
          <NavbarMobile />
        </div>
        <div className="hidden md:block">
          <Navbar />
        </div>

        <main className="flex-1">
          <motion.section id="hero" {...sectionMotion}>
            <Hero />
          </motion.section>
          <motion.section id="overview" {...sectionMotion}>
            <Overview />
          </motion.section>
          <motion.section id="platform" {...sectionMotion}>
            <PlatformFeatures />
          </motion.section>
          <motion.section id="how-it-works" {...sectionMotion}>
            <HowItWorks />
          </motion.section>
          <motion.section id="data-sources" {...sectionMotion}>
            <DataSources />
          </motion.section>
          <motion.section id="services" {...sectionMotion}>
            <Services />
          </motion.section>
          <motion.section id="benefits" {...sectionMotion}>
            <BenefitsSegments />
          </motion.section>
          <motion.section id="clients" {...sectionMotion}>
            <Testimonials />
          </motion.section>
          <motion.section id="contact" {...sectionMotion}>
            <ContactCta />
          </motion.section>
        </main>

        <Footer />
      </motion.div>
    </>
  );
};

const LandingPageMock: React.FC<{ locale: Locale }> = ({ locale }) => (
  <LocaleProvider locale={locale}>
    <LandingPageContent />
  </LocaleProvider>
);

export default LandingPageMock;
