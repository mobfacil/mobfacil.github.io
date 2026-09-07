import { pt } from './dictionaries/pt';
import { en } from './dictionaries/en';
import { es } from './dictionaries/es';
import type { Dictionary } from './types';

export const locales = ['pt', 'en', 'es'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'pt';

export const localeNames: Record<Locale, string> = {
  pt: 'Português',
  en: 'English',
  es: 'Español',
};

export const localePaths: Record<Locale, string> = {
  pt: '/',
  en: '/en/',
  es: '/es/',
};

const dictionaries: Record<Locale, Dictionary> = { pt, en, es };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary };
