const getEvenNumbers = (numbersArray) => {
   return numbersArray.filter ( numberPair => numberPair % 2 === 0)
}
module.exports = getEvenNumbers;

console.log (getEvenNumbers);

