/**
 * Crie uma função que receba um array de elementos e retorne um array somente com
 * os números presentes no array recebido como parâmetro.
 */

function filtrarNumeros(array){
   let novoArray = []
    for(let i = 0; i < array.length; i++){
        if(Number.isInteger(array[i])){
           novoArray.push(array[i])
        }
    }

    return novoArray
}

console.log(filtrarNumeros(["Javascript", 1, "3", "web", 20]))
console.log(filtrarNumeros(["A", "B"]))