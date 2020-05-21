const getEvenNumbers = (numbersArray) => {
  const evenNumber = numbersArray.filter((item) => item % 2 === 0);
  return evenNumber;
};

module.exports = getEvenNumbers;
