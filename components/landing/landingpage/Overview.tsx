'use client';

import React from 'react';
import { LandingProductFeatureKeyPoints } from '@/components/landing/LandingProductFeatureKeyPoints';
import { useLocale } from '@/src/i18n/LocaleContext';

const Overview: React.FC = () => {
  const { t } = useLocale();
  const keyPoints = t.overview.bullets.map((title) => ({ title }));

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
        <div className="space-y-5">
          <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">{t.overview.title}</h2>
          <p className="text-lg text-muted-foreground">{t.overview.description}</p>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-primary-500/30 bg-primary-500/5 p-6 dark:bg-primary-500/10">
            <h3 className="mb-2 text-lg font-semibold">{t.overview.flexTitle}</h3>
            <p className="text-sm text-muted-foreground">{t.overview.flexDescription}</p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="mb-4 text-lg font-semibold">{t.overview.engineTitle}</h3>
            <p className="mb-4 text-sm text-muted-foreground">{t.overview.engineDescription}</p>
            <LandingProductFeatureKeyPoints keyPoints={keyPoints} variant="primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
