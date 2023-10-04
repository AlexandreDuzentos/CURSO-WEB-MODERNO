/**
 * Crie uma função que receba um array e retorne o primeiro e o último elemento
 * desse array como um novo array.
 */

function receberPrimeiroEUltimoElemento(array){
    const novoArray = []
    
    novoArray.push(array[0], array.pop())

    return novoArray
}

console.log(receberPrimeiroEUltimoElemento([7, 14, "Olá"]))
console.log(receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]))