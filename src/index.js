
// EJEMPLO DE GUIA PARA EL RETO
// const getEvenNumbers = (numbersArray) => {
//   // your code
// }

// module.exports = getEvenNumbers;

// Defino el arreglo de numeros
let arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// defino otro arreglo que contendra los numeros pares y le paso la funcion.filter
let numerosPares = arreglo.filter(function(numero){
    return numero%2 ==0; // divido el numero en 2 si el resultado = 0 indica que es par
});
console.log ('los numeros pares en el arreglo son ' + numerosPares); // imprimo los numeros pares