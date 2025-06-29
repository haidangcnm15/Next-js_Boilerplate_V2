import { isArrayLength, isEmpty } from "./shared";
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const mergeStyles = (arrayStyles: any) => {
  let styles: any = {};
  if (isArrayLength(arrayStyles, 1)) {
    for (let index = 0; index < arrayStyles.length; index++) {
      const element = arrayStyles[index];
      if (element && !isEmpty(element)) {
        styles = { ...styles, ...element };
      }
    }
  }
  return styles;
};

export const compareConditionStyle = (condition: any, value: any) => {
  if (condition !== undefined && value !== undefined) {
    return condition === value ? true : undefined;
  }
  return undefined;
};