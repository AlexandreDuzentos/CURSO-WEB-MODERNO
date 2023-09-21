function Aula(nome, videoID){
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula("hoisting", 12)
const aula2 = new Aula("Heranca", 2)

console.log(aula1, aula2)

// Simulando o operador new
function novo(f, ...params){
   const obj = {}
   obj.__proto__ = f.prototype
   f.apply(obj, params)
   return obj
 }

 const aula3 = novo(Aula, "hoisting", 12)
 const aula4 = novo(Aula, "heranca", 1)
 console.log(aula3, aula4)