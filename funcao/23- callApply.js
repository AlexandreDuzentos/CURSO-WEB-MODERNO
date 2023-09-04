/**
 * Call: é uma função chamada a partir de outra função, que faz com que o this aponte para um 
 * contexto diferente do contexto padrão, e também permite a passagem dos parâmetros da função
 * a partir da qual ela foi chamada.
 * 
 * apply: é uma função chamada a partir de outra função, que faz com que o this aponte para um 
 * contexto diferente do contexto padrão, e também permite a passagem dos parâmetros da função
 * a partir da qual ela foi chamada em forma de array
 */


function getPreco(moeda = "R$"){
   return `${moeda} ${this.preco - this.preco * (this.desc/100)}`
}

const produto = {
    preco: 2500,
    desc: 10,
    getPreco
}

// Forma 1 de passar o contexto do this para a função
let result = produto.getPreco()
console.log(result)

/**
 * Forma 2 de passar o contexto do this para a função(o this dentro da função por padrão
 * aponta para o global)
 * */
global.preco = 8200
global.desc = 10
result = getPreco()
console.log(result)


// Forma 4 de passar o contexto do this para a função
const product = {
    preco: 500,
    desc: 12
}

// A função call e apply já invocam a função getPreco
result = getPreco.call(product)
result = getPreco.apply(product)

console.log(result)

result = getPreco.call(product, "AO")
console.log(result)

result = getPreco.apply(product, ['$'])
console.log(result)

result = getPreco.bind(product)
result = result()
console.log(result)

