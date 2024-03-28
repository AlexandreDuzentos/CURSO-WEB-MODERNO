/*
    A função require serve para importar módulos, para importar módulos criados por min deve-se
    usar o caminho relativo até ele.
 */
const moduloA = require("./2- ModuloA");
const moduloB = require("./3- ModuloB");

console.log(moduloA.nome)
console.log(moduloA.idade)
console.log(moduloA.raca)

console.log(moduloA)


console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)