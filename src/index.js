const getEvenNumbers = (numbersArray) => {
  // your code
  const result = numbersArray.filter(n => n % 2 == 0)
  return result;
}

module.exports = getEvenNumbers;