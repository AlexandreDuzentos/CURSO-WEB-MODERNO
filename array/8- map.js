// Criando uma simulação do map
Array.prototype.map2 = function(callback){
   let novoArray = []

   for(let i = 0; i < this.length; i++){
       let elementoNovo = callback(this[i], i, this)
       novoArray.push(elementoNovo)
   }

   return novoArray
}


let nums = [1, 2, 3, 4, 5, 6]

let resultado = nums.map2((valor) => valor * 2)

console.log(resultado)