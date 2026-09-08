'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { SlidersHorizontal, Zap } from 'lucide-react';
import { LandingProductFeatureKeyPoints } from '@/components/landing/LandingProductFeatureKeyPoints';
import { useLocale } from '@/src/i18n/LocaleContext';

const easeOut = [0.16, 1, 0.3, 1] as const;

const Overview: React.FC = () => {
  const { t } = useLocale();
  const reduce = useReducedMotion();
  const keyPoints = t.overview.bullets.map((title) => ({ title }));

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.15, delayChildren: reduce ? 0 : 0.1 } },
  };
  const item = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: easeOut } },
  };

  return (
    <section className="relative isolate overflow-hidden py-16 md:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/2 -z-10 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-gradient-to-br from-primary-500/15 via-secondary-500/10 to-transparent blur-3xl"
      />

      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
        <div className="space-y-5">
          <span className="block text-sm font-semibold uppercase tracking-wide text-primary-500">
            {t.overview.eyebrow}
          </span>
          <h2 className="text-balance text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
            {t.overview.title}
          </h2>
          <p className="text-lg text-muted-foreground">{t.overview.description}</p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="space-y-6"
        >
          <motion.div
            variants={item}
            className="rounded-2xl border border-primary-500/30 bg-primary-500/5 p-6 dark:bg-primary-500/10"
          >
            <div className="mb-2 flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-primary-600 dark:text-primary-400">
                <SlidersHorizontal className="h-4 w-4" />
              </span>
              <h3 className="text-lg font-semibold">{t.overview.flexTitle}</h3>
            </div>
            <p className="text-sm text-muted-foreground">{t.overview.flexDescription}</p>
          </motion.div>

          <motion.div
            variants={item}
            className="relative rounded-2xl border border-border bg-card p-6 shadow-[0_20px_50px_-24px_rgba(23,31,71,0.35)] transition-shadow duration-300 hover:shadow-[0_28px_60px_-20px_rgba(23,31,71,0.4)] lg:-mr-4 lg:translate-x-2"
          >
            <div className="mb-4 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary-500/10 text-secondary-600 dark:text-secondary-300">
                  <Zap className="h-4 w-4" />
                </span>
                <h3 className="text-lg font-semibold">{t.overview.engineTitle}</h3>
              </div>
              <span className="hidden shrink-0 rounded-md bg-secondary-500/10 px-2 py-0.5 font-mono text-xs font-semibold text-secondary-600 dark:text-secondary-300 sm:inline-block">
                MobCred
              </span>
            </div>
            <p className="mb-4 text-sm text-muted-foreground">{t.overview.engineDescription}</p>
            <LandingProductFeatureKeyPoints
              keyPoints={keyPoints}
              variant="primary"
              className="mt-0 space-y-1"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Overview;
