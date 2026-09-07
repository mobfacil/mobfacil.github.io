'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Check, FileText, ShieldCheck } from 'lucide-react';
import { useLocale } from '@/src/i18n/LocaleContext';

const easeOut = [0.16, 1, 0.3, 1] as const;

const DecisionCard: React.FC = () => {
  const { t } = useLocale();
  const reduce = useReducedMotion();
  const demo = t.hero.demo;

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.22, delayChildren: reduce ? 0 : 0.15 },
    },
  };

  const row = {
    hidden: reduce ? { opacity: 1 } : { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
  };

  const pop = {
    hidden: reduce ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: easeOut } },
  };

  return (
    <div className="relative">
      {/* Ambient brand glow behind the card */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-primary-500/15 via-transparent to-secondary-500/15 blur-2xl"
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        className="w-full rounded-2xl border border-border bg-card p-6 shadow-[0_20px_60px_-20px_rgba(23,31,71,0.35)]"
      >
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-500/70" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary-500" />
            </span>
            {demo.label}
          </span>
          <span className="rounded-md bg-secondary-500/10 px-2 py-0.5 font-mono text-xs font-semibold text-secondary-600 dark:text-secondary-300">
            MobCred
          </span>
        </div>

        <div className="mt-5 flex items-baseline justify-between border-b border-border pb-4">
          <span className="font-semibold text-foreground">{demo.request}</span>
          <span className="font-mono text-sm text-muted-foreground">#00482</span>
        </div>

        <motion.ul variants={container} className="mt-4 space-y-3">
          {demo.steps.map((step, i) => {
            const Icon = i === 0 ? ShieldCheck : i === 1 ? Check : FileText;
            return (
              <motion.li key={step} variants={row} className="flex items-center gap-3">
                <motion.span
                  variants={pop}
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-500/12 text-primary-600 dark:text-primary-400"
                >
                  <Icon className="h-4 w-4" />
                </motion.span>
                <span className="text-sm text-muted-foreground">{step}</span>
                <motion.span variants={pop} className="ml-auto text-primary-500">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </motion.span>
              </motion.li>
            );
          })}
        </motion.ul>

        <motion.div
          variants={row}
          className="mt-5 flex items-center justify-between rounded-xl bg-primary-500/10 px-4 py-3"
        >
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-wide text-muted-foreground">
              {demo.decisionLabel}
            </span>
            <span className="text-lg font-bold text-primary-600 dark:text-primary-400">
              {demo.approved}
            </span>
          </div>
          <span className="font-mono text-2xl font-bold tabular-nums text-foreground">{demo.time}</span>
        </motion.div>
      </motion.div>

      <p className="mt-3 text-center text-xs text-muted-foreground/70">{demo.note}</p>
    </div>
  );
};

export default DecisionCard;
