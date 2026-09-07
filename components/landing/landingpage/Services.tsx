'use client';

import React from 'react';
import { ScanFace, Globe2 } from 'lucide-react';
import { LandingProductFeatureKeyPoints } from '@/components/landing/LandingProductFeatureKeyPoints';
import { useLocale } from '@/src/i18n/LocaleContext';
import type { Dictionary, KeyPointItem } from '@/src/i18n/types';

const ServiceCard: React.FC<{
  icon: React.ElementType;
  title: string;
  description: string;
  items: KeyPointItem[];
  highlightTitle: string;
  highlightDescription: string;
}> = ({ icon: Icon, title, description, items, highlightTitle, highlightDescription }) => (
  <div className="flex flex-col gap-6 rounded-2xl border border-border bg-card p-8">
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500/10 text-primary-500">
      <Icon className="h-6 w-6" />
    </div>
    <div className="space-y-2">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
    <LandingProductFeatureKeyPoints keyPoints={items} variant="primary" />
    <div className="mt-auto rounded-xl bg-primary-500/5 p-4 dark:bg-primary-500/10">
      <p className="text-sm font-semibold text-foreground">{highlightTitle}</p>
      <p className="mt-1 text-sm text-muted-foreground">{highlightDescription}</p>
    </div>
  </div>
);

const Services: React.FC = () => {
  const { t }: { t: Dictionary } = useLocale();

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-6 px-6 lg:grid-cols-2">
        <ServiceCard
          icon={ScanFace}
          title={t.documentAnalysis.title}
          description={t.documentAnalysis.description}
          items={t.documentAnalysis.items}
          highlightTitle={t.documentAnalysis.highlightTitle}
          highlightDescription={t.documentAnalysis.highlightDescription}
        />
        <ServiceCard
          icon={Globe2}
          title={t.webSearch.title}
          description={t.webSearch.description}
          items={t.webSearch.items}
          highlightTitle={t.webSearch.highlightTitle}
          highlightDescription={t.webSearch.highlightDescription}
        />
      </div>
    </section>
  );
};

export default Services;
