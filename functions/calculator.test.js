import { expect } from '@jest/globals';
import { calculator } from './calculator.js';

test('adds 1 and 2, expects 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds 1 and 0.3, expects 1.3', () => {
  expect(calculator.add(1, 0.3)).toBeCloseTo(1.3);
});
