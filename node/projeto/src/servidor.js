/**
 * Quando estiver executando alguma aplicação que tem comunicação com rede, é preciso declarar uma
 * porta.
 * 
 * Porta é recurso que permite fazer uma comunicação processo a processo, ou seja,de aplicação a aplicação.
 * 
 * Quando dois computadores se comunicam, além de ter o endereço IP, para que eu saiba onde é que está
 * a máquina, preciso saber com qual processo(aplicação) a comunicação irá ocorrer.
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
  O body-parser é uma dependência que faz um parse(análise) no body da requisição, converte em
  objeto e depois entrega o resultado para o backend da aplicação, a partir de req.body.
*/
const bodyParser = require("body-parser")
const bancoDeDados = require("./bancoDeDados")

// A função express() cria uma aplicação express.
const app = express()

// Fazendo de fato o body parser no body da requisição.
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/produtos", (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

app.get("/produtos/:id",(req, res, next) => {
    // Numa requisição via get os dados vêm na url.
    res.send(bancoDeDados.getProduto(req.params.id))
})


app.post("/produtos", (req, res, next) => {
    // Numa requisição via post os dados vêm no corpo da requisição
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.name,
        preco: req.body.price,
        categoria: req.body.category
    })

    res.send(produto) // JSON
})


app.put("/produtos/:id", (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.name,
        preco: req.body.price,
        categoria: req.body.category
    })

    res.send(produto)
})

app.delete("/produtos/:id", (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) 
})


/**
 * Criando uma rota usando o berbo http get, o primeiro argumento passado
 * é o caminho, e a segunda é a callback que será executada quando a requisição for feita.
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