const fabricantes = ["Toyota", "Mercedes", "Audi", "BMW"]

function imprimir(nome, indice){
   console.log(`${indice + 1}. ${nome}`)
}

/**
 * Função callback é uma função que é disparada toda vez que um
 * evento ocorre.
 * 
 * forEach é uma função de array que percorre cada elemento do array.
 * 
 * Para que uma função seja chamada, quando um evento ocorrer é preciso registrá-la
 * passando-a como argumentos para a função que a invocará(forEach, filter, map, reduce)
 */


// A função forEach passa os seguintes parâmetros para a callback: valor, índice, array
fabricantes.forEach(imprimir)

fabricantes.forEach(function(valor){
    console.log(valor)
})


fabricantes.forEach((valor) => console.log(valor))