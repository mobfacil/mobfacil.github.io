'use client';

import React from 'react';
import { LandingHeader } from '@/components/landing/navigation/LandingHeader';
import { LandingHeaderMenuItem } from '@/components/landing/navigation/LandingHeaderMenuItem';
import { Button } from '@/components/shared/ui/button';
import { ThemeToggle } from '@/components/shared/ThemeToggle';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useLocale } from '@/src/i18n/LocaleContext';

const Navbar: React.FC = () => {
  const { t } = useLocale();

  return (
    <LandingHeader
      fixed
      withBackground
      rightSlot={
        <div className="flex items-center gap-2">
          <LanguageSwitcher className="hidden sm:inline-flex" />
          <ThemeToggle label={t.nav.themeToggle} />
        </div>
      }
    >
      <LandingHeaderMenuItem href="#how-it-works" label={t.nav.howItWorks} />
      <LandingHeaderMenuItem href="#platform" label={t.nav.platform} />
      <LandingHeaderMenuItem href="#services" label={t.nav.services} />
      <Button size="sm" asChild>
        <a href="#contact">{t.nav.cta}</a>
      </Button>
    </LandingHeader>
  );
};

export default Navbar;
