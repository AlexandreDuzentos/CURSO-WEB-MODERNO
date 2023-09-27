const personagensBiblicos = ["Abraão", "Jose"]
const personagensBiblicos2 = ["Jaco", "Moíses"]
const personagensBiblicos3 = ["Ismael", "Isaque"]


// A função concat serve para concatenar arrays ou seja, juntar partes diferentes de um array em um só.
let todos = personagensBiblicos.concat(personagensBiblicos2, personagensBiblicos3)
todos = personagensBiblicos.concat(personagensBiblicos2, "Paulo")

console.log(todos)

console.log(['c','k', 'w'].concat([1, 2], [3, 4], 8, [[8, 9]]))