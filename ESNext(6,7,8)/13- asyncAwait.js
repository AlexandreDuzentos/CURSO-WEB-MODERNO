/** Usando o módulo interno do node para fazer uma requisição http via get */
const http = require("http")


/*
 Sem promise, usando callback

 A função callback será chamada quando a operação assíncrona for concluída.
 A operação assíncrona nessa caso será a leitura de um arquivo json.
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

           /** Interceptando o evento que será executado quando os dados começarem a chegar */
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


/*
 Recurso ES8
 Objetivo de simplificar o recurso de promise

 A palavra await funciona apenas se a palavra async já estiver presente previamente.

 A declaração async function cria uma ligação entre uma nova função assíncrona e um nome
 dado.

 Sendo a função, vindo após a async e o nome a variável que recebe a função no caso de uma
 função arrow.

 A palavra-chave await é permitido dentro do corpo da função, habilitando o assíncrono.
*/


// Testando o async/await numa function expression
let obterAlunosExpression = async function(){
    let turmaA = await getTurma("A")
    let turmaB = await getTurma("B")
    let turmaC = await getTurma("C")

    return [].concat(turmaA, turmaB, turmaC)
} // retorna um objeto asyncFunction, que contém a função then

// Testando o async/await numa function declaration
async function obterAlunosDeclaration(){
    let turmaA = await getTurma("A")
    let turmaB = await getTurma("B")
    let turmaC = await getTurma("C")

   return [].concat(turmaA, turmaB, turmaC)
} // retorna um objeto asyncFunction, que contém a função then


// Testanto o async/await numa arrow function
let obterAlunosArrow = async () => {
   let turmaA = await getTurma("A")
   let turmaB = await getTurma("B")
   let turmaC = await getTurma("C")

   return [].concat(turmaA, turmaB, turmaC)

} // retorna uma objeto asyncFunction, que contém a função then

/*
obterAlunosArrow().then((alunos) => alunos.map((aluno) => aluno.nome))
             .then((nomes) => console.log(nomes))
             */

/*
obterAlunosDeclaration().then((alunos) => alunos.map((aluno) => aluno.nome))
             .then((nomes) => console.log(nomes))
*/

obterAlunosExpression().then((alunos) => alunos.map((aluno) => aluno.nome))
             .then((nomes) => console.log(nomes))








            
