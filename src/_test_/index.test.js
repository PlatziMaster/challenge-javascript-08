'use strict'

const getEvenNumbers = require ('../index');

describe('getEvenNumbers', () => {

  it('should return an array with correct number of items', () => {
    expect(getEvenNumbers([1,2,3,4,5,6,8,9]).length).toBe(4);
    expect(getEvenNumbers([22,44,66,88,24,-23,-24]).length).toBe(6);
  });

  it('should return an array with odd numbers removed', () => {
    expect(getEvenNumbers([1,2,3,4,5,6,8,9])).toEqual([2,4,6,8]);
    expect(getEvenNumbers([1,3,5,7,9,11,333,2])).toEqual([2]);
    expect(getEvenNumbers([-1,-6,-8])).toEqual([-6,-8]);
    expect(getEvenNumbers([22,44,66,88,24,-23,-24])).toEqual([22,44,66,88,24,-24]);
  });

  it('should return an empty array if there are no even numbers', () => {
    expect(getEvenNumbers([-1,-7,-9])).toEqual([]);
    expect(getEvenNumbers([111,333,555,777])).toEqual([]);
    expect(getEvenNumbers([])).toEqual([]);
  });

});