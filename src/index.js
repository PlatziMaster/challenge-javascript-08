const getEvenNumbers = (numbersArray) => {
  let isPair = numbersArray.filter(item => item % 2 === 0);
  return isPair;
}

module.exports = getEvenNumbers;