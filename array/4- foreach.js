const aprovados = ["Agatha", "Aldo", "Daniel", "Raquel"]


/*
 função callback é uma função que é passada como parâmetro para outra função,
 e que será chamada toda vez que um evento ocorrer.

 A função forEach percorre cada elemento de um array e invoca a função callback
 passada como parâmetro para ela, passando como parâmetro na callback passada para
 ela, o valor, indice e o próprio índice do array em questão.
*/
aprovados.forEach((nome, indice, array) => {
    console.log(`${indice + 1}. ${nome}`)
    console.log(array)
})

aprovados.forEach(function(nome){
   console.log(`${nome}`)
})

let nomeAprovados = nome => console.log(`${nome}`)

aprovados.forEach(nomeAprovados)