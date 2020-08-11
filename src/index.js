const getEvenNumbers = (numbersArray) => {
  // your code
  return numbersArray.filter(item=>{
    return item%2 ===0
 })
}



module.exports = getEvenNumbers;