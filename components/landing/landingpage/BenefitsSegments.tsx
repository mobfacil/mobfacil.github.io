'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Settings2, Gauge, TrendingDown, Smile, BadgeCheck } from 'lucide-react';
import { LandingLeadingPill } from '@/components/landing/leading/LandingLeadingPill';
import { SectionHeading } from './SectionHeading';
import { useLocale } from '@/src/i18n/LocaleContext';

const benefitIcons = [Settings2, Gauge, TrendingDown, Smile];
const easeOut = [0.16, 1, 0.3, 1] as const;

const BenefitsSegments: React.FC = () => {
  const { t } = useLocale();
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.12, delayChildren: reduce ? 0 : 0.1 } },
  };
  const item = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
  };

  return (
    <section className="bg-secondary-100/10 py-16 dark:bg-secondary-900/10 md:py-24">
      <div className="mx-auto max-w-6xl space-y-16 px-6">
        <div>
          <SectionHeading eyebrow={t.benefits.eyebrow} title={t.benefits.title} />
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {t.benefits.items.map((benefit, index) => {
              const Icon = benefitIcons[index] || Settings2;
              return (
                <motion.div
                  key={benefit.title}
                  variants={item}
                  className="group flex flex-col gap-3 rounded-2xl border border-border bg-card p-6 shadow-[0_16px_40px_-28px_rgba(23,31,71,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-primary-500/30 hover:shadow-[0_22px_48px_-24px_rgba(0,120,58,0.35)]"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-500/10 text-primary-600 transition-transform duration-300 group-hover:scale-110 dark:text-primary-400">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-semibold">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <div>
          <SectionHeading title={t.segments.title} description={t.segments.description} />
          <motion.div
            initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: easeOut }}
            className="flex flex-wrap justify-center gap-3"
          >
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
          </motion.div>
          <motion.div
            initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.55, ease: easeOut, delay: reduce ? 0 : 0.15 }}
            className="mx-auto mt-8 flex max-w-xl items-start gap-4 rounded-2xl border border-primary-500/30 bg-primary-500/[0.06] p-6 text-left dark:bg-primary-500/10"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-primary-600 dark:text-primary-400">
              <BadgeCheck className="h-5 w-5" />
            </span>
            <div>
              <h4 className="mb-1 font-semibold text-foreground">{t.segments.complianceTitle}</h4>
              <p className="text-sm text-muted-foreground">{t.segments.complianceDescription}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSegments;
