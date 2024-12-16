function Salvar(req, res){
    res.send("Usuario > Salvar")
}

function Obter(req, res){
    res.send("Usuario > obter")
}

module.exports = {Salvar: Salvar, Obter: Obter}