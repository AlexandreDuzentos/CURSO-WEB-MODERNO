let contadorA = require("./instanciaUnica")
let contadorB = require("./instanciaUnica")

contadorA.inc()
contadorA.inc()

console.log(contadorB.valor)


let contadorC = require("./instanciaNova")()
let contadorD = require("./instanciaNova")()


contadorC.inc()
contadorC.inc()

console.log(contadorD.valor, contadorC.valor)

