/**
 * É muito importante termos consciência do ambiente de execução na qual o javascript está sendo executado
 * Há dois contextos de execução: o browser e o node.
 * 
 * No contexto do browser o objecto window é estritamente igual ao this
 * 
 * window: é um objeto que representa a janela do browser
 * 
 * Todos os objetos, funções e variáveis globais automaticamente se tornam membros do objeto window.
 * 
 * Variáveis globais são propriedades do objecto window
 * var firstName = "Alexandre" // declarações feitas com o var vão parar no escopo global
 * 
 * ex.: window.firstName
 * 
 * 
 * funções globais são métodos do objeto window
 * function firstFunction(){console.log("Hello world")}
 * 
 * ex.: window.firstFunction()
 * 
 * Até o objeto do documento(document) é uma propriedade do objeto window
 * 
 * ex.: window.document.getElementById("header"); é o mesmo que document.getElementById("header");
 * 
 * 
 * arrow functions não vão parar no escopo global
 * 
 * Dentro de um contexto de objecto o this aponta para o próprio objeto
 */



/*
 CONTEXTO DO NODE

 No contexto do node o objeto equivalente ao window do browser é o global
 No contexto do node o this é estritamente igual ao module.exports
 No contexto do node cada arquivo é um módulo, a aplicaçao fica toda modularizada
*/


let n1 = 5
global.idade = 18 
this.n2 = 3
this.middleName = "Baptista"
this.lastName = "Duzentos"

console.log(this.n1) // retornará undefined
console.log(global.idade)
console.log(this.n2) 
console.log(module.exports.n2)
console.log(module.exports)

console.log(this === module.exports) // No node é this é estritamente igual ao muodule.exports
 
console.log(typeof this) // é um objecto
console.log(typeof module.exports) // é um objecto


/** Criando um a variável maluca: sem o var ou let, esse tipo de declaração coloca a variável no objeto
 *  global
 *  */
abc = "abc"  //não faça isso em casa
console.log(global.abc)


