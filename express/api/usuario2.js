/*
 Esse é uma padrão usado para que consigamos passar argumentos para o
 módulo, esses argumentos ficarão armazenados nos parâmetros app e texto
 e podem ser usado dentro do escopo da minha função.
 */
const func = function(app, texto){
     function Salvar(req, res){
        res.send("Usuario > Salvar " + texto)
     }

     function Obter(req, res){
        res.send("Usuario > Ler " + texto)
     }

     app.post("/users/save", Salvar)
     app.get("/users/read", Obter)

     return {Salvar: Salvar, Obter: Obter}
}

module.exports = func