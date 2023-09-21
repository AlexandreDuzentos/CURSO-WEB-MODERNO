
/**
 *  Quando é feita a declaração abaixo, o constante pessoa passa a apontar um endereço de memória
 *  e o endereço de memória aponta para o objeto.
 * 
 *  A variável que aponta para a referência do objeto é que é constante, não o objeto em si.
 * 
 *  pessoa -> 123 -> {nome: "Alexandre"}
 **/
const pessoa = {nome: "Alexandre"}

/**
 * Quando é feita a atribuição abaixo, a constante pessoa continua a apontar para o endereço, mas o
   objeto para qual o endereço 123 aponta pode ser ser alterado, como foi feito.
 * */ 
pessoa.nome = "Paulo"

console.log(pessoa)

/**
 *  Quando é feita a atribuição abaixo, a constante pessoa passaria a apontar para outra referência
 *  e essa referência para um outro objeto, o que fere a regra de uma constante, que é não poder ser
 *  reatribuida.
 * 
 * Abaixo temos o que hipotéticamente teriamos em memória, se essa reatribuição fosse válida
 * pessoa -> 456 -> {idade: 20}
 */
//pessoa = {idade: 20}

/**
 *  O método abaixo, previne a modificação e a adição de novos atributos ao objeto, ou seja, o objeto
 *  passa a ser constante, tal como a variável que aponta a sua referência.
 **/

Object.freeze(pessoa)

pessoa.nome = "Mateus"
pessoa.idade = 20

console.log(pessoa)
