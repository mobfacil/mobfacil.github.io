'use client';

import React from 'react';
import { LandingHeader } from '@/components/landing/navigation/LandingHeader';
import { LandingHeaderMenuItem } from '@/components/landing/navigation/LandingHeaderMenuItem';
import { ThemeToggle } from '@/components/shared/ThemeToggle';
import { ExternalLink } from 'lucide-react';
import { LanguageSwitcher } from './LanguageSwitcher';
import { DOCS_URL } from './links';
import { useLocale } from '@/src/i18n/LocaleContext';

const NavbarMobile: React.FC = () => {
  const { t } = useLocale();

  return (
    <div className="w-full">
      <LandingHeader
        fixed
        sheetClassName="bg-background text-foreground border-l border-border"
        rightSlot={<ThemeToggle label={t.nav.themeToggle} />}
      >
        <LandingHeaderMenuItem href="#how-it-works" label={t.nav.howItWorks} />
        <LandingHeaderMenuItem href="#platform" label={t.nav.platform} />
        <LandingHeaderMenuItem href="#services" label={t.nav.services} />
        <LandingHeaderMenuItem href={DOCS_URL} external className="inline-flex items-center gap-1.5">
          {t.nav.docs}
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </LandingHeaderMenuItem>
        <LandingHeaderMenuItem href="#contact" label={t.nav.cta} />
        <div className="pt-2">
          <LanguageSwitcher />
        </div>
      </LandingHeader>
    </div>
  );
};

export default NavbarMobile;
