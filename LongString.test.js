//import longestString from './longestString';

const longestString = require('./longestString');

test('finds the longest of the given strings', () => {
  expect(longestString(['f', 'foo', ''])).toBe('foo');
});

test('returns the earliest string in case of a tie', () => {
  expect(longestString(['foo', 'bar'])).toBe('foo');
});

test('returns an empty string if no strings are provided', () => {
  expect(longestString([])).toBe('');
});

test('throws if an array is not provided', () => {
  expect(() => {
    longestString();
  }).toThrow('You need to pass an array of strings!');
});

test('throws if an invalid type is provided', () => {
  expect(() => {
    longestString(['foo', 42]);
  }).toThrow('You can only pass strings inside of the array!');
});
