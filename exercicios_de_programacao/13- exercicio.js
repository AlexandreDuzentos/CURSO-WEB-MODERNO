/**
 * Elabore uma função que receba um array de números e retorne um array que tenha todos os números
 * que são pares e que também tenham índices pares.
 */

function valoresEIndicesPares(array){
     const newArray = []

    for(let i = 0; i < array.length; i++){
        if(i % 2 == 0 && array[i] % 2 == 0){
            newArray.push(array[i])
        } 
    }

    return newArray;
}


console.log(valoresEIndicesPares([1, 2, 3, 4]))
console.log(valoresEIndicesPares([10, 70, 22, 43]))