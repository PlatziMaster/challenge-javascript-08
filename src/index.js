const getEvenNumbers = (numbersArray) => {
  return numbersArray.filter(number => number%2 === 0)
}

console.log(getEvenNumbers([1,2,3,4,5,6,8,9]))

module.exports = getEvenNumbers;