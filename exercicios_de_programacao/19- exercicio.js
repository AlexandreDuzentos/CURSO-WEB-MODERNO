/**
 * Crie uma função que receba um array de números e retorne o menor número desse array 
 */

function menorNumero(arrayNum){
   let menor = arrayNum[0]

   for(let i = 0 ; i < arrayNum.length; i++){  
       if(arrayNum[i] <  menor){
          menor = arrayNum[i]
       }
   }

   return menor
}

console.log(menorNumero([10, 5, 35, 65]))
console.log(menorNumero([5, -15, 50, 3]))