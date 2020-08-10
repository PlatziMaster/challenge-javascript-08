const getEvenNumbers = (numbersArray) => {
    // your code
    var even = numbersArray.filter(esPrimo)
    return even 
}

const esPrimo = numbersArray => numbersArray % 2 == 0


module.exports = getEvenNumbers;