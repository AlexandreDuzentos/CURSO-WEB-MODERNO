const pessoa = {
    primeiroNome: "Alexandre",
    ultimoNome: "Duzentos",
    idade: 20,
    altura: 1.90,
    nacionalidade: "Angolana"
}


// A função keys() da função nativa Object pega todas as chaves do objeto em questão e retorna um vetor
console.log(Object.keys(pessoa))

// A função values() da função nativa Object pega todos os valores do objeto em questão e retorna um vetor
console.log(Object.values(pessoa))

// A função entries() da função nativa Object pega todos as chaves e valore do objeto em questão e retorna uma matriz
console.log(Object.entries(pessoa))

// Percorrendo uma matriz usando a função callback forEach e o operador destructuring para desestruturar o array.
Object.entries(pessoa).forEach(([chave, valor]) => {
   console.log(chave, valor)
})


/* 
A função defineProperty do objeto nativo Object do javacript permite adicionar e modificar propriedades
existentes dentro de um objeto e definir características para o mesmo.
 */
Object.defineProperty(pessoa, "dataNascimento", {
    enumerable: true, // característica que diz respeito se a propriedade será listada ou não
    writable: false, // característica que diz respeito se a propriedade será modificável ou não
    value: "16/05/2002" // característica que diz respeito ao valor da propriedade
})

console.log(Object.keys(pessoa))
pessoa.dataNascimento = "11/09/2023"

console.log(pessoa)


// Ecmascript 2015(Object.assign)

const dest = { a: 1 }
const o1 = {b: 2}
const o2 = {c: 3}

/* 
 A função assign da função Object do javascript permite concatenar(juntar) outros objetos a um
 um objecto de destino
 */
const obj = Object.assign(dest, o1, o2)

// Evita que atributos existentes sejam modificados e novos sejam adicionados
Object.freeze(obj)
obj.a = 9
obj.d = 7

console.log(obj)
