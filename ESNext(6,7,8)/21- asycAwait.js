function gerarNumerosEntre(min, max, numerosProibido){
    if(min > max) [max, min] = [min, max]
    return new Promise((resolve, reject) => {
            const aleatorio = Math.floor(Math.random() * (max - min) + min)
            // A função includes testa se determinado valor está presente dentro de um array.
            if(numerosProibido.includes(aleatorio)){
                reject("Número repetido!")
            } else {
                resolve(aleatorio)
            } 
    })
        
}


/**
 *  Toda função assíncrona retorna uma promise.
 * 
 * A forma de resolver uma promise dentro de uma função assíncrona é retornando um valor.
 * 
 * A forma de rejeitar uma promise dentro de uma função assíncrona é lançando uma
 * exceção, para isso, é necessário o uso da estrutura try catch.
 *  */
async function gerarMegaSena(qtdNumeros){
  let numeros = []
  try{
    for(let _ of Arry(qtdNumeros).fill()){
        numeros.push(await gerarNumerosEntre(1, 60, numeros)) 
    }
  } catch(e){
     throw "Que chato!!!"
  }

   return numeros
}

gerarMegaSena(5)
  .then((numeros) => console.log(numeros))
  .catch((erro) => console.log(erro))

gerarNumerosEntre(1, 5, [1, 2, 4])
   .then((valorAleatorio) => console.log(valorAleatorio))
   .catch((erro) => console.log(erro))


