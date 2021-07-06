import { expect, test } from '@jest/globals';
import { calculator } from './calculator.js';

// Tests for calculator.add
test('adds 1 and 2, expects 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('float add check - adds 1 and 0.3, expects 1.3', () => {
  expect(calculator.add(1, 0.3)).toBeCloseTo(1.3);
});

// Tests for calculator.subtract
test('subtracts 1 from 3, expects 2', () => {
  expect(calculator.subtract(3, 1)).toBe(2);
});

test('float subtraction - subtracts 0.3 from 3, expects 2.7', () => {
  expect(calculator.subtract(3, 0.3)).toBeCloseTo(2.7);
});
