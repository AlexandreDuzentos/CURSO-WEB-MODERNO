/**
 * 32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros
 */

let vet = [1, 2, 3, 4, 5]

function mediaAritmetica(vet){
    let mediaAritmetica = 0
    let soma = 0

    vet.forEach((valor, indice) => {
        let index = (indice + 1)
        soma = soma + valor
        mediaAritmetica = soma / index
    })

    return mediaAritmetica
}

console.log(mediaAritmetica(vet))