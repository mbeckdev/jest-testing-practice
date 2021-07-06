import { calculator } from './calculator.js';

test('adds 1 and 2, expects 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});
