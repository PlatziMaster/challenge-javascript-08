const getEvenNumbers = (numbersArray) => {
  return numbersArray.filter(item => {
    return item % 2 === 0
  })
}

module.exports = getEvenNumbers;