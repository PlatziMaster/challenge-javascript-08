
const getEvenNumbers = (numbersArray) => {
  // your code
  const result = numbersArray.filter( number => number % 2 === 0 );
  return result;
}

module.exports = getEvenNumbers;

/** steps to make work:
1) go to console in the navigator
2) copy and paste the code
3) write in the console: getEvenNumbers([put_you_numbers_here])
4) result