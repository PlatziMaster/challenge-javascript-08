const getEvenNumbers = (numbersArray) => {
  const evenNumbers = numbersArray.filter(number => number % 2 == 0)
  return evenNumbers;
}

getEvenNumbers([1,2,3,4,5,6,8,9]);

module.exports = getEvenNumbers;