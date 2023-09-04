/**
 * 12) Faça um algoritmo que calcule o fatorial de um número.
 */

function fatorial(num){
   let fat = 1
    for(let i = num; i >= 1; i--){
        fat = fat * i
    }
    return fat
}

console.log(fatorial(6))