'use client';

import React from 'react';
import { Network, SlidersHorizontal, ListChecks, ShieldCheck, History, Zap } from 'lucide-react';
import { LandingBentoGridSection } from '@/components/landing/bento-grid/LandingBentoGridSection';
import { LandingBentoGridIconItem } from '@/components/landing/bento-grid/LandingBentoGridIconItem';
import { SectionHeading } from './SectionHeading';
import { useLocale } from '@/src/i18n/LocaleContext';

const icons = [Network, SlidersHorizontal, ListChecks, ShieldCheck, History, Zap];

const PlatformFeatures: React.FC = () => {
  const { t } = useLocale();

  return (
    <LandingBentoGridSection
      titleComponent={<SectionHeading title={t.platform.title} />}
      gridClassName="lg:grid-cols-3"
    >
      {t.platform.items.map((item, index) => {
        const Icon = icons[index] || Zap;
        return (
          <LandingBentoGridIconItem
            key={item.title}
            variant="primary"
            icon={<Icon className="h-8 w-8" />}
            topTextComponent={<span className="font-semibold text-foreground">{item.title}</span>}
            bottomText={item.description}
            className="min-h-[220px]"
          />
        );
      })}
    </LandingBentoGridSection>
  );
};

export default PlatformFeatures;
