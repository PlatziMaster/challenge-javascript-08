const getEvenNumbers = (numbersArray) => {  
  return numbersArray.filter( numb => numb%2 === 0);
}


module.exports = getEvenNumbers;