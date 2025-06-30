import { defineRouting } from 'next-intl/routing';
import { I18nConfig } from './I18nConfigs';

export const routing = defineRouting({
  locales: I18nConfig.locales,
  localePrefix: I18nConfig.localePrefix,
  defaultLocale: I18nConfig.defaultLocale,
  localeDetection: false,

});
