/**
 * 40) Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
   modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
   conceito B e de 9,0 a 10,0 o conceito A.
 */

function determinarConceito(vetorNotas){
    let A = "",B = "",C = "",D = ""
   vetorNotas.forEach((nota) => {
     if(nota >= 0 && nota <= 4.9){
        D = "D"
     } else if(nota >= 5.0 && nota <= 6.9){
        C = "C"
     } else if(nota > 7.0 && nota <= 8.9){
        B = "B"
     } else if(nota >= 9.0 && nota <= 10.0){
        A = "A"
     }

   })

   return [A, B, C, D]
}

console.log(determinarConceito([5]))