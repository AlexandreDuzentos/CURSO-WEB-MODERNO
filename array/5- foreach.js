// Criando uma simulação do forEach
Array.prototype.forEach2 = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}

const notas = [12,17, 9, 10, 16]

notas.forEach2(function(nota, indice, array){
    console.log(`${indice + 1}: ${nota}`)
    console.log(array)
})
