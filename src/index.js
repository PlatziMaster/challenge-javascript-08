const getEvenNumbers = numbersArray => {
  let result = numbersArray.filter(element => element % 2 === 0);
  return result;
};

module.exports = getEvenNumbers;
