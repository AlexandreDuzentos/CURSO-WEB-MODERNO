const fs = require("fs")

const produto = {
    nome: "Samsumg galaxy A55",
    preco: "350.000",
    desc: 0.15
}

fs.writeFile(__dirname + "/arquivoGerado.json", JSON.stringify(produto), (err) => {
    console.log(err || "Arquivo salvo")

})