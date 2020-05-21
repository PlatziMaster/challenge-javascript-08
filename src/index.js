const getEvenNumbers = (numbersArray) => {
  isNumber= numbersArray.filter(item => Number.isInteger(item))
  return  isNumber.filter(number =>{return number%2 === 0})
}

module.exports = getEvenNumbers;