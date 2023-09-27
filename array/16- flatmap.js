const escola = [
    {
      nome: "Turma M1",
      alunos: [
        {
          nome: "Gustavo",
          nota: 8.5
        },
        {
           nome: "Ana",
           nota: 9.3
        }
      ]
    },
    {
     nome: "Turma M2",
     alunos: [
       {
        nome: "Rebeca",
        nota: 8.9
       },
       {
        nome: "Roberto",
        nota: 7.3
       }
     ]

    }
]


// Uma flatmap é um map associado a um concat
const getNota = obj => obj.nota
const getNotaTurma = obj => obj.alunos.map(getNota)

let resultado = escola.map(getNotaTurma)

console.log(resultado)

console.log([].concat([ 8.5, 9.3 ], [ 8.9, 7.3 ]))

// O flatMap tem essa ideia de achar uma matriz em um vetor
Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas = escola.flatMap(getNotaTurma)

console.log(notas)