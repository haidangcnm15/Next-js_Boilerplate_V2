'use client';

import { I18nConfig } from '@/libs/next-intl/I18nConfigs';
import type {  TNamespace } from '@/libs/next-intl/I18nTypes';
// import { setLanguage } from '@utils/storage';
import { isArrayLength, isString } from '@/utils/shared';
import { useLocale, useTranslations } from 'next-intl';
// import { useRouter, usePathname } from 'next/navigation';
// import { startTransition } from 'react';

function useTranslate(namespace?: TNamespace) {
    const locale = useLocale(); 
    // const router = useRouter();
    // const pathname = usePathname(); 
    const t = useTranslations(String(namespace || I18nConfig.defaultNs));
    //   const dispatch = useDispatch();

    // async function setLanguage(string: ILocales[number]) {
    //     startTransition(() => {
    //   router.replace(pathname, { locale: string });
    // });
    // }

    const translate = (string: string, interpolation: any = {}) => {
        if (string && isString(string)) {
            if (interpolation && typeof interpolation === 'object' && Object.keys(interpolation).length > 0) {
                Object.keys(interpolation).forEach((keyField) => {
                    if (interpolation[keyField] && `${interpolation[keyField]}`.includes(':')) {
                        interpolation = { ...interpolation, [keyField]: translate(`${interpolation[keyField]}`) };
                    }
                });
                return t(string, interpolation);
            }
            return t(string);
        }
        return '';
    };

    const translateMany = (arrayString: string[]) => {
        if (arrayString && isArrayLength(arrayString, 1)) {
            return arrayString.map((itemString: string) => translate(itemString));
        }
        return [];
    };

    return {
        language: locale,
        // setLanguage,
        translate,
        translateMany,
    };
}
export { useTranslate };
