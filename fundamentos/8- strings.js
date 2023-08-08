/* strings podem ser delimitadas por aspas simples, duplas ou crase */

const escola = "Cod3r"

// a constante escola recebe um dado do tipo string
console.log(typeof escola)

/* Funcões para string  */

// A função charAt(2) retorna o valor do caracter na posição especifícada
console.log(escola.charAt(4))
console.log(escola.charAt(5))

// A função charAt(2) retorna o valor do caractere especificado na tabela ascii
console.log(escola.charCodeAt(4))

// A função indexOf('o') retorna a posição do caracter especificado na string
console.log(escola.indexOf('o'))

console.log(escola.substring(1))
console.log(escola.substring(0,5))

// A função concat ajunta partes diferentes, formando assim, uma única string
console.log('Escola: '.concat(escola).concat('!'))
console.log('Escola' + escola + "!")

/*
 A função replace substitui  um caracter por outro na string
 É possível, inclusive, substituir uma regex por um caracter
 */
console.log(escola.replace("d", "k"))

/* 
  A funçao split converte uma string para array
 */
let firstName = "Alexandre, Jõao, Akeny, Banguito"
console.log(firstName.split(","))


