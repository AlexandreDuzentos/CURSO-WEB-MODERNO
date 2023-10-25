/* 
Função arrow: é uma função anónima, que quando não tem corpo(bloco associado ela) o seu retorno
é implícito.
*/
const soma = (n1, n2) => n1 + n2

console.log(soma(6, 9))


// Quando a função tem um único parâmetro, os parênteses são opcionais
const teste1 = a => a

console.log(teste1("Alexandre"))


// Quando a função tem corpo(bloco associado a ela) o retorno deve estar explícito
const subtracao = (n1, n2) => {
  return n1 - n2
}

console.log(subtracao(2, 9))


/*
 O this dentro de uma ARROW FUNCTION está associado ao local onde ela foi escrita, e não varia de
 acordo com que a chama, a referência do this dentro de uma arrow function não pode ser alterada.

 Já dentro de uma função tradicional, o this aponta para o global, e a sua referência pode ser altera
 da dependendo de quem a chama ou usando funções como bind, call ou apply.
 */
const lexico1 = _ => console.log(this === module.exports)

lexico1()


// Parâmetro default
function log(nome = "Paulo"){
    return nome
}

console.log(log(undefined))
console.log(log(null))
console.log(log("Macabeu"))


/*
 O operador ...identificador pode receber dois nomes depedendo do contexto,
 rest ou spread, mas nesse contexto, o nome que ele recebe é rest.

 Operador spread: tem a função de separar valores de um array, para serem valores individuais.
 Operador rest: tem a função de agrupar parâmetros que estão separados dentro de um array
 */
function total(...numeros){
    let soma = 0
    numeros.forEach((num) => {
       soma += num
    })

    return soma
}

console.log(total(3, 7, 8, 9, 4, 5))