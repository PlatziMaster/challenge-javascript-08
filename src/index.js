const getEvenNumbers = (numbersArray) => {
  const isPair = number => number % 2 === 0

  const numberPairs = numbersArray.filter(isPair)

  return numberPairs
}

module.exports = getEvenNumbers;