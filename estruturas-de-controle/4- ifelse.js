console.log(typeof 8) // O valor 8 é um number(com n minúsculo) que representa um tipo de dado
console.log(typeof Number) // O Number(com n maiúsculo) é uma função


/*
 Essa abordagem de criar funções, me permite colocar função "nativas" no protótipo de um determinado
 tipo de dado, o que me dá a possibilidade de chamar função tradicionais("não nativas") a partir de um tipo
 de dado nativo da linguagem.
*/
Number.prototype.entre = function(inicio, fim){
 /**
  * Se eu sou um Number, então o modo de acessar o meu valor atual é usando a palavra this, que nesse
  * contexto representa o tipo de dado number(nativo) do javascript
  */

   return this >= inicio && this <= fim
}

const imprimirResultado = function(nota){
   if(nota.entre(14, 20)){
      console.log("Quadro de honra!")
   } else if(nota.entre(8, 13)){
      console.log("Aprovado!")
   } else if(nota.entre(0, 7)) {
      console.log("Reprovado!")
   } else {
      console.log("Nota inválida")
   }
}

imprimirResultado(15)
imprimirResultado(10)
imprimirResultado(6)
imprimirResultado(-5)