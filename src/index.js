
 const getEvenNumbers = (numbersArray) => {
   const pairArray = numbersArray.filter(numbers => numbers % 2 === 0);
   return pairArray;
}
 
module.exports = getEvenNumbers;
