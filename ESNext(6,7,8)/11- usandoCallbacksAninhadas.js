/** Usando o módulo interno do node para fazer uma requisição http via get */
const http = require("http")


/*
 Sem promise, usando callback

 A função callback será chamada a operação assíncrona for concluída.
 A operação assíncrona nessa caso será a leitura de um arquivo json.
*/
const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
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
        
        // Interceptando o evento que será executado quando os dados estiverem chegando.
        res.on("data", (dados) => {
            resultado += dados
        })


        // Interceptando o evento que será executado quando os dados terminarem de chegar.
        res.on("end", () => {
            /*
             Em resultado teremos uma array de JSONs.

             A função parse converterá esse array de JSONs em um array de objetos
            */
            const resultadoFinal = JSON.parse(resultado)
            callback(resultadoFinal) 
        })
    })
}

let nomes = []

/*
 Estratégia chamada callback hell, é uma estratégia em que temos chamadas de callbacks
 aninhadas.
 */
getTurma("A", alunos => {
    const nomesTurmaA = alunos.map((aluno) => `A: ${aluno.nome}`)
    nomes = nomes.concat(nomesTurmaA)

    getTurma("B", alunos => {
        const nomesTurmaB = alunos.map((aluno) => `B: ${aluno.nome}`)
        nomes = nomes.concat(nomesTurmaB)
        
        getTurma("C", alunos => {
            const nomesTurmaC = alunos.map((aluno) => `C:  ${aluno.nome}`)
            nomes = nomes.concat(nomesTurmaC)

            console.log(nomes)
        })
    })
})




