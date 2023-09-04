// Classe nada mais é do que um função, o que difere é apenas a forma de escrever(sintaxe)

class Pessoa {
    constructor(nome){
       this.nome = nome
    }


    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}


const p1 = new Pessoa("Alexandre")
p1.falar()

const criarPessoa = (nome) => {
    return {
        falar(){
            console.log(`Meu nome é ${nome}`)
        }
    }
}

criarPessoa("Paulo").falar()


const criarPessoa2 = (nome) => {
    return {
        nome,
        falar: () => {
            console.log(`Meu nome é ${this.nome}`)
        }
    }
}

criarPessoa("Metusalém").falar()
