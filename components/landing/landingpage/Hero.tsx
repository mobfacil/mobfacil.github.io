'use client';

import React from 'react';
import { Button } from '@/components/shared/ui/button';
import { useLocale } from '@/src/i18n/LocaleContext';
import DecisionCard from './DecisionCard';

const Hero: React.FC = () => {
  const { t } = useLocale();

  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden px-6 pb-12 pt-28 md:pt-24">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left: message + CTAs */}
          <div className="max-w-xl text-left">
            <h1 className="text-balance text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
              {t.hero.headline} <span className="text-primary-500">{t.hero.highlight}</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg text-muted-foreground md:text-xl">{t.hero.subtext}</p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button size="xl" variant="primary" asChild>
                <a href="#contact">{t.hero.ctaPrimary}</a>
              </Button>
              <Button size="xl" variant="outlinePrimary" asChild>
                <a href="#how-it-works">{t.hero.ctaSecondary}</a>
              </Button>
            </div>
          </div>

          {/* Right: live decision visual */}
          <div className="lg:pl-6">
            <DecisionCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
