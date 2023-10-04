/**
 * Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade
 * de vezes que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá
 * diferenciar entre maiúsculas e minúsculas.
 */

function contarCaractere(caractere, string){
   let stringCaracteres = string.split("")
   let contador = 0

   for(let i = 0; i < stringCaracteres.length; i++){
      if(stringCaracteres[i].charCodeAt(stringCaracteres[i]) == caractere.charCodeAt(0)){
         contador += 1
      }
   }

   return contador
}

console.log(contarCaractere("r", "A sorte favorece os audazes!"))
console.log(contarCaractere("c", "Conhece-te a ti mesmo"))

