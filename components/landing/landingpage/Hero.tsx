'use client';

import React from 'react';
import { Button } from '@/components/shared/ui/button';
import { useLocale } from '@/src/i18n/LocaleContext';
import DecisionCard from './DecisionCard';
import { LandingMarquee } from '../LandingMarquee';
import Image from 'components/shared/Image';
import { LandingFlickeringGridCtaBg } from '@/components/landing/cta-backgrounds/LandingFlickeringGridCtaBg';

import senffLogo from '@/src/images/senff_logo.png';
import festcardLogo from '@/src/images/festcard_logo.svg';
import paymobiLogo from '@/src/images/paymobi_logo.svg';
import difabricaLogo from '@/src/images/difabrica_logo.jpg';
import masterMagazineLogo from '@/src/images/logo_master_magazine.avif';

const clientLogos = [
  { imageSrc: senffLogo, url: 'https://www.senff.com.br/', name: 'Senff' },
  { imageSrc: festcardLogo, url: 'https://www.cartaofestcard.com.br/', name: 'Festcard' },
  { imageSrc: paymobiLogo, url: 'https://paymobi.com.br/', name: 'Paymobi' },
  { imageSrc: difabricaLogo, url: 'https://www.instagram.com/difabricacalcados/', name: 'Difabrica' },
  {
    imageSrc: masterMagazineLogo,
    url: 'https://www.mastermagazine.com.br/',
    name: 'Master Magazine',
    // Source artwork is solid white; `grayscale` alone doesn't darken it, so
    // recolor it to mid-gray via brightness/invert instead.
    imgClassName: 'brightness-0 invert-[.65] dark:invert-[.75]',
  },
];

const Hero: React.FC = () => {
  const { t } = useLocale();

  return (
    <section className="relative isolate flex min-h-[100dvh] flex-col justify-center overflow-hidden px-6 pb-24 pt-28 md:pt-24">
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden opacity-20">
        <LandingFlickeringGridCtaBg
          variant="primary"
          squareSize={3}
          gridGap={16}
          flickerChance={0.5}
          maxOpacity={0.8}
          className="absolute inset-0 h-full w-full"
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 85% 85% at 50% 40%, transparent 40%, hsl(var(--background)) 100%)',
          }}
        />
      </div>

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

      <div className="absolute inset-x-0 bottom-0 w-full">
        <LandingMarquee animationDurationInSeconds={28}>
          {clientLogos.map((client) => (
            <a
              key={client.name}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-10 lg:mx-14 opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
            >
              <Image
                width={140}
                height={56}
                className={`h-10 w-auto object-contain ${client.imgClassName ?? ''}`}
                src={client.imageSrc}
                alt={client.name}
              />
            </a>
          ))}
        </LandingMarquee>
      </div>
    </section>
  );
};

export default Hero;
