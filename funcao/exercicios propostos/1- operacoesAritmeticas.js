/**
 * 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
 * multiplicação e divisão desses valores. 
 */

function aritmeticas(n1, n2){
    let soma = n1 + n2
    let subtracao = n1 - n2
    let mult = n1 * n2
    let divisao = n1 / n2

    return [soma, subtracao, mult, divisao]
}

console.log(aritmeticas(5, 0))