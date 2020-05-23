const getEvenNumbers = (numbersArray) => {
  const evenNumbers = numbersArray.filter(number => number % 2 == 0)
  return evenNumbers;
}

module.exports = getEvenNumbers;