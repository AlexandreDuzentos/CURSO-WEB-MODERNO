// O global é o objeto global do node.
console.log(global)

// Evitar manipular o objeto global, por conta dele ser compartilhado entre todos os módulos do node.

// Adicionando um objeto no objeto global
global.minhaApp = {
    nome: "Alexandre",
    saudacao(){
        return `Olá ${this.nome}`
    }
}

