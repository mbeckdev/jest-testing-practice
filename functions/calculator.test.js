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

// Tests for multiply
test('multiplies 2 * 4, expects 8', () => {
  expect(calculator.multiply(2, 4)).toBe(8);
});

test('multiply floats 2 * 1.25', () => {
  expect(calculator.multiply(2, 1.25)).toBeCloseTo(2.5);
});

// Tests for divide
test('divides 27 by 9, expects 3', () => {
  expect(calculator.divide(27, 3)).toBe(9);
});

test('divides 4 by 3', () => {
  expect(calculator.divide(4, 3)).toBeCloseTo(1.333);
});

test("divides 4 by 0, expects Error: can't divide by zero", () => {
  expect(calculator.divide(4, 0)).toBe("Error: can't divide by zero");
});
