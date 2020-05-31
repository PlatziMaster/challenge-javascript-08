const getEvenNumbers = (numbersArray) => {
  const result = numbersArray.filter(num => num % 2 === 0)
  return result
}

module.exports = getEvenNumbers;