const getEvenNumbers = (numbersArray) => {
  return numbersArray.filter((a) => a%2 === 0)
}

module.exports = getEvenNumbers;