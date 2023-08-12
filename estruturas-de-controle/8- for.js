let contador = 1 // Declaração do contador

while(contador <= 10){ // condição para execução do bloco associado ao while
    console.log(`Contador = ${contador}`)
    contador++ // imcremento dentro do bloco associado ao while
}


/**
 * Na estrutura repetitiva for, temos três partes , a declaração do contador, a condição para execução
 * do bloco associado ao for e o incremento.
 * */
for(let i = 1 ; i <= 10; i++){
    console.log(`i = ${i}`)
}

const notas = [7,4.7 ,8.8 ,11.2 ,5.9]

for(let i = 0; i < notas.length; i++){
    console.log("nota =", notas[i])
}