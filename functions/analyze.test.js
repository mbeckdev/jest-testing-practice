import { expect, test } from '@jest/globals';
import { analyze } from './analyze';

// Test min
test('analyze first min of 1,8,3,4,2,6 expect 1', () => {
  expect(analyze([1, 8, 3, 4, 2, 6]).min).toBe(1);
});
test('analyze center min of 4,2,7  expect 2', () => {
  expect(analyze([4, 2, 7]).min).toBe(2);
});
test('analyze center min of 4,7,2  expect 2', () => {
  expect(analyze([4, 7, 2]).min).toBe(2);
});
test('analyze min of one array number 3  expect 3', () => {
  expect(analyze([3]).min).toBe(3);
});

// Test max
test('max of 1,8,3,4,2,6 expect 8', () => {
  expect(analyze([1, 8, 3, 4, 2, 6]).max).toBe(8);
});
test('max of 9,3,4 expect 9', () => {
  expect(analyze([9, 3, 4]).max).toBe(9);
});
test('max of [5] expect 5', () => {
  expect(analyze([5]).max).toBe(5);
});

// Test Length
test('length of [1,1,1,2] expect 4', () => {
  expect(analyze([1, 1, 1, 2]).length).toBe(4);
});
test('length of [17] expect 1', () => {
  expect(analyze([17]).length).toBe(1);
});

// Test average
test('average of 1,8,3,4,2,6 expect ', () => {
  expect(analyze([1, 8, 3, 4, 2, 6]).average).toBe(4);
});
test('ezfloats - average of 1,2 expect 1.5', () => {
  expect(analyze([1, 2]).average).toBe(1.5);
});
test('many decimal floats - average of 1,1,2 expect 1.333', () => {
  expect(analyze([1, 1, 2]).average).toBeCloseTo(1.333);
});
