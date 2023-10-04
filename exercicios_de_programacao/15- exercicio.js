/**
 * Escreva uma função que receba um array de números e retorna a soma de todos os números desse array.
 */

function somarNumeros(array){
   const soma = array.reduce((acumulador, atual) => acumulador + atual)
   return soma
}

console.log(somarNumeros([10, 10, 10]))
console.log(somarNumeros([15, 15, 15, 15]))