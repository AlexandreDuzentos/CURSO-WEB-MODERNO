/**
 * Elabore uma função que recebe um objeto com estudantes e as suas notas. As notas de cada estudante,
 * estarão num array, conforme o exemplo abaixo. Você deverá calcular a média da nota de cada aluno e
 * retornar um objeto com os atributos nome e média, que indica que o aluno teve o melhor desempenho
 * nas notas.
 */

function melhorAluno(objEstudantes){
    let alunosArray = []
    let media
    let nome
    let resultado
    let maior = 0

    for(let chave in objEstudantes){

        // Realizando o somatório das notas de cada aluno
        resultado = objEstudantes[chave].reduce((acumulador, atual) => acumulador + atual)

        // Calculando a média de cada aluno
        media = resultado / objEstudantes[chave].length

        // Adicionando os nomes de medias dos alunos ao array alunosArray
        alunosArray.push({nome:  chave, media: media})

        /*
          Percorrendo cada média, para assim determinar qual será a maior, e setando já o nome do
          aluno com a maior média.
        */
        media = alunosArray.map((aluno) => {

            if(aluno.media > maior){
                 maior = aluno.media
                 nome = aluno.nome
            }
    
        })

        /*
         Deletando os alunos(nome e medias) presentes no array alunosArray, para assim adicionar
         apenas um aluno(nome e maior média) no array.
        */
        for(let i = 0 ; i < media.length; i++){
            delete alunosArray[i]
        }
        
        // Adicionando apenas o aluno com a maior média no array
        alunosArray.push({nome: nome, media: maior})

    }

    // Retornando apenas o último elemento do array
    return alunosArray.pop()
}

console.log(melhorAluno({joao: [8, 7.6, 8.9, 6], mariana: [9, 6.6, 7.9, 8], carla: [7, 7, 8, 9]}))




