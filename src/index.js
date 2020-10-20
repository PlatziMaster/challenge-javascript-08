const getEvenNumbers = (numbersArray) => {
  const result = numbersArray.filter( number => number % 2 == 0 );
  return result;
}

module.exports = getEvenNumbers;