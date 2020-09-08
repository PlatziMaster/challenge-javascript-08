const getEvenNumbers = (numbersArray) => {
  const result = numbersArray.filter(number => number % 2 === 0);
  console.log(result);
  return result;
}

module.exports = getEvenNumbers;