// Criando uma simulação do reduce
Array.prototype.reduce2 = function(callback, valorInicial){
 let acumulador = this[0]
 let soma = 0

 if(valorInicial){
    acumulador = valorInicial
    for(let i = 0; i < this.length; i++){
        acumulador = callback(acumulador, this[i])
    }
 } else {
    for(let i = 1; i < this.length; i++){
        acumulador = callback(acumulador, this[i])
    }
 }
}

const alunos = [
    {nome: "Jõao", nota: 7.3 , bolsista: false},
    {nome: "Maria", nota: 9.3, bolsista: true},
    {nome: "Pedro", nota: 9.8, bolsista: true},
    {nome: "Ana", nota: 8.7, bolsista: true}
]

let notas = obj => obj.nota

let resultado = alunos.map(notas).reduce2((acumulador, valorAtual) => {
    console.log(acumulador, valorAtual)

    return acumulador + valorAtual
}, 10)