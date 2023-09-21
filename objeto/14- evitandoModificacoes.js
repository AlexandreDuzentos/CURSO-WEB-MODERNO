
/*
 A função preventExtensions evita com que
 o objecto seja estendido, ou seja, novos atributos sejam adicionados
*/
const produto = Object.preventExtensions({
    nome: "Qualquer",
    preco: 1.99,
    tag: "Promoção"
})


// A função isExtensible testa se o objeto é extensível
console.log("Extensível: ", Object.isExtensible(produto))

produto.nome = "Borracha"
produto.descricao = "Borracha escolar branca" // Não surtirá efeito no objeto
delete produto.tag

// A função seal, sela o objecto, não permitindo adicões e deleções de atributos
const person = {
    nome: "Paulo",
    idade:30,
}

Object.seal(person)

person.idade = 32
person.raca = "Negra"
delete person.idade

console.log(person)

// Object.freeze = Object.seal + atributos constantes
const lapiseira = {
    marca: "bic",
    cor: "Azul",
}

Object.freeze(lapiseira)

lapiseira.marca = "Bravo"
lapiseira.estado = "cheia"
delete lapiseira.cor

console.log(lapiseira)