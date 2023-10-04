/**
 * Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo
 */

function maiorOuIgual(n1, n2){
  if(n1 >= n2){
    return true
  }

  return false
}

console.log(maiorOuIgual(0, 0))
console.log(maiorOuIgual(0, "0"))
console.log(maiorOuIgual(5, 1))