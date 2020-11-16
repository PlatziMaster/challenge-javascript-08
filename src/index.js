const getEvenNumbers = (numbersArray = []) => {
  // your code
  return numbersArray.filter((number) => number % 2 === 0)
}

module.exports = getEvenNumbers;
