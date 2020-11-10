const getEvenNumbers = (numbersArray) => {
  // your code
  const evenNumbers = numbersArray.filter(n => n %2 == 0);
  return evenNumbers; 

}
module.exports = getEvenNumbers;