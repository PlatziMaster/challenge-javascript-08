const getEvenNumbers = (numbersArray) => {
  const numberItems= numbersArray.filter(number  => Number.isInteger(number))
  return numberItems.filter(number  => number%2 === 0)
}
module.exports = getEvenNumbers;