/**
 * Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias
 */

function converterIdadeDeAnosParaDias(idadeEmAnos){
    
    let idadeEmDias = idadeEmAnos * 365

    return idadeEmDias
}

console.log(converterIdadeDeAnosParaDias(25))
console.log(converterIdadeDeAnosParaDias(70))