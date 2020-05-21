const getOddNumbers = require ('../../utils/getOddNumbers');

describe('getOddNumbers', () => {

  it('should return an array with correct number of items', () => {
    expect(getOddNumbers([1,2,3,4,5,6,7,8,9]).length).toBe(5);
    expect(getOddNumbers([22,44,66,88,24,-23,-24]).length).toBe(1);
  });

  it('should return an array with even numbers removed', () => {
    expect(getOddNumbers([1,2,3,4,5,6,8,9])).toEqual([1,3,5,9]);
    expect(getOddNumbers([1,3,5,7,9,11,333,2])).toEqual([1,3,5,7,9,11,333]);
    expect(getOddNumbers([-1,-6,-8])).toEqual([-1]);
    expect(getOddNumbers([22,44,66,88,24,-23,-24])).toEqual([-23]);
  });

  it('should return an empty array if there are no even numbers', () => {
    expect(getOddNumbers([-2,-8,-10])).toEqual([]);
    expect(getOddNumbers([112,334,556,778])).toEqual([]);
    expect(getOddNumbers([])).toEqual([]);
  });

  it('should return an array with even numbers and strings removed', () => {
    expect(getOddNumbers(['david',0,1,2,3,'cuatro',5,6,7,8,9])).toEqual([1, 3, 5, 7, 9]);
    expect(getOddNumbers(['1',2,3,4,5,6,'7',8,'9'])).toEqual([3,5]);
  });

});