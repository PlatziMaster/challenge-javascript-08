const getEvenNumbers = (numbersArray) => {
  const newArray = numbersArray.filter(number => number % 2 === 0)

  return newArray
}

module.exports = getEvenNumbers;