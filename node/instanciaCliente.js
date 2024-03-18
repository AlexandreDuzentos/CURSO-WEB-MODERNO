/** A mesma instância aponta para a mesma referência de memória */
let contadorA = require("./instanciaUnica")
let contadorB = require("./instanciaUnica")

contadorA.inc()
contadorA.inc()

console.log(contadorA.valor)
console.log(contadorB.valor)


/** Instâncias diferentes apontam para diferentes referências de memória */
let contadorC = require("./instanciaNova")()
let contadorD = require("./instanciaNova")()


contadorC.inc()
contadorC.inc()

console.log(contadorD.valor, contadorC.valor)

