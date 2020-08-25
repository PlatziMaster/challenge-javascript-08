let array = [2 ,3, 4, 5, 6]; 

const getEvenNumbers = (numbersArray) => {
  return filteredNumbers = numbersArray.filter(   //filter crea un nuevo array con todos los elementos que 
    numbers => numbers %2 <= 0 );                 // cumplan la condición implementada por la función dada.

}

getEvenNumbers(array);
console.log(filteredNumbers)

//
module.exports = getEvenNumbers;


// filteredNumbers = [2,4,6] 