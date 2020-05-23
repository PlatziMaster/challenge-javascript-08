const isNumber = require('is-number');

const getEvenNumbers = (numbersArray) => {
  return numbersArray.filter(isPairNumber);
}

const isPairNumber = (number) =>{
  if(!isNumber(number)) return false;
  const remainder = number % 2;
  return remainder === 0 ? true : false;
}

module.exports = getEvenNumbers;