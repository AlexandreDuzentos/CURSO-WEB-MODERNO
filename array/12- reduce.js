const alunos = [
    {nome: "Jõao", nota: 7.3 , bolsista: false},
    {nome: "Maria", nota: 9.3, bolsista: true},
    {nome: "Pedro", nota: 9.8, bolsista: true},
    {nome: "Ana", nota: 8.7, bolsista: true}
]



let Bolsistas = obj => obj.bolsista

// Desafio 1: todos os alunos são bolsistas?
let todosBolsistas = alunos.map(Bolsistas).reduce((acumulador, valorAtual) => {
     acumulador =  acumulador && valorAtual == true ? true : false

     return acumulador 
})

console.log(todosBolsistas)

// Desafio 1: Algum aluno é bolsista?
let algumBolsista = alunos.map(Bolsistas).reduce((acumulador, valorAtual) => {
     acumulador = acumulador || valorAtual == true ? true : false

     return acumulador
})

console.log(algumBolsista)


