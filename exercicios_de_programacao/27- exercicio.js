/**
 * Crie uma função que receba um array de números e retorne o segundo maior número presente nesse
 * array.
 */
function segundoMaior(numeros){
   let maiorValor = 0
   let segundoMaior = 0
   let indiceMaior

   for(let i = 0 ; i < numeros.length; i++){
       if(numeros[i] > maiorValor){
          maiorValor = numeros[i]
          indiceMaior = i
       }
   }

   delete numeros[indiceMaior]

   for(let i = 0 ; i < numeros.length; i++){
      if(numeros[i] > segundoMaior){
         segundoMaior = numeros[i]
      }
   }

   return segundoMaior
}

let numeros = [1,2, 7, 4, 6]
let numeros2 = [12, 16, 1, 5]
let numeros3 = [8, 4, 5, 6]

console.log(segundoMaior(numeros))
console.log(segundoMaior(numeros2))
console.log(segundoMaior(numeros3))
