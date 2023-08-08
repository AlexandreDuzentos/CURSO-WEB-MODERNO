/*
 Função: também conhecida por sub-rotina ou sub-algoritímo, é uma sequência de instruções lógicas
e finitas para resolver um problema e retornar valor.

Procedimento: idém  a função, porém, não retorna valor.

Ojecto: é uma referência para uma classe.
 */

console.log(typeof Object) // O Object é uma função
console.log(typeof new Object) // A instância de Object é um objecto
console.log(typeof new Object()) // instânciando um objeto a partir de uma função(classe) padrão da API do javascript

const cliente = function(){}
console.log(typeof cliente)
console.log(typeof new cliente()) // instânciando um objecto a partir de um função(classe) definida por mim

class Produto{} // ES 2015(ES6)

/* Produto é uma função, por que internamente toda classe é uma função no javascript, a diferença está apenas na sintaxe */
console.log(typeof Produto) 
console.log(typeof new Produto()) // A instância de Produto é um objecto


