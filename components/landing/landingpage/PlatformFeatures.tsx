'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Network, SlidersHorizontal, ListChecks, FileCheck, History, Zap } from 'lucide-react';
import { LandingBentoGridSection } from '@/components/landing/bento-grid/LandingBentoGridSection';
import { LandingBentoGridIconItem } from '@/components/landing/bento-grid/LandingBentoGridIconItem';
import { SectionHeading } from './SectionHeading';
import { useLocale } from '@/src/i18n/LocaleContext';

const easeOut = [0.16, 1, 0.3, 1] as const;
const icons = [Network, SlidersHorizontal, ListChecks, FileCheck, History, Zap];
// Last item ("Resposta em segundos") is the headline metric — give it visual weight
// instead of rendering all six tiles with identical emphasis.
const highlightIndex = 5;

const PlatformFeatures: React.FC = () => {
  const { t } = useLocale();
  const reduce = useReducedMotion();

  return (
    <LandingBentoGridSection
      titleComponent={<SectionHeading title={t.platform.title} />}
      gridClassName="md:grid-cols-2 lg:grid-cols-3"
    >
      {t.platform.items.map((item, index) => {
        const Icon = icons[index] || Zap;
        const isHighlight = index === highlightIndex;
        return (
          <motion.div
            key={item.title}
            initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: easeOut, delay: reduce ? 0 : (index % 3) * 0.1 }}
          >
            <LandingBentoGridIconItem
              variant={isHighlight ? 'primary' : 'default'}
              icon={
                <Icon
                  className={`h-8 w-8 transition-transform duration-300 group-hover:scale-110 ${
                    isHighlight ? 'text-primary-500 dark:text-primary-400' : ''
                  }`}
                />
              }
              topTextComponent={
                <span
                  className={`font-semibold ${isHighlight ? 'text-primary-700 dark:text-primary-300' : 'text-foreground'}`}
                >
                  {item.title}
                </span>
              }
              bottomText={item.description}
              className="h-full min-h-[220px]"
            />
          </motion.div>
        );
      })}
    </LandingBentoGridSection>
  );
};

export default PlatformFeatures;
