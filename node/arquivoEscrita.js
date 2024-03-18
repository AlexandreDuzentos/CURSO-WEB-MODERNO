const fs = require("fs")

const produto = {
    nome: "Samsumg galaxy A55",
    preco: "350.000",
    desc: 0.15
}

/** O método writeFile cria o arquivo caso ele ainda não exista, e caso
 * já exista, recria-o.
 */
fs.writeFile(__dirname + "/arquivoGerado.json", JSON.stringify(produto), (err) => {
    console.log(err || "Arquivo salvo")

})