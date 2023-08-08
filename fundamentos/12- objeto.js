/* Objecto em javascript é uma coleção de pares: chave e valor */

// Criando objetos dinamicamente
const estudante = {}
estudante.primeiroNome = "Alexandre" // Notação ponto
estudante.ultimoNome  = "Duzentos"
estudante.idade = 20
estudante.nacionalidade = "Angolana"
estudante.email = "Aduentos12@gmail.con"
estudante['numero de processo'] = "19281733828" // notação de colchetes para criar atributos com espaço em branco

console.log(estudante)
console.log(estudante["numero de processo"])

const gostosPessoais = {
    cantor: "Nelson freitas",
    nacionalidade: "cabo-verdiano",
    raca: "Negra",
    idiomaNativo: "Criolo"

}

console.log(gostosPessoais)
console.log(typeof gostosPessoais)

let gostosPessoaisJson = '{"cantor" : "Nelson freitas", "nacionalidade" : "cabo-verdiano", "raca" : "Negra","idiomaNativo" : "Criolo"}'

let prod1Json = '{ "nome": "Camisa polo", "preco": "90" }'



