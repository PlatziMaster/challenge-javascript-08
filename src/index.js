const getEvenNumbers = (numbersArray) => {
  return numbersArray.filter(n => n % 2 === 0)
}
module.exports = getEvenNumbers;