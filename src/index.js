const getEvenNumbers = (numbersArray) => {
  let result = numbersArray.filter(item => Number.isInteger(item / 2))
  return result
}

module.exports = getEvenNumbers;