'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { useLocale } from '@/src/i18n/LocaleContext';

const easeOut = [0.16, 1, 0.3, 1] as const;

const HowItWorks: React.FC = () => {
  const { t } = useLocale();
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.18, delayChildren: reduce ? 0 : 0.1 } },
  };
  const step = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
  };
  const badge = {
    hidden: reduce ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: easeOut } },
  };

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
          <motion.div
            aria-hidden
            initial={reduce ? { scaleX: 1 } : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1.1, ease: easeOut, delay: reduce ? 0 : 0.15 }}
            style={{ transformOrigin: 'left' }}
            className="absolute left-0 right-0 top-6 hidden h-px bg-primary-500/70 lg:block"
          />

          <div aria-hidden className="absolute left-6 bottom-6 top-6 w-px bg-border lg:hidden" />
          <motion.div
            aria-hidden
            initial={reduce ? { scaleY: 1 } : { scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1.1, ease: easeOut, delay: reduce ? 0 : 0.15 }}
            style={{ transformOrigin: 'top' }}
            className="absolute bottom-6 left-6 top-6 w-px bg-primary-500/70 lg:hidden"
          />

          <motion.ol
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid gap-8 lg:grid-cols-4 lg:gap-6"
          >
            {t.howItWorks.steps.map((s) => (
              <motion.li key={s.number} variants={step} className="relative flex items-start gap-4 lg:flex-col">
                <motion.span
                  variants={badge}
                  className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary-500/30 bg-background font-mono text-lg font-bold text-primary-600 dark:text-primary-400"
                >
                  {s.number}
                </motion.span>
                <div className="pt-1 lg:pt-0">
                  <h3 className="font-semibold">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.description}</p>
                </div>
              </motion.li>
            ))}
          </motion.ol>

          {/* Connector from the last step down into the outcome card */}
          <div
            aria-hidden
            className="absolute bottom-0 right-[12.5%] top-6 hidden w-px translate-y-full bg-gradient-to-b from-primary-500/50 to-transparent lg:block"
            style={{ height: '3rem' }}
          />
        </div>

        <motion.div
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, ease: easeOut, delay: reduce ? 0 : 0.5 }}
          className="mt-12 flex items-start gap-4 rounded-2xl border border-primary-500/30 bg-primary-500/[0.06] p-6 shadow-[0_18px_46px_-26px_rgba(0,120,58,0.45)] transition-shadow duration-300 hover:shadow-[0_24px_56px_-22px_rgba(0,120,58,0.55)] dark:bg-primary-500/10"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-primary-600 dark:text-primary-400">
            <CheckCircle2 className="h-5 w-5" />
          </span>
          <div>
            <h3 className="mb-1 text-lg font-semibold text-foreground">{t.howItWorks.finalTitle}</h3>
            <p className="text-sm text-muted-foreground">{t.howItWorks.finalDescription}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
