/**
 * O async e o await são duas palavras reservadas para trabalhar com processamento
 * assíncrono usando promises.
 * 
 * A palavra reservada await só é válida dentro de uma função assíncrona.
 */

function esperarPor(tempo = 2000){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve()
        }, tempo)
    })
}

/*
Esse código faz o mesmo que o código da função assíncrona abaixo

esperarPor(2000)
   .then(() => console.log("Executando promise...."))
   .then(esperarPor)
   .then(() => console.log("Executando promise..."))
   .then(esperarPor)
   .then(() => console.log("Executando promise..."))
*/


function retornarValor(){
    return new Promise((resolve) => {
       setTimeout(() => {
           resolve(10)
       }, 5000)
    } )
}

async function retornarValorRapido(){
    return 20
}

retornarValorRapido().then((v) => console.log(v))



/*
  O async await faz com que o código seja executado como se fosse síncrona, ou seja, a
  próxima linha de código só será executada quando a promise for resolvida.

  Usamos a palavra reservada await em cima  de uma função que retorna uma promise.

  A palavra await faz com que uma instrução seja apenas executada após a promise ser
  resolvida.

  A await também exclui a necessidade de usar a função then para obter o resultado da promise
  quando ela for resolvida, visto que o resultado será retornado assim que promise for resolvida.
 */
async function executar(){
   /* 
     O valor passado como argumento para a função resolve quando a promise for resolvida será retornado,
     desse modo, ele pode ser atribuído a uma variável.
   */
   let valor = await retornarValor()

   await esperarPor(2000)
   console.log(`Async/Await ${valor}...`)

   await esperarPor(2000)
   console.log(`Async/Await ${valor + 1}...`)

   await esperarPor(2000)
   console.log(`Async/Await ${valor + 2}...`)

   return valor + 3

}


// Por conta da função ser marcada com a palavra reservada async, ela retornará uma promise.
executar().then((valor) => console.log(valor))

/*
O código abaixo lançará uma exceção, uma vez que o node não permite que a palavra
resevada await seja utilizada directamente dentro dele(módulo do node), precisa estar dentro
de uma função async(assíncrona).

const v = await executar()
*/

async function executarDeVerdade(){
    const v = await executar()

    console.log(v)
}

executarDeVerdade()

