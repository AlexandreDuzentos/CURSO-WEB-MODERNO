// ES8 Object.values/Object.keys/ Object.entries

const obj = {a: 1, b: 2, c: 3}

console.log(Object.values(obj))
console.log(Object.keys(obj))
console.log(Object.entries(obj))


// Melhorias na notação literal de objetos


let nome = "Alexandre"
let idade = 20
let altura = 1.89

const pessoa = {
  nome,
  idade,
  altura,
  falar(){
    return `Olá ${nome}`
  }
}

console.log(pessoa)
console.log(pessoa.falar())


// Class
class Animal {}
class Cachorro extends Animal{
    falar(){
        return `Au au`
    }
}

let cachorro = new Cachorro()

console.log(cachorro.falar())
