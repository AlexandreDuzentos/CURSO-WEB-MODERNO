// usando a notação literal
const obj1 = {}
console.log(obj1)

console.log(typeof Object ,typeof new Object)

// criando objetos a partir de uma função construtora nativa do javascript
const obj2 = new Object
obj2.nome = "Alexandre"
console.log(obj2)

// Criando objetos a partir de uma função construtora criada por mim
function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = function(){
        return preco * (1 - desc)
    }
}


let prod = new Produto("Laptop", 2500, 0.20)
let prod2 = new Produto("Caneta", 300, 0.10)
console.log(prod.getPrecoComDesconto())
console.log(prod2.getPrecoComDesconto())


// Criação de objetos a partir de uma função factory
function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return this.salarioBase - (this.faltas * (this.salarioBase/30)) 
        }
    }
}

const f1 = criarFuncionario("Alexandre", 7980, 4)
const f2 = criarFuncionario("Miguel", 11400, 1)
console.log(f1.getSalario())
console.log(f2.getSalario())

// Object.create()
let filho = Object.create(null)
filho.nome = "Mateus"
filho.idade = 19
filho.altura = 1.90

console.log(filho)


// Uma função famosa que retorna objeto
const fromJson = JSON.parse('{"info":"Sou um JSON"}')
console.log(fromJson.info)

/**
 *  Escopos no browser: global(window), de função, de bloco(let, const)
 *  Escopos no node: global(global), nível do própio módulo(que representa o arquivo), de função
 *  */

