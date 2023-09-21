const pai = {nome:"Paulo", corCabelo: "preto"}

// A função create permite a criação de um objeto.
const filho = Object.create(pai)
filho.nome = "Alexandre"

console.log(filho)

/*
   A função create recebe dois argumentos, o primeiro é o prototype e o segundo é um objeto
   de objetos, na qual definimos os atributos e suas características
*/
const filha2 = Object.create(pai, {nome: {value:"Madalena", writable: false, enumerable: true},
               idade: {value:20, enumerable:true}})

console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha2))

/*
  É possível percorrer um objeto usando a estrutura iterativa for in, usando essa estrutura até
  os atributos do prototype serão listados.
*/
for(let key in filha2){
   //A função hasOwnProperty testa se a propriedade pertence ao próprio objeto ou vem por herança.
   filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança ${key}`)
}

