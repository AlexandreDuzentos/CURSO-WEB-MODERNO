// Solução Alexandre
const fs = require("fs")

const caminho =  `${__dirname}/18- dados.txt`

function lerArquivo(caminho){
    return new Promise((resolve, reject) => {
        fs.readFile(caminho, "utf-8", (error, conteudo) => {
            if(error){
                reject(error)
            } else {
                resolve(conteudo)
            }
        })
    })
}

lerArquivo(caminho)
   .then((conteudo) => console.log(conteudo))
   .catch((erro) => console.log(erro))


const path = require("path")

/*
 A função join do módulo core path do node, serve para juntar todos os argumentos passados
 para ela e normalizar o caminho resultante.
*/
const caminho2 = path.join(__dirname, "dados.txt")


// A função to string converte um dado para string.
console.log(typeof (10).toString())

let json = '{ "nome": "Alexandre", "idade": 20, "endereco":{ "Distrito": "Futungo", "Bairro": "Kawelele", "provincia": "Luanda"}}'

                 
           
    




