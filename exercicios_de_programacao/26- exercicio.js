/**
 * Elabore uma função que recebe dois parâmetros: O primeiro é um array de números e o segundo
 * é um número que especifíca uma quantidade de dígitos. Essa função deverá retornar somente aqueles
 * números do array que têm a quantidade de dígitos indicada pelo segundo parâmetro.
 */

function filtrarPorQuantidadeDeDigitos(array, qtdDigitos){
    const newArray = []
   
    for(let i = 0; i < array.length; i++){
         if(array[i].toString().length ==  qtdDigitos){
             newArray.push(array[i]) 
         }
    }

    return newArray
}

console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2))
console.log(filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1))