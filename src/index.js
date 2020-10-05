'use strict'

const getEvenNumbers = (numbersArray) => {
  return numbersArray.filter(numbersArray => numbersArray % 2 === 0)
}

module.exports = getEvenNumbers;
