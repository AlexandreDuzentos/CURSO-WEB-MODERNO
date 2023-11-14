/**
 * Promise é um novo recurso do js, nada mais é do que uma promessa, é usado quando
 * se deseja realizar algum processamento assíncrono, uma promise tem dois grandes
 * destinos, ela ser resolvida ou atendida(resolved) ou a promessa ser rejeitada(rejected).
 *  
 * Por exemplo: quando se deseja acessar um arquivo que esteja remoto, uma das possibilidades
 * de acessar esse arquivo é através de uma callback, você passa uma url e depois um callback
 * de sucesso e uma callback de erro,  caso o arquivo seja obtido de forma bem sucedida a callback
 * de sucesso é chamada, caso contrário a callback de erro é chamada, apresentando a mensagem de
 * erro.
 * 
 * A promise é uma estrutura que tem como objetivo representar alguma operação assíncrona.
 * 
 */


/*
 O primeiro parâmetro é o tempo de espera para realizar alguma tarefa, o segundo parâmetro será a frase
 dita quando o tempo  de espera se passar.
*/
function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject) => {
          // Simulando um delay para o processamento de uma operação assíncrona
          setTimeout(() => {
             /*
              A função callback resolve é chamada quando Promise é atendida.

              resolvendo a promise, ou seja, atendendo a promise com sucesso passando o argumento
              que será passada para função then().

              A callback de sucesso chamada abaixo, aceita um único argumento.
             */
            // resolve(frase)
             
            /**
             * A função callback reject é chamada quando a Promise não é atendida.
             * 
             * rejeitando a promise, ou seja, atendendo a promise com erro passando o argumento
              que será passada para função catch().

              A callback de erro chamada abaixo, aceita um único argumento.
             */
            reject(frase)
          }, segundos * 1000)
    })
}


/*
 A função then() é chamada quando a promise é resolvida passando o argumento que se quer passar para
 a função then().

 A função catch() é chamada quando a promise é rejeitada passando o argumento que se quer passar para
 a função catch().

 A função then() do objeto promise serve para acessar o resultado de uma promise atendida com sucesso
 ou seja, sem erros.

 A função catch() do objeto promise serve para acessar o resultado de uma promise atendida com erro.

 É possível chamar a função then() de forma encadeada, sempre que termina a chamada de uma função
 then() o retorno dela é passado para próximo then().
*/
falarDepoisDe(3, "Que legal").
    then((frase) => frase.concat("?!?")).
    then((outraFrase) => console.log(outraFrase) )
    .catch(e =>  console.log(e))
