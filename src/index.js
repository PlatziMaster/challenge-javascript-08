const getEvenNumbers = (numbersArray) => {
  let array = numbersArray.filter(isEven);
  function isEven(number){
    if(number%2==0){
      return number;
    }
  }
  return array;
}

module.exports = getEvenNumbers;