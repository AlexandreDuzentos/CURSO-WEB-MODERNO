// Melhorias na criação de objetos do ES5(ecmascript 2016)

const n1 = 1
const n2 = 2
const n3 = 3

// Sintaxe na versão antiga
const numbers = {n1:n1, n2:n2, n3:n3}
console.log(numbers)

// Sintaxe na versão ES5(ecmascript 2016)
const numbers2 = {n1, n2, n3}
console.log(numbers2)


/*
  Agora também é possível criar identificadores dentro de colchetes em forma de string
  e inclusive a string pode ter espaço em branco e acentuações.
 */
const nomeAttr1 = "primeiroNome yés"
const valorAttr1 = "Alexandre"

const nomeAttr2 = "idade"
const valorAttr2 = 20

const nomeAttr3 = "nacionalidade"
const valorAttr3 = "Angolana"

const dadosPessoais = {}
dadosPessoais[nomeAttr1] = valorAttr1
dadosPessoais[nomeAttr2] = valorAttr2
dadosPessoais[nomeAttr3] = valorAttr3

console.log(dadosPessoais)


/* A sintaxe na criação de funções também sofreu melhorias */

// Forma antiga de criar funções dentro de objetos
const obj1 = {
    falar:function(){

    }
}

// Forma nova de criar funções dentro de objetos
const obj2 = {
    falar(){

    }
}
