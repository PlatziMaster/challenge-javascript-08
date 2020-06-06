const getEvenNumbers = (numbersArray = []) => {
  const numbers = numbersArray.filter(number => (number % 2) === 0)
  return numbers;
}

module.exports = getEvenNumbers;
