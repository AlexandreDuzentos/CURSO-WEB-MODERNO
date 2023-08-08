/**
 * operador unário: é um operador que opera em cima de dois operandos. 
 * 
 * Quanto a disposição, os operadores unários podem ser classificados em: prefixed(prefixado),
 * infixed(infixado), post fixed(pós fixado).
 * 
 * prefixed: o operador vem antes do operando.
 * ex de prefixed : ++a, --a.
 * 
 * post fixed: o operador vem depois do operando.
 * ex de post fixed: a++, b++.
 * 
 * infixed: o operador vem entre um operando e o outro.
 * ex de infixed: a + b.
 *
 * A diferença entre o operador prefixed e post fixed é que o prefixed realiza a operação antes e o 
 * post fixed realiza a operação depois.
 * 
 * O operador pre-fixado tem uma maior precedência em relação ao pos fixado
 */

let num1 = 1
let num2 = 2

num1++
console.log(num1)

--num1
console.log(num1)

console.log(++num1 === num2--) // Evite esse tipo de padrão, fuja de código muito complicado de se entender
console.log(num1 === num2) // Prefira usar código como esse, para facilitar o entendimento



