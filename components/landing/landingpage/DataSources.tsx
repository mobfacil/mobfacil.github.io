'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Database, Building2, Landmark, Share2 } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { useLocale } from '@/src/i18n/LocaleContext';

const icons = [Database, Building2, Landmark, Share2];
const easeOut = [0.16, 1, 0.3, 1] as const;

const DataSources: React.FC = () => {
  const { t } = useLocale();
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.12, delayChildren: reduce ? 0 : 0.1 } },
  };
  const card = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
  };

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow={t.dataSources.eyebrow}
          title={t.dataSources.title}
          description={t.dataSources.description}
        />

        {/* Cards separated by real gaps so each source can lift on hover;
            the highlight bar underneath still reads as the unifying "single flow" outcome. */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {t.dataSources.items.map((item, index) => {
            const Icon = icons[index] || Database;
            return (
              <motion.div
                key={item.title}
                variants={card}
                className="group flex flex-col gap-3 rounded-2xl border border-border bg-card p-6 shadow-[0_16px_40px_-28px_rgba(23,31,71,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-primary-500/30 hover:shadow-[0_22px_48px_-24px_rgba(0,120,58,0.35)]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-500/10 text-primary-600 transition-transform duration-300 group-hover:scale-110 dark:text-primary-400">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, ease: easeOut, delay: reduce ? 0 : 0.4 }}
          className="mt-4 flex flex-col gap-3 rounded-2xl border border-primary-500/30 bg-primary-500/[0.06] px-6 py-5 sm:flex-row sm:items-center sm:justify-between dark:bg-primary-500/10"
        >
          <div>
            <p className="font-semibold text-foreground">{t.dataSources.highlightTitle}</p>
            <p className="text-sm text-muted-foreground">{t.dataSources.highlightDescription}</p>
          </div>
          <p className="max-w-sm text-sm font-medium text-primary-600 dark:text-primary-400">
            {t.dataSources.footnote}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DataSources;
