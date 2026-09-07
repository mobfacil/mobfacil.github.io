'use client';

import React from 'react';
import { LandingLeadingPill } from '@/components/landing/leading/LandingLeadingPill';
import { SectionHeading } from './SectionHeading';
import { useLocale } from '@/src/i18n/LocaleContext';

const BenefitsSegments: React.FC = () => {
  const { t } = useLocale();

  return (
    <section className="bg-secondary-100/10 py-16 dark:bg-secondary-900/10 md:py-24">
      <div className="mx-auto max-w-6xl space-y-16 px-6">
        <div>
          <SectionHeading title={t.benefits.title} />
          <div className="grid gap-6 sm:grid-cols-2">
            {t.benefits.items.map((benefit) => (
              <div key={benefit.title} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="mb-2 font-semibold">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h3 className="mb-2 text-xl font-bold">{t.segments.title}</h3>
          <p className="mx-auto mb-6 max-w-xl text-muted-foreground">{t.segments.description}</p>
          <div className="flex flex-wrap justify-center gap-3">
            {t.segments.items.map((segment) => (
              <LandingLeadingPill
                key={segment}
                text={segment}
                textVariant="primary"
                borderVariant="primary"
                backgroundVariant="primaryGlass"
                withBackground
                withBorder
              />
            ))}
          </div>
          <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-border bg-card p-6 text-left">
            <h4 className="mb-1 font-semibold">{t.segments.complianceTitle}</h4>
            <p className="text-sm text-muted-foreground">{t.segments.complianceDescription}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSegments;
