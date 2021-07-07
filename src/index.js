const getEvenNumbers = (numbersArray) => {
  let EvenNumbers = numbersArray.filter((number) => number%2 === 0);
  return EvenNumbers;
}

module.exports = getEvenNumbers;