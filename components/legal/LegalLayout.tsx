'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { LocaleProvider } from '@/src/i18n/LocaleContext';
import { ThemeToggle } from '@/components/shared/ThemeToggle';
import Footer from '@/components/landing/landingpage/Footer';
import logo from '@/src/images/logo_mobfacil.svg';
import logoWhite from '@/src/images/logo_mobfacil_branco.svg';

const easeOut = [0.16, 1, 0.3, 1] as const;

export interface LegalSection {
  id: string;
  title: string;
  content: React.ReactNode;
}

export const LegalLayout: React.FC<{
  eyebrow: string;
  title: string;
  updatedLabel: string;
  intro: React.ReactNode;
  sections: LegalSection[];
}> = ({ eyebrow, title, updatedLabel, intro, sections }) => {
  const reduce = useReducedMotion();

  return (
    <LocaleProvider locale="pt">
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <header className="border-b border-border">
          <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4">
            <Link href="/" className="flex h-8 w-32 items-center" aria-label="Ir para a página inicial da MobFácil">
              <img src={logo.src} alt="MobFácil" className="h-full w-full object-contain dark:hidden" />
              <img src={logoWhite.src} alt="MobFácil" className="hidden h-full w-full object-contain dark:block" />
            </Link>
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="hidden items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary-600 dark:hover:text-primary-400 sm:flex"
              >
                <ArrowLeft className="h-4 w-4" />
                Voltar ao site
              </Link>
              <ThemeToggle label="Alternar tema" />
            </div>
          </div>
        </header>

        <main className="flex-1">
          <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
            <motion.header
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: easeOut }}
              className="mb-12 space-y-4"
            >
              <span className="block text-sm font-semibold uppercase tracking-wide text-primary-500">{eyebrow}</span>
              <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h1>
              <p className="text-sm text-muted-foreground">{updatedLabel}</p>
              <div className="text-lg text-muted-foreground">{intro}</div>
            </motion.header>

            <nav aria-label="Sumário" className="mb-12 flex flex-wrap gap-2">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary-500/40 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  {s.title}
                </a>
              ))}
            </nav>

            <div className="space-y-6">
              {sections.map((s, index) => (
                <motion.section
                  key={s.id}
                  id={s.id}
                  initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, ease: easeOut, delay: reduce ? 0 : Math.min(index, 4) * 0.05 }}
                  className="scroll-mt-24 rounded-2xl border border-border bg-card p-6 md:p-8"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-500/10 font-mono text-sm font-bold text-primary-600 dark:text-primary-400">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h2 className="text-lg font-semibold md:text-xl">{s.title}</h2>
                  </div>
                  <div className="space-y-3 text-sm leading-relaxed text-muted-foreground md:text-base [&_a]:font-medium [&_a]:text-primary-600 [&_a]:underline [&_a]:underline-offset-2 dark:[&_a]:text-primary-400 [&_li]:ml-5 [&_ul]:list-disc [&_ul]:space-y-1.5">
                    {s.content}
                  </div>
                </motion.section>
              ))}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </LocaleProvider>
  );
};
