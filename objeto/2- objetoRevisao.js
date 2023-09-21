// Um objeto é uma coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = "Computador"
produto['marca'] = "HP"
produto.categoria = "Eletrônico"
produto.preco = 250

console.log(produto)

delete produto.categoria
delete produto['marca']

console.log(produto)


const carro = {
    modelo: "Hilux",
    valor: 89000,
    proprietario: {
        nome: "Alexandre",
        idade:18,
        endereco: {
            pais: "Angola",
            provincia: "Luanda",
            municipio: "Talatona",
            distrito: "Futungo",
            bairro: "kawelele"
        }
    },
    condutores: [{
       nome: "Marcos",
       idade: 22
    }, {
       nome: "Ana",
       idade: 42 
    }],
    calcularValorSeguro(){
        //...
    }
}


carro.proprietario.endereco.numero = 1236
carro['proprietario']['endereco']['bairro'] = "Mabunda"

console.log(carro)

delete carro.proprietario.endereco
delete carro.condutores

console.log(carro)

// Quanto tentamos acesar um atributo a partir de outro que está undefined, será gerado um erro.