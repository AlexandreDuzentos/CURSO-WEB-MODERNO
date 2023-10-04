/**
 * Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada
 * elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto.
 */

function objetoParaArray(objeto){
   const matriz = []

   for(let i = 0; i < Object.keys(objeto).length; i++){
       matriz.push([Object.keys(objeto)[i], Object.values(objeto)[i]])
   }

   return matriz;
}

console.log(objetoParaArray({nome: "Alexandre", profissao: "Programador"}))