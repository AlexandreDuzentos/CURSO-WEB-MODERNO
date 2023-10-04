/**
 * Crie uma função que receba um número(de 1 a 12) e retorne o mês correspondente como uma string.
 * Por exemplo se a entrada for2, a função deverá retornar "fevereiro", pois este é o segundo mês
 * do mês.
 */

function nomeMes(qualquerNumero1a12){
   let mesEmString
    switch(qualquerNumero1a12){
        case 1:
            mesEmString = "Janeiro"
            break
        case 2:
            mesEmString = "Fevereiro"
            break
        case 3:
            mesEmString = "Março"
        case 4:
            mesEmString = "Abril"
            break
        case 5:
            mesEmString = "Maio"
            break
        case 6:
            mesEmString = "Junho"
            break
        case 7:
            mesEmString = "Julho"
            break
        case 8:
            mesEmString = "Agosto"
            break
        case 9:
            mesEmString = "Setembro"
            break
        case 10:
            mesEmString = "Outubro"
            break
        case 11:
            mesEmString = "Novembro"
            break
        case 12:
            mesEmString = "Dezembro"
            break
        default:
            console.log("Mês inválido")
    }

    return mesEmString
}

console.log(nomeMes(1))
console.log(nomeMes(4))