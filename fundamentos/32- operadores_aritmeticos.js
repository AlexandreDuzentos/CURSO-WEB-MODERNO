const notas = [10, 5, 8, 4, 7]

const [n1, n2, n3, n4, n5] = notas // Desestrutururando um array

/*
 Os operadores podem ser classificados de duas formas: operação que ele realiza e número
 de operandos.

 quanto a operação que ele realiza, eles podem ser classificados em: aritméticos, relacionais, lógicos
 de atribuição.

 quanto ao número de operandos, eles podem ser classificados em: unário, binário, ternário
 
 */
let soma = n1 + n2 + n3 + n4 + n5 // operador arimético de soma
let subtracao = n1 - n2 - n3 - n4 - n5 // operador arimético de subtração
let multiplicacao = n1 * n2 * n3 * n4 * n5 // operador arimético de multiplicação
let divisao = n1 / n2 / n3 / n4 / n5  // operador aritmético de divisão
let modulo = n1 % 2 // operador aritmético de módulo

console.log(`soma: ${soma}`)
console.log(`subtraçào: ${subtracao}`)
console.log(`multiplicação: ${multiplicacao}`)
console.log(`divisão: ${divisao}`)
console.log(`Resto da divisão: ${modulo}`)
