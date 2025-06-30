import { linkRegex } from '@/constants';

// validate
export const isEmpty = (data: any) => typeof data !== 'object' || (Array.isArray(data) && data.length === 0) || (Object.keys(data).length === 0 && data.constructor === Object);
export const isNumber = (x: number) => typeof x === 'number' && !isNaN(x);
export const isString = (string: string) => (string || string === '') && typeof string === 'string';
export const isSameString = (firstValue: string, lastValue: string) => firstValue && lastValue && firstValue.toString() === lastValue.toString();
export const isSameObject = (firstValue: any, lastValue: any) => firstValue && lastValue && JSON.stringify(firstValue) === JSON.stringify(lastValue);
export const isArray = (a: any) => a && Array.isArray(a);
export const isArrayLength = (a?: any[], length: number = 0) => a && isArray(a) && a.length >= length;

// array
export const convertToUniqueArray = (inputArray: any[], keyNameObj?: string) => isArrayLength(inputArray, 1) ? inputArray.filter((item, fIndex) => inputArray.findIndex(x => keyNameObj ? x[keyNameObj] === item[keyNameObj] : x === item) === fIndex) : [];
export const convertToTruthyArray = (inputArray: any[], keyNameObj?: string) => isArrayLength(inputArray, 1) ? inputArray.filter(item => keyNameObj ? item[keyNameObj] : item) : [];
export const convertToTruthyFieldsArray = (inputArray: any[], keyNameObj: string, returnedFields?: string[]) => {
  if (!isArrayLength(inputArray, 1)) {
    return [];
  }
  const uniqueReturnedFields: string[] = returnedFields ? convertToUniqueArray(returnedFields) : [];
  return inputArray.reduce((newArr, item) => {
    if (item[keyNameObj]) {
      if (isArrayLength(uniqueReturnedFields, 1)) {
        const currentLength = newArr.length;
        for (const fieldName of uniqueReturnedFields) {
          newArr[currentLength] = { ...newArr[currentLength], [fieldName]: item[fieldName] };
        }
      } else {
        newArr = [...newArr, item[keyNameObj]];
      }
    }
    return newArr;
  }, []);
};
export const convertToUniqueFieldArray = (inputArray: any[], keyNameObj: string, returnedFields?: string[]) => {
  if (!isArrayLength(inputArray, 1)) {
    return [];
  }
  const uniqueReturnedFields: string[] = returnedFields ? convertToUniqueArray(returnedFields) : [];
  return inputArray.reduce((newArr, item, rdIndex) => {
    if (inputArray.findIndex((x: any) => x[keyNameObj] === item[keyNameObj]) === rdIndex) {
      if (isArrayLength(uniqueReturnedFields, 1)) {
        const currentLength = newArr.length;
        for (const fieldName of uniqueReturnedFields) {
          newArr[currentLength] = { ...newArr[currentLength], [fieldName]: item[fieldName] };
        }
      } else {
        newArr = [...newArr, item[keyNameObj]];
      }
    }
    return newArr;
  }, []);
};

export const getValueFromNestedFieldName = (value: any = null, fieldName: string) => {
  if (fieldName && fieldName.includes('.')) {
    const arraySplit = fieldName.split('.');
    return value[arraySplit[0]][arraySplit[1]];
  }
  return fieldName && fieldName !== 'none' && value[fieldName] !== undefined ? value[fieldName] : value;
};
export const getDifferentTwoArray = (originArray: any[], compareArray: any[], originField: string = 'none', compareField: string = 'none') => {
  if (!isArrayLength(originArray, 1)) {
    return [];
  }
  if (!isArrayLength(compareArray, 1)) {
    return originArray;
  }
  return originArray.filter(origin => !compareArray.some((compare) => {
    const originValueTmp = getValueFromNestedFieldName(origin, originField);
    const compareValueTmp = getValueFromNestedFieldName(compare, compareField);
    return isSameObject(originValueTmp, compareValueTmp);
  }),
  );
};

export const getSameTwoArray = (originArray: any[], compareArray: any[], originField: string = 'none', compareField: string = 'none') => {
  if (!isArrayLength(originArray, 1) || !isArrayLength(compareArray, 1)) {
    return [];
  }
  return originArray.filter(origin =>
    compareArray.some((compare) => {
      const originValueTmp = getValueFromNestedFieldName(origin, originField);
      const compareValueTmp = getValueFromNestedFieldName(compare, compareField);
      return isSameObject(originValueTmp, compareValueTmp);
    }),
  );
};

// object

//  link url
export function checkHasLinkUrl(text: string) {
  if (!text || typeof text !== 'string') {
    return text;
  }
  const urlArr: string[] = text.match(linkRegex) || [];
  return isArrayLength(urlArr, 1);
}

export function detectLinkUrl(text: string) {
  if (!text || typeof text !== 'string') {
    return text;
  }
  const urlArr: string[] = text.match(linkRegex) || [];
  if (isArrayLength(urlArr, 1)) {
    return text.replace(linkRegex, (url) => {
      return `<a id="linkUrlInText" target="_blank" rel="noopener noreferrer" href="${url}">${url}</a>`;
    });
  }
  return text;
}

//   convert data by format
