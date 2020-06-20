const getEvenNumbers = (numbersArray) => {
  const numbers = numbersArray.filter((number) => {
    return number % 2 === 0;
  })
  return numbers;
}

getEvenNumbers([1, 2, 3, 4, 5, 6, 8, 9])

module.exports = getEvenNumbers;