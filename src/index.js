const getEvenNumbers = (numbersArray) => {
  var evenNumbers = numbersArray.filter( function(numbersArray){
    return numbersArray%2 === 0
  })

  return evenNumbers
}

module.exports = getEvenNumbers;