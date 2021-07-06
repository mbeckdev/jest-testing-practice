import { capitalize } from './capitalize.js';

test('capitalizes "haha"', () => {
  expect(capitalize('haha')).toBe('Haha');
});

test('capitalizes "Huhu"', () => {
  expect(capitalize('Huhu')).toBe('Huhu');
});

// **********************************
// works
// const sum = require('./capitalize');

// test('adds 1 + 2 to equal 3', () => {
//   expect(capitalize(1, 2)).toBe(3);
// });
