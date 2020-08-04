const getEvenNumbers = (numbersArray) => {

  const parNumber = numbersArray.filter(item => item % 2 == 0);
  console.log(parNumber);
}

getEvenNumbers([1, 2, 4, 7, 10, 16, 19, 27, 34, 45, 53, 64]);

module.exports = getEvenNumbers;