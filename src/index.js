const getEvenNumbers = (numbersArray) => {
  var arr1 = numbersArray, arr2 = [];
	
	arr2=arr1.filter(function(n){
		return n%2 == 0;
  });
  
  return arr2;
}

module.exports = getEvenNumbers;