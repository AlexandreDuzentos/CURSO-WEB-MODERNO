/* Nesse caso, quem pode passar argumento para a função é apenas o caller
da função saudaçao, que no caso é a função use */
function Saudacao(req, res, next){
    console.log("Seja bem vindo")
    next()
}

/*
Fazer uma função retornar outra é uma técnica usada para que o caller
da função consiga passar argumentos para a função middleware, o argumento
personalizado é passado na chamada da função mais externa e os argumentos como
req, res e next são passados pelo próprio express para função mais interna ou seja,
a função sendo retornada, esse padrão é usado para passarmos parâmetros para o módulo.
 */
function Saudacao2(nome){
   return function(req, res, next){
       console.log(`Olá ${nome}!`)
       next()
   }
}

/*
Quando uma função é diretamente exportada, ou seja, sem estar dentro de um
objeto, o acesso a função no consumidor é feito diretamente, sem precisar usar
a notação ponto

por exemplo: 
  no consumidor ->
  const saudacao = require("./saudacaoMid")

 A callback sendo passado como argumento para a função use será chamado pela
 própria função use

app.get("/users", saudacao)
app.get("/users", require("./saudacaoMid"))
 */
 module.exports = Saudacao


 /*
 Quando a função é exportado dentro de um objeto, o acesso a ela é feito
 por meio da notação ponto

  A callback sendo passado como argumento para a função use será chamado pela
  própria função use

 por exemplo: 
   no consumidor ->
   const saudacao = require("./saudacaoMid")
   app.use("/users", saudacao.Saudacao)
   app.use("/users", require("./SaudacaoMid").Saudacao)

  */
 module.exports = { Saudacao2: Saudacao2, Saudacao: Saudacao }