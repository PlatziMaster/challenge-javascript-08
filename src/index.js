const getEvenNumbers = (numbersArray) => {  
  return numbersArray.filter(number =>{
    if(number % 2 == 0){
      return number;
    }
  });
}

module.exports = getEvenNumbers;