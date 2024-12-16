/*
importando o express de dentro da pasta node_modules, mais específicamente
o arquivo index dentro da pasta express.
 */
const express = require("express")
const bodyParser = require("body-parser")

/*
Criando uma aplicação express, a função express é uma factory, ou seja, ela
retorna um objeto.
 */
const app = express()

const saudacao = require("./saudacaoMid")
const usuarioApi = require("./api/usuario")
const usuarioApi2 = require("./api/usuario2")
usuarioApi2(app, "love")


app.post("/usuario/salvar", usuarioApi.Salvar)
app.get("/usuario/ler", usuarioApi.Obter)




// A ordem das minhas rotas são muito importantes no express, se atente a isso.

/*
 Middleware para interpretar dados no corpo da requisição no formato
 JSON e converte-los em objetos JavaScript, ele converte o corpo(body) da requisição
 para um objeto JavaScript quando a requisição chega e volta converter para JSON
 quando a resposta é devolvida para o cliente.
*/
app.use(bodyParser.json())

/*
 Middleware para interpretar dados no corpo da requisição de formulários
 no formato application/x-www-form-urlencoded e transforma-los em um objetos
 JavaScript, ele converte o corpo(body) da requisição
 para um objeto JavaScript quando a requisição chega e volta converter para JSON
 quando a resposta é devolvida para o cliente.
*/
app.use(bodyParser.urlencoded({extended: true}))

app.use(saudacao.Saudacao2("Alexandre"))

/*
A função define um middleware no Express que será executado
para todas as requisições, porém pode também ser usado para
atender requisições para um determinado padrão de URL.
*/
/*
app.use((req, res) => {
    res.send("Estou bem!")
})
*/


/* Aqui a middleware está atendendo o padrão de URL "/love"  */
app.use("/love0" ,(req, res) => {
    res.send("I love you use!")
})


/*
O verbo HTTP OPTIONS é usado para solicitar informações sobre os métodos HTTP
suportados por um servidor para uma determinada URL, sem realizar uma requisição
de dados.
*/
app.get("/love1" ,(req, res) => {
    res.send("Testando o options!")
})

/*
o all atenderá requisições para um determinado padrão de URL para
todos os verbos http.
 */
app.all("/love2", (req, res) => {
    res.send("Testando o all!")
})

/* Podemos retornar uma resposta no formato HTML */
app.get("/love3", (req, res) => {
    res.send("<div><h1>Olá</h1><p>Como você está?</p><div>")
})

/* Podemos retornar uma resposta no formato JSON */
app.get("/love4", (req, res) => {
    res.json({
        "name": "SAMSUMG GALAXY A55",
        "preco": 1250.90,
        "desconto": 10
    })
})

app.use("/love5" ,(req, res, next) => {
    console.log("Antes...")
    next() // chamada a próxima middleware com o mesmo padrão de URL da requisição.


})

/* Obtendo dados da queryString numa requisição via get */
app.get("/clientes/relatorio", (req, res) => {
    res.send(`Cliente relatório: completo = ${req.query.completo} ano = ${req.query.ano}`)
  })

/*
  Numa requisição via post também podemos passar a queryString na URL, porém
  numa requisição com verbo http POST os dados vêm no corpo da requisição por
  padrão.
*/
app.post("/clientes/relatorio", (req, res) => {
    res.send(`Cliente relatório: completo = ${req.query.completo} ano = ${req.query.ano}`)
})

app.post("/corpo", (req, res) => {
  let corpo = ""

  /*
    Essa é a forma que trabalhamos para obter os dados quando não utilizamos
    o body-parser.

  Esse é um listener para o evento onData, que é um evento disparado
  quando dados sendo transmitidos para o servidor começam a chegar, esse
  evento é disparado toda vez que uma parte dos dados chega, pois os dados
  não chegam por completo, chegam em partes.
   */

  /*
  req.on("data", function(parte){
      corpo += parte
  })
  */

  /* Esse evento é disparado quando os dados acabam de chegar */
  /*
  req.on("end", function(){
      res.send(corpo)
  })
  */

  res.send(req.body)
  

})

/*
 O :id representa um parâmetro dinâmico na URL, ou seja, uma parâmetro
 que variar, esse não é um recurso do HTTP, mas sim do próprio express,
 a forma de passar parâmetros no HTTP é por meio de uma queryString.
 */
app.get("/clientes/:id", (req, res) => {
  res.send(`Cliente ${req.params.id} selecionado!`)
})


/* Podemos retornar um array de JSONs */
app.get("/love5", (req, res, next) => {
    console.log("Durante...")
    res.json([
        {
            "name": "SAMSUMG GALAXY A55",
            "preco": 1250.90,
            "desconto": 10  
        },
        {
            "name": "SAMSUMG GALAXY A54",
            "preco": 1100.30,
            "desconto": 5
        },
        {
        "name": "SAMSUMG GALAXY A70",
        "preco": 900.50,
        "desconto": 8
        }
    ])

    next()
})

app.use("/love5" ,(req, res) => {
    console.log("Depois...")
})



/*
  A função app.listen do Express serve para iniciar um servidor, ouvindo
  requisições em uma porta específica.
*/
app.listen(3000, () => {
    console.log("Backend executando!")
})