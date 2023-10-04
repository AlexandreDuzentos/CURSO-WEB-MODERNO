/**
 * Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que
 * repetirá, enquanto que o segundo será o número de vezes que haverá repetição. Um array será retornado.
 */

function repetir(elemento, qtdVezes){
    const element = elemento
    const array = []

    for(let i = 1; i <= qtdVezes; i++){
        array.push(elemento)
    }

    return array
}

console.log(repetir("Paulo", 4))
console.log(repetir(7, 3))