const peso1 = 1.0 // No javascript é um número inteiro
const peso3 = 1.1 //No javascript é um número de ponto flutuante
const peso2 = Number('2.0') // Number com N maiúsculo é uma função

console.log(peso1, peso2)

console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 16
const avaliacao2 = 8

let media = (avaliacao1 * peso1 + avaliacao2 * peso2) / (peso1 + peso2)

/* 
  A função toFixed permite difinir o número de casas decimais a serem exibidas
  ela não altera o valor original, retornar um novo valor
 */
console.log(media.toFixed(2)) 
console.log(typeof media) // number com n minúsculo é um tipo de dado no javascript

/* Conversões para bases numéricas
  Binário
  decimal
  hexadecimal
  octal
 */

console.log(media.toFixed())
console.log("conversão de decimal para binário: "+ media.toString(2))
console.log("Conversão de decimal para hexadecimal "+ media.toString(16))
console.log("Conversão de decimal para octal "+ media.toString(8))

console.log(typeof Number) // Number é uma função
console.log(typeof media) // number é um tipo de dado