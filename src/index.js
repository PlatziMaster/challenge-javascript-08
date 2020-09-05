const getEvenNumbers = (array) => {
  let even =  array.filter(item => {
    return item % 2 == 0
  })
  return even;
}




module.exports = getEvenNumbers;