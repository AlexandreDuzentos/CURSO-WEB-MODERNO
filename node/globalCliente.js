/*
 Para que de fato o global.js coloque algo no escopo global é preciso importa-lo.
*/

require("./global")


console.log(global.minhaApp.nome)
console.log(global.minhaApp.saudacao())

global.minhaApp.nome = "Paulo"

console.log(global.minhaApp.nome)
console.log(global.minhaApp.saudacao())