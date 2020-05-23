const getEvenNumbers = (numbersArray) => {
  return (pairNumbers = numbersArray.filter((num) => num % 2 === 0));
};

module.exports = getEvenNumbers;
