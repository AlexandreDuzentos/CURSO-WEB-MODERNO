/**
 * As declarações try...catch marcam um bloco de declarações para testar (try), e especifica uma
 * resposta(catch), caso uma exceção seja lançada.
 */


function imprimirNomeGritado(obj){
  try{
      console.log(obj.name.toUpperCase() + "!!!")
  } catch(e) {
       lancarExcecao(e)
  } finally {
      /** Bloco executado independente do código do bloco try ou catch lançar uma exeção */
      console.log("Finalmente!")
  }
}

const obj = {nome : "Alexandre"}
imprimirNomeGritado(obj)

function lancarExcecao(e){
    // O constructor da classe(função) Error, recebe como argumento uma string
   //throw new Error("Não é possível ler propriedades de undefined")
   // É possível lançar um exceção com qualquer tipo de dado

   /*
   throw 17
   throw 12.8
   throw "Erro grave"
   throw true
   */

   /*
   throw {
      nome: e.name,
      msg:  e.message,
      data: new Date()
   }
   */

   throw [{nome: e.name}, {msg: e.message}, {data: new Date()}]
}