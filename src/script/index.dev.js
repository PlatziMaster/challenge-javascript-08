"use strict";

var getEvenNumbers = function getEvenNumbers() {
  var numbersArray = [2, 4, 5, 6];
  console.log("El arreglo de n\xFAmeros original es: ".concat(numbersArray));
  var pairNumbers = numbersArray.filter(function (numberPair) {
    return numberPair % 2 === 0;
  });
  console.log("Los n\xFAmeros pares del Arreglo son: ".concat(pairNumbers));
};

getEvenNumbers();
module.exports = getEvenNumbers;