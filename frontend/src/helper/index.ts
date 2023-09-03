import { ValidatorReturn } from '../types/commonTypes';

/**
 * This file contain different type of validators that can be used in
 * useInput, useDropDown and is accepted in useFormValidation
 */

export function isValidEmail(input: string) {
  const emailRegex = new RegExp(
    [
      '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))',
      '@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'
    ].join('')
  );
  return emailRegex.test(input);
}

export const required = (input: string): ValidatorReturn => {
  if (!input.length) {
    return { isValid: false, errorMessage: 'Required field' };
  }
  return { isValid: true, errorMessage: '' };
};

export const numberValidator = (input: number): ValidatorReturn => {
  if (isNaN(input)) {
    return { isValid: false, errorMessage: 'Required field' };
  }
  return { isValid: true, errorMessage: '' };
};

export const emailValidator = (input: string): ValidatorReturn => {
  if (!isValidEmail(input)) {
    return { isValid: false, errorMessage: 'Please enter valid email address' };
  }
  return { isValid: true, errorMessage: '' };
};

export const getPaddedString = (input) => `0${input}`.slice(-2);
