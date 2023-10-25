/**
 * No ES6(ECMASCRIPT 2015) surgiram duas novas palavras
 * reservadas para declarar variável e constante, nomeadamente const e let.
 * 
 * escopo: é a área de atuação de uma variável, representa o local onde ela é visível.
 * 
 * O var tem dois escopos, o escopo global e o escopo de função e o let tem três escopos,
 * um escopo global, escopo de função e escopo de bloco(if, while, do while ou qualquer bloco
 * que não esteja associado a nenhuma das estruturas de controle)
 */

{
    var a = 6
    let c = 9
}

console.log(a)
/*
console.log(c) erro: por que variáveis declaradas com a palavra reservada let têm escopo de escopo.
*/


/*
 Template string ou template literals: é um recurso novo para string que permite fazer interpolação
 de variáveis, os delimitadores para as templates strings são as cráses, o template string considera
 tabs e quebra de linhas.

 interpolar: é inserir um trecho de texto dentro de outro.
 */

 const produto = "HP ELITEBOK G4"
 console.log(`Produto        
 ${produto}
  é caro`)


  /*
  Destruturing: é um recurso que permite retirar dados de uma estrutura, como array ou objeto
  ou string.
  */

  // Desestruturando uma string
  const [letra1,, letra2, letra3, ...resto] = "Alexandre"

  console.log(letra1, letra2, resto)


  // Desestruturando um array
  const [x, y] = [2,3,7, 9, 8]

  console.log(x, y)


  // Desestruturando um objeto
  const {nome, idade} = {nome: "Alexndre", idade:20}

  console.log(nome, idade)





