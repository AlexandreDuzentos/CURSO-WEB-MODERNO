/*
 Operador unário: é um operador que opera em cima de um operando

 Operador binário: é um operador que opera em cima de dois operandos

 Operador ternário: é um operador que opera um cima de três operandos
 */

 /**
  * Operador lógico and(&&)
  * v e v = v
  * v e f = f
  * f e v = f
  * f e f = f
  * 
  * Operador lógico or(||)
  * v e v = v
  * v ou f = v
  * f ou v = v
  * f ou f = f
  * 
  * Operador lógico de negação(!)
  * !v = f
  * !f = v
  * 
  * Operador ou exclusivo
  * v xor v = f
  * v xor f = v
  * f xor v = v
  * f xor f = f
  *
  */

 function testeLogico(trabalho1, trabalho2){
      const comprarSorvete = trabalho1 || trabalho2
      const comprarTv50 = trabalho1 && trabalho2
      const comprarTv32 = trabalho1 != trabalho2
      
      /**
       * Surgiu um recurso no ES6(ECMASCRIPT 2015) que permite criar a chave e o valor de um objeto
       * de forma implícita, usando uma variável ou constante como chave e valor ao mesmo tempo
       * 
       * EX: const nome = "Alexandre"
       * const pessoa = {nome} é igual a const pessoa = {nome: "Alexandre"}
       * console.log(pessoa)
       * output no console = nome : alexandre
       */
      return {comprarSorvete, comprarTv50, comprarTv32}
 }

 console.log(testeLogico(true, true))
 console.log(testeLogico(true, false))
 console.log(testeLogico(false, false))