'use client';

import React from 'react';
import { Database, Building2, Landmark, Share2 } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { useLocale } from '@/src/i18n/LocaleContext';

const icons = [Database, Building2, Landmark, Share2];

const DataSources: React.FC = () => {
  const { t } = useLocale();

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title={t.dataSources.title} description={t.dataSources.description} />

        {/* One unified panel: sources are columns separated by hairlines, not gaps,
            reinforcing the "single integrated flow" message. */}
        <div className="overflow-hidden rounded-2xl border border-border bg-border">
          <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {t.dataSources.items.map((item, index) => {
              const Icon = icons[index] || Database;
              return (
                <div key={item.title} className="flex flex-col gap-3 bg-card p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-500/10 text-primary-600 dark:text-primary-400">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-px flex flex-col gap-2 bg-primary-500/[0.06] px-6 py-5 sm:flex-row sm:items-center sm:justify-between dark:bg-primary-500/10">
            <div>
              <p className="font-semibold text-foreground">{t.dataSources.highlightTitle}</p>
              <p className="text-sm text-muted-foreground">{t.dataSources.highlightDescription}</p>
            </div>
            <p className="max-w-sm text-sm font-medium text-primary-600 dark:text-primary-400">
              {t.dataSources.footnote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataSources;
