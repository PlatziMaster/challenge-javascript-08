const getEvenNumbers = (numbersArray) => {
    // your code
    var even = numbersArray.filter(esEven)
    return even 
}

const esEven = numbersArray => numbersArray % 2 == 0


module.exports = getEvenNumbers;