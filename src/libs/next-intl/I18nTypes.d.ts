import type messages from '@/assets/locales/en.json';
import type { routing } from '@/libs/next-intl/I18nRouting';

type TMessages = typeof messages;
type ILocales = typeof routing.locales;

declare module 'next-intl' {
  // eslint-disable-next-line ts/consistent-type-definitions
  interface I18nConfig {
    Locale: ILocales[number];
    Messages: TMessages;
  }
};

declare type IntlMessages = {} & TMessages;
export type TNamespace = keyof Messages;
