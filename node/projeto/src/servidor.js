/**
 * Quando estiver executando alguma aplicação que tem comunicação com rede, é preciso declarar uma
 * porta.
 * 
 * Porta é recurso que permite fazer uma comunicação processo a processo, ou seja,de aplicação a aplicação.
 * 
 * Quando dois computadores se comunicam, além de ter-se o endereço IP,
 * para que o computador de origem saiba onde está o computador de destino
 * , o computador de origem também precisa saber com qual processo ou aplicação
 *  comunicação irá ocorrer.
 * 
 * Cada aplicação que está comunicando com a rede possui uma porta específica para ela.
 * 
 * A porta nada mais é do que uma forma de definir qual processo atenderá determinada requisição.
 * 
 * Não basta ter o endereço ip da máquina para saber quem atenderá determinada requisição, é necessário
 * ter a porta, para que quando os datagramas chegarem na sua placa de rede, eles saberem, qual é o
 * processo que atenderá aquela requisição.
 * 
 * A porta 80 é a porta padrão numa requisição HTTP.
 */


const porta = 3003

// O express é o framwork js backend mais popular no mercado.
const express = require("express")

/* 
  O body-parser é uma dependência que tem a função de analisar(to parse) o body da requisição,
  converte-lo em objeto e depois entregar o resultado para o backend da aplicação, a partir de
  req.body.
*/
const bodyParser = require("body-parser")
const bancoDeDados = require("./bancoDeDados")

// A função express() cria uma aplicação express.
const app = express()

/*
 O método use do express atende toda e qualquer requisição feita para o servidor usando o 
 express, independente do método de requisiçao HTTP usado, e também independente da rota, tudo
 o que ele precisa para receber a requisição enviada pelo cliente é usar apenas a mesma porta
 sendo usada pelo cliente.

 application/x-www-data-urlencoded - é um content-type que descreve que os dados do formulário
 serão enviados num único bloco no body(corpo) da mensagem http.

 A função urlencoded() do bodyParser funcionará apenas se o content-type usado pelo formulário para
 fazer a requisição for o application/x-www-form-data-urlencoded.

 A função urlencoded() retorna uma função middleware que fará o parse do body da requisição.

 função middleware: são funções que têm acesso ao objeto de solicitação(req) e ao objeto de
 resposta(res), e a próxima função middleware no ciclo solicitação resposta do aplicativo.

 */
app.use(bodyParser.urlencoded({
  extended: true
}));


/*
  Rota via get para obter todos os produtos do banco de dados.
*/
app.get("/produtos", (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})


// Rota via get para obter um produto do banco de dados pelo id.
app.get("/produtos/:id",(req, res, next) => {
    // Numa requisição via get os dados vêm na url.
    res.send(bancoDeDados.getProduto(req.params.id))
})


// Rota via post para salvar um produto no banco de dados.
app.post("/produtos", (req, res, next) => {
    // Numa requisição via post os dados vêm no corpo da requisição
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.name,
        preco: req.body.price,
        categoria: req.body.category
    })

    res.send(produto) // JSON
})


// Rota via put para atualizar um produto no banco de dados pelo id.
app.put("/produtos/:id", (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.name,
        preco: req.body.price,
        categoria: req.body.category
    })

    res.send(produto)
})


// Rota via delete para remover um produto do banco de dados pelo id.
app.delete("/produtos/:id", (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) 
})


/**
 * Criando uma rota usando o verbo http get, o primeiro argumento passado
 * é o caminho, e a segunda é a middleware que será executada quando a requisição for feita.
 */

/*
app.get("/produtos", (req, res, next) => {
      // A função send envia uma resposta para a requisição feita.
      res.send({nome: "notebook", preco: 142.12}) // O método send converterá o objeto para JSON.
})
*/


/*
 A função listen recebe dois argumentos, o primeiro será a porta na qual a aplicação atenderá a
 requisição e o segundo será uma callback que será executada assim que o servidor começar a executar.
*/
app.listen(porta, () => {
    console.log("Servidor executando na porta "+porta +".")
})