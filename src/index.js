const getEvenNumbers = (numbersArray) => {
  let numPares;
  numPares = numbersArray.filter((number) => {
    if (number % 2 == 0) {
      return true;
    } else {
      return false;
    }
  });

  return numPares;
};

module.exports = getEvenNumbers;
