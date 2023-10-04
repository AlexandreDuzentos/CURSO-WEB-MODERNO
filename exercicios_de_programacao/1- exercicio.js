/**
 * Desenvolva uma função que recebe dois números inteiros não negativos(maiores ou iguais a zero) e 
 * realize a multiplicação entre eles, porém, não utilize  o operador de multiplicação.
 */

function multiplicar(n1, n2){
    let multiplicacao = 0
  
    for(let i = 1; i <= n2; i++){
         multiplicacao = multiplicacao + n1
    }

    return multiplicacao;
}

console.log(multiplicar(5, 5))
console.log(multiplicar(0, 7))

