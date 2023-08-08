let notas = [9, 12, 18, 16]

/*
   Os índices no array começam a partir do zero
   Acessando índices válidos no array
 */
console.log(notas[0], notas[3])

// Ao acessar um índice inexistente no array, é tornado undefined
console.log(notas[4])

// Acessando o array como um todo
console.log(notas)

// Adicionando um elemento num índice específico do array
notas[4] = 7
console.log(notas)

// O atributo length retorna a quantidade de itens dentro de um array
console.log(notas.length)

// Um array no javascript é uma estrutura  hetorógenea, isto é, aceita tipos de dados diferentes
notas.push({name: 'Alexandre'}, true, 9, "Mateus")

console.log(notas)

// A função pop exclui o último elemento do array e retorna-o
console.log(notas.pop())

// Essa sentença de código exclui um elemento específico no array
delete notas[4] 

console.log(notas)

// Um array no javascript é do tipo objecto
console.log(typeof notas)







