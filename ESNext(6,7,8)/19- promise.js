function funcionarOuNao(valor, chanceErro){
   return new Promise((resolve, reject) => {
    try{
        if(Math.ranom() < chanceErro){
            /*
             A função reject é usada para rejeitar uma promise, passando para ela a razão da rejeição
            */
            reject("Ocorreu um erro!")
        } else {
            /*
              A função resolve é usada para resolver uma promise, passando para ela o resultado da
              resolução.
            */
            resolve(valor)
        }
    } catch(e){
       reject(e)
    }

   })
}

/*
 A função then é usada para tratar o resultado de uma promise que foi resolvida.
 A função catch é usada para tratar o resultado de uma promise que foi rejeitada.

 É possível encadear várias chamadas da função then e da catch.

 As funções then não são ignoradas, independentemente do momento em que elas são
 chamadas, mas deixam de receber argumentos, quando dentro são passadas duas callbacks.

 É possível passar duas callbacks para a função then, sendo que a primeira será usada
 para tratar o resultado de uma promise que foi resolvida e a segunda para tratar 
 o resultado de uma promise que foi rejeitada, dessa forma, se na cadeia de chamadas, haver
 uma outra função catch, ela será ignorada, pois a promise rejeitada já terá sido
 tratada pela função then, que recebeu duas callbacks.

 Quando são passadas duas callbacks para a função then, caso ocorra um erro na primeira,
 a segunda callback tratará o erro.

 Resumindo, a segunda callback passada para a função then, é responsável tanto por tratar
 erros gerados na rejeição da promise e erros gerados na primeira callback passada para ela,
 o erro gerado na rejeição da promise tem prioridade em relação erro gerado pela primeira callback.
*/
funcionarOuNao("Testando...", 0.4)
   .then((valor) => `Valor: ${valor}`)
   .then((valor) => console.log(valor), (err) => console.log(`Erro: ${err}`))
   .catch(() => console.log(`catch que será ignorada`))
   .then(() => console.log("then que já não recebe argumento"))