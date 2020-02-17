const checkEven = (number) =>{
  if((number%2)===0){
    return number;
  }else{
    return null;
  }
}

const getEvenNumbers = (numbersArray) => {
  return evenArray = numbersArray.filter(checkEven);
}

module.exports = getEvenNumbers;