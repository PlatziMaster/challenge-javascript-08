
 const getEvenNumbers = (numbersArray) => {
    const pairArray = numbersArray.filter(function(numbers){
        return numbers % 2 ===0
    })
    console.log(pairArray)
}
 
module.exports = getEvenNumbers;
