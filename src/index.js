const getEvenNumbers = (numbersArray) => {
  const itIsEven = (number) => (number % 2) === 0

  evenNumbers = numbersArray.filter(itIsEven)
  return evenNumbers
}

module.exports = getEvenNumbers;