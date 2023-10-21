/**
 *  Em node um arquivo representa um módulo.
 *  Módulo: Tudo oque é escrito dentro de um módulo, fica visível apenas dentro dele.
 * 
 * Para tornar algo dentro de um módulo visível para outro módulo é necessário exportar tal coisa, e
 * para usar algo de um outro módulo num módulo é necessário importar tal coisa.
 * 
 * A ideia de módulo do node é baseado no common js.
 * 
 * common js: é um projeto desenvolvido com o objetivo de especificar um ecossistema para javas
 * cript do outro lado do navegador.
 *  
 */

/*
 Formas de exportar coisas de um módulo do node.
 o this, exports e o module.exports dentro do node são objetos.

 Abaixo, os atributos estão sendo criados de forma dinâmica nos objetos.
*/

console.log(this)

// 1
this.nome = "Alexandre"

// 2
exports.idade = 20

// 3
module.exports.raca = "Negra"

console.log(this)

// o this, o exports e o module.exports são iguais.