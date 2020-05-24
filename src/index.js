const esPar = item => item%2 == 0

const getEvenNumbers = (numbersArray) => {
  const res = numbersArray.filter(esPar)
  return res
}

module.exports = getEvenNumbers