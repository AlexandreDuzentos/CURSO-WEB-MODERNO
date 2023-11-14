const express = require("express") // Importando o express
const bodyParser = require("body-parser") // Importando o body-parser

const app = express() // Criando uma aplicação express

app.use(bodyParser.urlencoded({ extended: true}));

app.post('/usuarios', (req, res) => {
   console.log(req.body)
   res.send("<p>Post efetuado com sucesso!</p>")
})

app.post("/usuarios/:id", (req, res) => {
    console.log(req.params.id)
    console.log(req.body)
    res.send("<p>Put efetuado com sucesso!</p>");

})


/*
 Há um servidor a servir os arquivos estáticos que estão dentro da pasta html(o http-server), na porta
 8080 e outro que está a tratar requisições feitas via formulário na porta 3003, o que vem embutido
 dentro do express js.
 */
app.listen(1010, () => {
    console.log("Servidor que trata requisições vindas do formulário rodando")
})