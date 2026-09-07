'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { locales, localePaths, Locale } from '@/src/i18n';
import { useLocale } from '@/src/i18n/LocaleContext';

const shortLabel: Record<Locale, string> = { pt: 'PT', en: 'EN', es: 'ES' };

export const LanguageSwitcher: React.FC<{ className?: string }> = ({ className }) => {
  const { locale } = useLocale();

  return (
    <div
      className={cn(
        'inline-flex items-center gap-1 rounded-full border border-border p-1 text-xs font-semibold',
        className,
      )}
    >
      {locales.map((loc) => (
        <Link
          key={loc}
          href={localePaths[loc]}
          aria-current={loc === locale ? 'true' : undefined}
          className={cn(
            'rounded-full px-2.5 py-1 transition-colors',
            loc === locale
              ? 'bg-primary-500 text-white'
              : 'text-foreground/70 hover:text-primary-600 dark:hover:text-primary-400',
          )}
        >
          {shortLabel[loc]}
        </Link>
      ))}
    </div>
  );
};
