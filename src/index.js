const getEvenNumbers = (numbersArray) => {
  // your code
  return numbersArray.filter(number => {
    return number % 2 === 0
  })
}

module.exports = getEvenNumbers;