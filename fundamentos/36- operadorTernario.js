/**
 * Operador ternário: é um operador que atua em cima de três operandos
 * 
 * A primeira parte de um operador ternário é uma expressão relacional ou comparativa
 */

// Abaixo nós temos uma arrow function, que nesse caso, não tem corpo e um retorno inplícito
const resultado = nota => nota >= 7 ? "Aprovado" : "Reprovado" 

// Abaixo nós temos uma arrow function, que nesse caso, tem corpo e m retorna explícito
const resultado2 = nota => {
    return nota >= 7 ? "Aprovado" : "Reprovado"
}

console.log(resultado(6))
console.log(resultado(9))

console.log(resultado2(6))
console.log(resultado2(9))