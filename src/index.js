const getEvenNumbers = (numbersArray) => {
  const parsNumbers = numbersArray.filter(num => num % 2 === 0)

  return parsNumbers;
}

module.exports = getEvenNumbers;