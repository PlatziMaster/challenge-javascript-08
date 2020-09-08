
const getEvenNumbers = (numbersArray) => {
   console.log(numbersArray);
   return numbersArray.filter(numberPair => numberPair % 2 === 0);
}
console.log(getEvenNumbers([2,4,5,6]));

module.exports = getEvenNumbers;
