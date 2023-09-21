/*
 Toda função em javascript tem o atributo prototype, oque nos permite colocar novos funcionalidades
 não nativas da api da linguagem para essa função da linguagem.
 */

/*
  Object, string e array são funções em javascript, desse modo, é possível adicionar funcionalidades 
  não nativas da api da linguagem para aquela função naquela função.
*/
 console.log(typeof Object)
 console.log(typeof String)
 console.log(typeof Array)

 // Adicionando uma nova funcionalidade na prototype(API) da String
 String.prototype.reverse = function(){
    /*
      O método split converte uma string em array, o metodo join converte um array em string,
      o método reverse, reverte a ordem dos elementos de um array.
    */
    return  this.split("").reverse().join("")
 }

 let firstName = "Alexandre"

 console.log(firstName.reverse())

// Adicionando uma nova funcionalidade na prototype(API) do Array
 Array.prototype.first = function(){
     return this[0]
 }


 // Evite mexer em funções que já existam na API(prototype) das funções, isso gera problemas.


 const notas = [10, 13, 9, 12, 15, 19, 8]

 console.log(notas.first())
