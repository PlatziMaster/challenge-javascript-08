const getEvenNumbers = (numbersArray) => {
  var evenArray = []
  numbersArray.forEach((value) => {
    if (value % 2 === 0) {
      evenArray.push(value)
    }
  })
  return evenArray
}

module.exports = getEvenNumbers;