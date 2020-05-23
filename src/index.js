const parirFun = (number) => number % 2 === 0

const getEvenNumbers = (numbersArray) => numbersArray.filter(parirFun)

module.exports = getEvenNumbers;