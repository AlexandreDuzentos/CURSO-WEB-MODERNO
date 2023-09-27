const alunos = [
    {nome: "Jõao", nota: 7.9},
    {nome: "Maria", nota: 9.2}
]



let acumulador = 0

/*
 Abordagem imperativa: é uma abordagem em que é necessário descrever o passo a passo, cada detalhe para
 realizar uma tarefa, o que traz consigo um baixo nível de reuso código, na abordagem imperativa tem muito 
 a que ver com o como realizar determinada tarefa.
 */
for(let i = 0; i < alunos.length; i++){
    acumulador = acumulador + alunos[i].nota
}

console.log(acumulador/ alunos.length)


/*
 Abordagem declarativa: é uma abordagem que dispensa a descrição do passo a passo para realizar uma
 tarefa, o que traz consigo um alto nível de reuso de código, a abordagem declarativa tem mais a que
 ver com o que? do que com o como?
*/
const notas = obj => obj.nota
let soma = (acumulador, valorAtual) => acumulador + valorAtual

let media = alunos.map(notas).reduce(soma)

console.log(media / alunos.length)