import type { LocalizationResource } from '@clerk/types';
import type { LocalePrefixMode } from 'next-intl/routing';
import { enUS, frFR, viVN } from '@clerk/localizations';
import { DEFAULT_LANGUAGE, DEFAULT_NS, LIST_LANGUAGES } from '@/constants';

const localePrefix: LocalePrefixMode = 'as-needed';

// FIXME: Update this configuration file based on your project information
export const I18nConfig = {
  name: 'Next JS App',
  locales: LIST_LANGUAGES,
  defaultLocale: DEFAULT_LANGUAGE,
  localePrefix,
  defaultNs: DEFAULT_NS,
};

const supportedLocales: Record<string, LocalizationResource> = {
  en: enUS,
  vi: viVN,
  fr: frFR,
};

export const ClerkLocalizations = {
  defaultLocale: supportedLocales[DEFAULT_LANGUAGE || 'en'],
  supportedLocales,
};
