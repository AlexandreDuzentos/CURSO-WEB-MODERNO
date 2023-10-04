/**
 * Desenvolva uma função, que receba uma string como parâmetro e retorne apenas com as consoantes,
 * ou seja, sem as vogais.
 */

function removerVogais(frase){
   const vogais = ["a", "e", "i", "o", "u"]

   for(let i = 0; i < frase.length; i++){
      for(let j = 0; j < vogais.length; j++){
           if(frase.charAt(i) == vogais[j]){
               frase = frase.replace(frase.charAt(i), "")
               break
           }
      }
   }

   return frase
}

console.log(removerVogais("alexandre"))

console.log(removerVogais("cod3r"))
console.log(removerVogais("Fundamentos"))
console.log(removerVogais("alexandre"))
console.log(removerVogais("alexandre duzentos"))

