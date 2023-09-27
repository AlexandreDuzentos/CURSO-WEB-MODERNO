const personagensBiblicos = ["Paulo", "Mateus", "Abraão", "Enoque"]

// o método pop remove o último elemento do array.
personagensBiblicos.pop() 

console.log(personagensBiblicos)

// o método push adiciona um elemento na última posição do array.
personagensBiblicos.push("Jaco") 

console.log(personagensBiblicos)

// O método shift remove o primeiro elemento do array e retorna-o.
personagensBiblicos.shift()

console.log(personagensBiblicos)

// O método unshift adiciona um elemento ao início do array e retorna a quantidade de elementos
personagensBiblicos.unshift("Elias")

// É um método que permite pegar uma parte do array, através dos índices.
let algunsPersonagens = personagensBiblicos.slice(2)

/**
 *  Em teoria, todos os índices deveriam ser pegues, mas na prática o último 
 *  índice não é pegue.
 * */
algunsPersonagens = personagensBiblicos.slice(1, 3)


algunsPersonagens = personagensBiblicos.slice(-2)

console.log(algunsPersonagens)
