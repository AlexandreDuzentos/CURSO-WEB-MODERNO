const nome = "Paulo"
const concatenacao = "Olá "+ nome + " !"

/*
 O template string permite realizar a interpolação entre string e variáveis
 interpolar: é a sucessão de coisas com outras
 O template string é um recurso do Ecmascript 2015
 ela é delimitada por crases(``) e interpreta espaços e quebras de linhas dentro da string
 para interpolar uma variável, usamos a seguinte notação ${variable}
 */
const templateString = `Olá
${nome}
!` 

console.log(concatenacao, templateString)


// Expressões - os templates string interpretam operações e funções
console.log(`1 + 1 = ${1 + 1}`)

const maiscula = texto => texto.toUpperCase()

console.log(`Olá ${maiscula("carvalho")}`)