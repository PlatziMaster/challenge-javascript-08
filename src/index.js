const numbersArray = [1,2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18,19,20]
const getEvenNumbers = (numbersArray) => {
  const result = numbersArray.filter( n => n%2 === 0 )
  return result
}

module.exports = getEvenNumbers;
