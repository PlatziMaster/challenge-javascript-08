const getEvenNumbers = (numbersArray) => {
  const arrayFilter = numbersArray.filter(number => number % 2 === 0)

  return arrayFilter
}

module.exports = getEvenNumbers;