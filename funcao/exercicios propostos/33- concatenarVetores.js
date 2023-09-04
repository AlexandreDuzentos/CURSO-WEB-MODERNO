/**
 * 33) Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
   quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
   Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
   mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.
 */

let vetorInteiro = [1,2, 3, 4]
let vetorString = ["Paulo", "Mateus", "Carlos", "Alexandre"]
let vetorDouble = [1.1, 1.2, 1.3, 1.4]

function concatenarVetores(vetorInteiro, vetorString, vetorDouble){
    return vetorInteiro.concat(vetorString).concat(vetorDouble)
}

console.log(concatenarVetores(vetorInteiro, vetorString, vetorDouble))


/**
 * 
 * Para percorrer uma matriz em JavaScript, você pode usar um loop for aninhado. O primeiro loop é
 * responsável pelo índice das linhas, enquanto o segundo loop é responsável pelo índice de cada coluna.
 */

function concatenarVetores2(...vetores){
   
   for(let i = 0; i <= 2; i++){
        if(i !== i){
           return "Teste" + vetores[i].concat(vetores[i])
        }
           
      }
}

concatenarVetores2(vetorInteiro, vetorString, vetorDouble)