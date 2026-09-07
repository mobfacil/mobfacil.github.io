'use client';

import React from 'react';
import { SectionHeading } from './SectionHeading';
import { useLocale } from '@/src/i18n/LocaleContext';

const HowItWorks: React.FC = () => {
  const { t } = useLocale();

  return (
    <section className="bg-secondary-100/10 py-16 dark:bg-secondary-900/10 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow={t.howItWorks.eyebrow}
          title={t.howItWorks.title}
          description={t.howItWorks.description}
        />

        {/* Connected stepper: horizontal rail on desktop, vertical timeline on mobile */}
        <div className="relative">
          <div aria-hidden className="absolute left-0 right-0 top-6 hidden h-px bg-border lg:block" />
          <div aria-hidden className="absolute left-6 bottom-6 top-6 w-px bg-border lg:hidden" />
          <ol className="grid gap-8 lg:grid-cols-4 lg:gap-6">
            {t.howItWorks.steps.map((step) => (
              <li key={step.number} className="relative flex items-start gap-4 lg:flex-col">
                <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary-500/30 bg-background font-mono text-lg font-bold text-primary-600 dark:text-primary-400">
                  {step.number}
                </span>
                <div className="pt-1 lg:pt-0">
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-12 rounded-2xl border border-primary-500/30 bg-primary-500/[0.06] p-6 dark:bg-primary-500/10">
          <h3 className="mb-2 text-lg font-semibold text-foreground">{t.howItWorks.finalTitle}</h3>
          <p className="text-sm text-muted-foreground">{t.howItWorks.finalDescription}</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
