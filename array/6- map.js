const nums = [1, 2, 3, 4, 5]

/*
função callback é uma função que é passada como parâmetro para outra função,
e que será chamada toda vez que um evento ocorrer.

 A função map percorre cada elemento de um array e invoca a função callback
 passada como parâmetro para ela, passando como parâmetro na callback passada para
 ela, o valor, indice e o próprio índice do array em questão e pegando os valores
 retornados pela callback em questão e adicionando em um novo array.
*/
let resultado = nums.map((valor, indice, array) => valor * 2)

console.log(resultado)

let soma10 = valor => valor + 10
let triplo = valor => valor * 3;
let paraDinheiro = valor => `R$ ${parseFloat(valor).toFixed(2).replace(".", ",")}`

// Chamada da função map em cadeia.
resultado = nums.map(soma10).map(triplo).map(paraDinheiro)

console.log(resultado)





