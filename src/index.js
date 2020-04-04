const getEvenNumbers = (numbersArray) => {
   return numbersArray.filter(item => item%2 == 0)
}

module.exports = getEvenNumbers;