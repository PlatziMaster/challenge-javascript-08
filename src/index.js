const getEvenNumbers = (numbersArray) => {
  // your code //  return de nuevo array con filter con numeros divisibles entre 2
  return numbersArray.filter(num => num%2===0);
}

module.exports = getEvenNumbers;