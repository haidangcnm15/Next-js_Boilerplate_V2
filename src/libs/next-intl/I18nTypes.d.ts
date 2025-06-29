import type { routing } from '@/libs/next-intl/I18nRouting';
import type messages from '@/assets/locales/en.json';
import type { I18nConfig } from 'next-intl';

type TMessages = typeof messages;
type ILocales = typeof routing.locales;

declare module 'next-intl' {
  // eslint-disable-next-line ts/consistent-type-definitions
  interface I18nConfig {
    Locale: ILocales[number];
    Messages: TMessages;
  }
};

declare interface IntlMessages extends TMessages {}
export type TNamespace = keyof Messages;