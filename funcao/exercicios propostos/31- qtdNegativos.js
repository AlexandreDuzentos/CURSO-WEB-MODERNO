/**
 * 31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
  e imprime a quantidade no console.
 */

let vet = [1, -2, 3, 4, -5, 6, 7, 8, 9, -23, 57,20, 10, -11, -17]

function qtdNegativos(vet){
   let qtdNegativos = 0
   vet.forEach((valor) => {
      if(valor < 0) {
         qtdNegativos++
      }
   })

   return qtdNegativos
}

console.log(qtdNegativos(vet))