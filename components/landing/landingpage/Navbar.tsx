'use client';

import React from 'react';
import { LandingHeader } from '@/components/landing/navigation/LandingHeader';
import { LandingHeaderMenuItem } from '@/components/landing/navigation/LandingHeaderMenuItem';
import { Button } from '@/components/shared/ui/button';
import { ThemeToggle } from '@/components/shared/ThemeToggle';
import { ExternalLink } from 'lucide-react';
import { LanguageSwitcher } from './LanguageSwitcher';
import { DOCS_URL } from './links';
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
      <LandingHeaderMenuItem href={DOCS_URL} external className="inline-flex items-center gap-1.5">
        {t.nav.docs}
        <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
      </LandingHeaderMenuItem>
      <Button size="sm" asChild>
        <a href="#contact">{t.nav.cta}</a>
      </Button>
    </LandingHeader>
  );
};

export default Navbar;
