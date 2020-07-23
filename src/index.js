const getEvenNumbers = (numbersArray) => {
  return numbersArray.filter((x) => x % 2 === 0);
};

module.exports = getEvenNumbers;
