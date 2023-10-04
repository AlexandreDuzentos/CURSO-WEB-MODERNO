/**
 * Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplica
 * ção, é possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma funcionalidade
 * que você está desenvolvendo no momento é a de somar o total de despesas.
 * 
 * Crie uma funcão que receba um array de produtos e retorne o total das despesas.
 */

function despesasTotais(arrayProdutos){
     const preco = obj => obj.preco
     const soma = (acumulador, atual) => acumulador + atual

     const despesaTotal = arrayProdutos.map(preco).reduce(soma)

     return despesaTotal
}

console.log(despesasTotais([
    {nome: "Jornal Online", categoria: "Informaçãa", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
]))

console.log(despesasTotais([
    {nome: "Galaxy s20", categoria: "Eletrônicos", preco: 3599.99},
    {nome: "macBook pro", categoria: "Eletrônicos", preco: 30999.90}
]))