const getEvenNumbers = (numbersArray) => {
  return numbersArray.filter((number) => number % 2 === 0);
}

module.exports = getEvenNumbers;