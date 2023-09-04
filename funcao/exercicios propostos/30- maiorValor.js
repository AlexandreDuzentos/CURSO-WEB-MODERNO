let vet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 23, 57,20, 10, 11, 17]

function maiorValor(vet){
   let maiorValor = vet[0]
   vet.forEach((valor) => {
      if(valor > maiorValor) {
         maiorValor = valor
      }
   })

   return maiorValor
}

console.log(maiorValor(vet))