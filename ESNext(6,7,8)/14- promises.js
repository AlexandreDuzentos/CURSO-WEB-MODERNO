/*
 A callback passada para o construtor da promise é o executor, que é uma função
 usada par inicializar promise.

 A callback executor recebe dois parâmetros, o primeiro, é uma callback resolve,
 usada para resolve a promise com um valor ou o resultado de outra promise, o segundo
 é uma callback reject usada para rejeitar a promise com uma razão fornecida ou mensagem
 erro.
*/
const p = new Promise((resolve, reject) => {
    resolve("Sucesso!...")
})


/*
 A callback passada para a função then da classe Promise, será chamada apenas quando a promise for
 resolvida usando a callback resolve que é passada como parâmetro para ela.
*/
p
   .then((msg) => msg)
   .then((msg) => msg.split(""))
   .then((msgArray) => msgArray)
   .then((msgArray) => msgArray.join(""))
   .then((string) => console.log(string.toUpperCase()))

// É uma função.
console.log(typeof Promise)

console.log(typeof p)