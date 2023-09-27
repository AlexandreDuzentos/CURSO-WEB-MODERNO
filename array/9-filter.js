/*
função callback é uma função que é passada como parâmetro para outra função,
e que será chamada toda vez que um evento ocorrer.

 A função filter percorre cada elemento de um array e invoca a função callback
 passada como parâmetro para ela, passando como parâmetro na callback passada para
 ela, o valor, indice e o próprio índice do array em questão e testando se o resultado
 da condição do teste passado na callback, caso o teste for verdadeiro, o elemento atual
 do teste é adionado em um novo array, caso contrário, o elemento é descartado para o novo array.
*/

const produtos = [
    {nome: "Notebook", preco: 2499, fragil: true},
    {nome: "ipad Pro", preco: 4199, fragil: true},
    {nome: "Copo de Vidro", preco: 12.49, fragil: true},
    {nome: "Copo plástico", preco: 18.99, fragil: false}
]

let fragil = p => p.fragil
let maiorQue500 = p => p.preco >= 500

let resultado = produtos.filter((element) => {
    return element.preco > 2500 ? true : false
}) 

// Encadeamento de filter
resultado = produtos.filter(fragil).filter(maiorQue500)

console.log(resultado)