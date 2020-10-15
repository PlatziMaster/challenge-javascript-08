const getEvenNumbers = (numbersArray) => {
  const solution = numbersArray.filter(num => num % 2 === 0);
  return solution;
}

module.exports = getEvenNumbers;