console.log(module.exports === this)
console.log(exports === this)


this.a = 1
exports.b = 2
module.exports.c = 3

//exports = null

// O objeto não será exportado usando o exports
exports = {
    nome: "Teste"
}

console.log(module.exports)


// Para criar e exportar um novo objeto deve-se usar o module.exports
module.exports = {publico: true}

console.log(module.exports)