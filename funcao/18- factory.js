// Função factory: é uma função que fabrica e retorna um objeto


// A função factory evita o retrabalho de criar objetos com os mesmos dados mais de uma vez.
const prod1 = {
    nome: "Computador",
    preco: 200.90
}

const prod2 = {
    nome: "Celular",
    preco: 120.30
}

function criarProd(){

    return {
       id: 1,
       nome: "computador",
       preco: 200.90
    }
}


console.log(criarProd())