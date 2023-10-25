// Não aceita repetição e não é indexada.
const times = new Set()

// Adicionand um elemento no Set
times.add("Vasco")
times.add("São Paulo")

// É possível adicionar elementos de forma encadeada dentro do set
times.add("Flamengo").add("Petro de luanda").add("Vasco")

console.log(times)

// O atributo size retorna o tamanho do Set
console.log(times.size)

// A função has testa se determinado elemento está presente dentro do Set
console.log(times.has("Vasco"))

const nomes = ["Paulo", "Mateus", "Antônio", "Mário", "Alexandre", "Mateus"]

// Passando um array no construtor do Set
const newSet = new Set(nomes)

console.log(newSet)