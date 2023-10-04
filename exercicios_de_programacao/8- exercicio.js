/**
 * Elabore uma função que recebe um número como parâmetro e retorne uma string
 * com o símbolo "+" na quantidade específicado no parâmetro.
 */

function simboloMais(qualquerNumero){
    const array = []

   for(let i = 1; i <= qualquerNumero; i++){
      array.push("+")
   }

   return array.join("")
}

console.log(simboloMais(2))
console.log(simboloMais(4))