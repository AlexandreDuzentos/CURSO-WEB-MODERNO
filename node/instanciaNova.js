/*
Uma  função factory retorna um novo objeto, é uma das formas de fazer com que mais de uma instância
seja retornada pelo node.

Ou seja, é uma das formas de fazer com que instâncias novas sejam exportadas a cada vez
de a função é invocada no consumidor do módulo.
*/

// Retornando um objeto a partir de uma função factory, o module.exports está a retornar a função
module.exports = () => {
   return {
      valor: 1,
      inc(){
        this.valor++
      }
   }
}