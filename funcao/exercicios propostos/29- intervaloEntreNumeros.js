/**
 * 29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
   deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
   deles estão fora do intervalo, escrevendo estas informações.
 */

let vet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 23, 57,20, 10, 11, 17]

function intervaloEntreNumeros(vet){
    let qtdDentroIntervalo = 0
    let qtdForaIntervalo = 0
    vet.forEach((valor) => {
       if(valor >= 10 && valor <= 20) {
          qtdDentroIntervalo++
       } else {
          qtdForaIntervalo++
       }
    })

    return [{qtdDentroIntervalo, qtdForaIntervalo}]
}

console.log(intervaloEntreNumeros(vet))

