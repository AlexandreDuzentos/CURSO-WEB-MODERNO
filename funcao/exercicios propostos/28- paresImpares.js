/**
 * 28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
 */

let vet = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function qtdParImpar(vet){
    let qtdPares = 0
    let qtdImpares = 0
    vet.forEach((valor, indice) => {
       if(valor % 2 == 0){
          qtdPares++
       } else {
          qtdImpares++
       }
    })

    return [{qtdPares}, {qtdImpares}]
}

console.log(qtdParImpar(vet))
