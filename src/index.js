const getEvenNumbers = (numbersArray) => {
    const result = numbersArray.reduce((pairs, currentNumber) => {
        if (currentNumber % 2 === 0) {
            pairs.push(currentNumber);
        }
        return pairs;
    },[]);

    return result;
}
  
module.exports = getEvenNumbers;