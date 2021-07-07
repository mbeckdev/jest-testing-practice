import { expect, test } from '@jest/globals';
import { caesarCipher } from './caesar-cipher.js';

test('get this string shifted 1 letter "hi how are you"', () => {
  expect(caesarCipher('hi how are you', 1)).toBe('ij ipx bsf zpv');
});
test('check end of alphabet - shifted 2 letter "yaya", expect "acac"', () => {
  expect(caesarCipher('yaya', 2)).toBe('acac');
});
test('checks capitalization', () => {
  expect(caesarCipher('Hello You', 1)).toBe('Ifmmp Zpv');
});
test('punctuation stays', () => {
  expect(caesarCipher('!@#$%^&*,.', 1)).toBe('!@#$%^&*,.');
});
