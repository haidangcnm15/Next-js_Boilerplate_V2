'use client';

import { useEffect, useState } from 'react';
import {
    DEFAULT_FORMAT_DATE, DEFAULT_FORMAT_DATE_TIME, DEFAULT_FORMAT_MONTH, DEFAULT_FORMAT_DISPLAY_TIME,
    DEFAULT_FORMAT_TIME, DEFAULT_DISPLAY_FORMAT_DATE, DEFAULT_DISPLAY_FORMAT_DATE_TIME, DEFAULT_DISPLAY_FORMAT_MONTH,
} from '@/constants';

function useFormat() {
    const settings = {};
    const [dataConfigs, setDataConfigs] = useState({
        thousandSeparator: ',',
        decimalSeparator: '.',
        defaultCurrency: 'VND',
        currencyDecimalPlaces: 2,
        percent: 0,
        dateFormat: DEFAULT_FORMAT_DATE,
        dateDisplayFormat: DEFAULT_DISPLAY_FORMAT_DATE,
        monthFormat: DEFAULT_FORMAT_MONTH,
        monthDisplayFormat: DEFAULT_DISPLAY_FORMAT_MONTH,
        dateTimeFormat: DEFAULT_FORMAT_DATE_TIME,
        dateTimeDisplayFormat: DEFAULT_DISPLAY_FORMAT_DATE_TIME,
        timeFormat: DEFAULT_FORMAT_TIME,
        timeDisplayFormat: DEFAULT_FORMAT_DISPLAY_TIME,
        timeZone: 'Asia/Bangkok',
        currencyList: [],
        currencyRates: {},
    });

    useEffect(() => {
        // handleDataSetting();
    }, []);

    // const handleDataSetting = () => {
    //   if (settings) {
    //     const params = {
    //       thousandSeparator: settings?.thousandSeparator,
    //       decimalSeparator: settings?.decimalMark,
    //       defaultCurrency: settings?.defaultCurrency,
    //       currencyDecimalPlaces: settings?.currencyDecimalPlaces,
    //       currencyList: settings?.currencyList,
    //       currencyRates: settings?.currencyRates,
    //       dateFormat: settings?.dateFormat,
    //       timeFormat: settings?.timeFormat,
    //       dateTimeFormat: `${settings?.dateFormat} ${settings?.timeFormat}`,
    //       timeZone: settings?.timeZone,
    //       percent: 2,
    //     };
    //     setDataConfigs(params);
    //   }
    // };

    const getDefaultFormat = (type: string) => {
        if (!type) return '';
        const {
            dateFormat, dateDisplayFormat, monthFormat, monthDisplayFormat, dateTimeFormat,
            dateTimeDisplayFormat, timeFormat, timeDisplayFormat,
            decimalSeparator, defaultCurrency, currencyDecimalPlaces,
        } = dataConfigs || {};
        switch (type) {
            case 'date':
                return dateFormat || '';
            case 'display_date':
                return dateDisplayFormat || '';

            case 'dateTime':
                return dateTimeFormat || '';
            case 'display_dateTime':
                return dateTimeDisplayFormat || '';

            case 'month':
                return monthFormat || '';
            case 'display_month':
                return monthDisplayFormat || '';

            case 'time':
                return timeFormat || '';
            case 'display_time':
                return timeDisplayFormat || '';

            default:
                return '';
        }
    };

    const convertDataByConfig = (type: string = 'default', value: number | string | null) => {
        if (type !== 'text' && dataConfigs) {
            //   switch (type) {
            //   case 'thousand':
            //     return formatMoney(value, dataConfigs?.thousandSeparator, '');

            //   case 'money':
            //     return formatMoney(value, dataConfigs?.thousandSeparator, dataConfigs?.defaultCurrency);

            //   case 'numberDecimal':
            //     return convertNumber(Number(value), dataConfigs?.currencyDecimalPlaces);

            //   case 'thousandDecimal':
            //     return formatThousandDecimal(value, dataConfigs?.thousandSeparator, 2);

            //   case 'number':
            //     return Math.round(Number(value));

            //   case 'date':
            //     return convertDateToFormat(value, dataConfigs?.dateDisplayFormat);

            //   case 'dateTime':
            //     return convertDateToFormat(value, dataConfigs?.dateTimeDisplayFormat);

            //   case 'phoneNumber':
            //   case 'identityCard':
            //     return hideDigital(value, 4);

            //   case 'percent':
            //     return `${formatThousandDecimal(
            //       Number(value),
            //       dataConfigs?.thousandSeparator,
            //     ) || 0}%`;
            //   default:
            //     return '';
            //   }
        }
        return value;
    };

    //   const revertDataByConfig = (type?: string, value: number | string | null) => {
    //     if (type !== 'text' && dataConfigs) {
    //       switch (type) {
    //       case 'thousand':
    //         return revertNumber(value, dataConfigs?.thousandSeparator, '');

    //       case 'money':
    //         return revertNumber(value, dataConfigs?.thousandSeparator, dataConfigs?.defaultCurrency);

    //       case 'numberDecimal':
    //         return revertNumber(value, dataConfigs?.currencyDecimalPlaces);

    //       case 'thousandDecimal':
    //         return revertNumber(value, dataConfigs?.thousandSeparator);
    //         // case 'numberShorten': {
    //         //     const valueTmp = convertMoneyToShortenString(value);
    //         //     return valueTmp?.unit ? `${valueTmp?.value} ${translate(valueTmp?.unit)} ${translate('dong')}` : `${valueTmp?.value}`;
    //         // }

    //       case 'number':
    //         return Math.round(Number(value));

    //       case 'phoneNumber':
    //       case 'identityCard':
    //         return hideDigital(value, 4);

    //       case 'percent':
    //         return `${formatThousandDecimal(
    //           Number(value),
    //           dataConfigs?.thousandSeparator,
    //         ) || 0}%`;
    //       default:
    //         return '';
    //       }
    //     }
    //     return value;
    //   };
    return {
        config: dataConfigs,
        getDefaultFormat,
        convertData: convertDataByConfig,
        revertData: convertDataByConfig,
        // revertData: revertDataByConfig,
    };
}

export { useFormat };
