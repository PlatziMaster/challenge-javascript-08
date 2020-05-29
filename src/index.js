const getEvenNumbers = (numbersArray) => {
  // your code
  let number = numbersArray.filter((i) => {
    if (i % 2 === 0) {
      return i;
    }
  });

  return number;
};

module.exports = getEvenNumbers;
