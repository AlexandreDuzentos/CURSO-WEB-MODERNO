/*
 O array em javascript é um objeto, é um objeto especial, ele
 tem características próprias, não existe o array nativo na API do javascript,
 um tipo de dados array(não existe).

 array: em javascript é corresponde a uma coleção de dados, unidimensional, indexada, heterogênea
 e de tamanho variável.

 unidimensional: o array tem um única dimensão
 indexada: o acesso aos elementos é feito por meio de índices
 heterogênea: os valores dentro do array devem ser do mesmo tipo
 tamanho variável: é possível aumentar ou diminuir a quantidade de elementos do array
 */

 console.log(typeof Array, typeof new Array, typeof [])

 /**
  *  Criando um array a partir de uma função construtora
  *  Forma não tão recomendamendada para criar um array
  **/ 
 let aprovados = new Array("Paulo", "Mateus", "Abraão");

 /**
  * Notação literal de criação de array
  */
 aprovados = ["Isaque", "Ismael", "Jaco"]

 // Os índices no array começam a partir de 0
 console.log(aprovados[0])

 console.log(aprovados[1])
 console.log(aprovados[2])

 // Quando um determinado índice não existe no array é retornado undefined
 console.log(aprovados[3])

 aprovados[3] = "Abimael"

 // O método push adiciona um elemento na última posição do array
 aprovados.push("Marcos")

 // O atributo length da array aprovados retorna a quantidade de elementos dentro do array
 console.log(aprovados.length)

 aprovados[10] = "Gênesis"

 console.log(aprovados)

 // A função sort ordena os elementos de um array, e reindexar os elementos.
 aprovados.sort()

 console.log(aprovados)

 console.log(aprovados[1])

 /*
   O operador delete remove um elemento em uma posição específica do array, quando
   é feito o acesso a posição do array que foi removida, ela estará undefined, o array não reindexado.
 */
 delete aprovados[1]

 console.log(aprovados)

 aprovados = ["Bia", "Ana" ,"Maria"]

 /**
  * A função splice remove elementos do array e se necessário insere novos em seu lugar e
  * retorna um array com os elementos deletados.
  * 
  * O primeiro parâmetro é o índice de início, o segundo é quantos elementos serão
  * deletados a partir desse índice de início, o último elemento serão os valores que serão adicionados
  * no lugar do valor que estava no índice removido.
  */

 let spread = ["Paulo", "John", "Apocalipse"]

 let deletedElements = aprovados.splice(1, 1, ...spread)
 console.log(deletedElements)

 console.log(aprovados)

 /**
  *  Array constante: quando um tenho um array constante, isso não significa que os dados do
  *  array são constantes, o fato é que a variável aponta para um endereço de memória e aquele
  *  endereço não pode ser modificado.
  * 
  */



 
