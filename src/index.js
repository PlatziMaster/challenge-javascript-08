const getEvenNumbers = (numbersArray) => {
	let evenNumbers = numbersArray.filter(function (number) {
		return number % 2 === 0;
	});

	return evenNumbers;
};

module.exports = getEvenNumbers;
