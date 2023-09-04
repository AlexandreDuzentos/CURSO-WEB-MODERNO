/**
 * 36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
   inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
   elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
   o valor do elemento for maior que 5.
 */

   function vetorNovo1(arrayNum, n1){
    let novoVetor = []
        arrayNum.forEach((valor) => {
            novoVetor.push(valor * n1)
        })

       return novoVetor 
   }

   console.log(vetorNovo1([2,4,5,6,7,9,19], 3))

   function vetorNovo2(arrayNum, n1){
    let novoVetor = []
        arrayNum.forEach((valor) => {
            if(valor > 5){
                novoVetor.push(valor * n1)
            }
        })

       return novoVetor 
   }

   console.log(vetorNovo2([2,4,5,6,7,9,19], 3))
