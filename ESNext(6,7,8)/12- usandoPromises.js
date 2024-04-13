// Com promise

/** Usando o módulo interno do node para fazer uma requisição http via get */
const http = require("http")

/*
 A função callback será chamada a operação assíncrona for concluída.
 A operação assíncrona nessa caso será a leitura de um arquivo json remoto.

 É melhor usar Promises do que callback porque a promise trata melhor a parte da chamada
 das funções, elimina a necessidade de ter aninhamento entre funções, melhorando a legi
 bilidade da código.
*/
const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`

   return new Promise((resolve, reject) => {
        http.get(url, (res) => {
            let resultado = ""

             /**
         *  O parâmetro res recebe a reposta do servidor de forma parcial, ou seja, aos poucos,
         *  não tem como ele receber os dados completos de uma só vez, os dados vêm 
         *  em streaming.
         * 
         *  Por essa razão, há a necessidade de concatenar os dados parciais um no outro,
         *  afim de compor o dado completo.
         * 
         * 
         *  dados em streaming: são dados transmitidos em alto volume de maneira contínua e 
         *  incremental a fim de obter processamento de baixa latência.
         * 
         *  baixa latência: é o baixo atraso na chegada de um pacote ao destino.
         * 
         */

           
            res.on("data", (dados) => {
                resultado += dados
            })

             // Interceptando o evento que será executado quando os dados terminarem de chegar.
            res.on("end", () => {
                /*
                 O try tentará executar o código dentro dele, caso ocorra um erro com o mesmo,
                 uma exceção será lançada, e está será capturada pelo catch
                */
                try{
                  const resultadoFinal = JSON.parse(resultado)

                  /*
                   A função resolve deve ser chamada quando a promise consegue atender a requisição
                   com sucesso.
                  */
                  resolve(resultadoFinal)

                }catch(e){
                  /*
                   A função reject deve ser chamada quando a promise não consegue atender a requisisão
                   com sucesso.
                  */
                  reject(e)
                }
            })
        })
   })
}

let nomes = []

/*
 Estratégia chamada callback hell, é uma estratégia em que temos callbacks chamadas de callbacks
 aninhadas.
*/

// Chamada aninhada das funções getTurma usando promise, promise hell.

/*
getTurma("A").then((alunos) => {
    const nomesTurmaA = alunos.map((aluno) => `A: ${aluno.nome}`)
     nomes = nomes.concat(nomesTurmaA)
    
     getTurma("B").then((alunos) => {
        const nomesTurmaA = alunos.map((aluno) => `B: ${aluno.nome}`)
         nomes = nomes.concat(nomesTurmaA)

         getTurma("C").then((alunos) => {
            const nomesTurmaA = alunos.map((aluno) => `C: ${aluno.nome}`)
            nomes = nomes.concat(nomesTurmaA)
            console.log(nomes)
         })       
    })     
})
*/


/* Chamada em cadeia usando a função then da Promise */
/*
getTurma("A").then((alunos) => {
    const nomesTurmaA = alunos.map((aluno) => `A: ${aluno.nome}`)
    nomes = nomes.concat(nomesTurmaA)

    return alunos

}).then((alunos) => {
    const nomesTurmaB = alunos.map((aluno) => `B: ${aluno.nome}`)
    nomes = nomes.concat(nomesTurmaB)

    return alunos

}).then((alunos) => {
    const nomesTurmaB = alunos.map((aluno) => `B: ${aluno.nome}`)
    nomes = nomes.concat(nomesTurmaB)

    console.log(nomes)
})
*/

/**
 * A função all da classe Promise, recebe um array que contém Promises como parâmetro, com isso, numa única
 * chamada da função all, ela chamará todas as Promises passadas para o array dentro dela e ficará aguardando
 * que elas sejam resolvidas ou rejeitadas.
 */

/*
Promise.all([getTurma("A"), getTurma("B"), getTurma("C")])
   .then((turmas) => {
    /*
     Operador spread junto a matriz de turmas, retirará os arrays que representam
     cada turma de dentro da matriz, desse modo, teremos todos os arrays que representam
     cada turma ser concatenado com um array vazio, desse modo, teremos um único array contendo
     todas as turmas.

     Dentro de um array que representa cada uma das turmas, temos vários objetos, cada um
     representando os atributos de um aluno específico.
    */
   // return [].concat(...turmas)
//})
   // .then(alunos => {
       // return alunos.map(aluno => aluno.nome)
//})
  //  .then((nomes) => {
      // console.log(nomes)
   // })


getTurma("K")
  .then((alunos) => {
    let nomesTurmaA = alunos.map((aluno) => `A: ${aluno.nome}`)
    console.log(nomesTurmaA)
})
  .catch((erro) => {
     console.log(erro)
  })

/*
const matriz = [[{nome: "ALexandre", idade: 20}], [{nome: "Paulo", idade: 22}], [{nome: "Mateus", idade: 25}], [{nome: "Augusto", idade: 18}], [{nome: "Matias", idade: 15}]]
console.log(...matriz)

console.log([].concat(...matriz))

output:
[
  { nome: 'ALexandre', idade: 20 },
  { nome: 'Paulo', idade: 22 },
  { nome: 'Mateus', idade: 25 },
  { nome: 'Augusto', idade: 18 },
  { nome: 'Matias', idade: 15 }
]

Quando concatenamos dois arrays ou mais, um único array é gerado, contendo os elementos
de todos os arrays que foram concatenados.
*/





