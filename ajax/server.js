const bodyParser = require("body-parser")

/*
 O multer é um middleware do node js usado para lidar com formulários
 com dados codificados como multipart/form-data.

 O multipart/form-data é um tipo de codificação que permite ao formulário
 submeter dados binários e múltiplos tipos de dados numa única requisição.
 Por exemplo, podemos usar essa codificação para uploads de arquivos e
 transferir um arquivo com um Objeto JSON.

 O atributo enctype específica como os dados do formulário devem estar
 codificados na hora de submete-los para o servidor.
 */
const multer = require("multer") 
const express = require("express")

const app = express() // instanciando o express


/*
   Abaixo temos uma função middleware que é usada
   para servir todos os arquivos estáticos presentes
   no diretório atual, o arquivo inicial que será
   servido é o index.html.
*/
app.use(express.static("."))

/**
 * Abaixo temos uma função middleware que será
 * usada para analisar os dados enviados no corpo 
 * da requisição e converte-los para objeto e
 * deixa-los disponíveis em req.body
 */
app.use(bodyParser.urlencoded({extended: true}))

/**
 * Abaixo temos uma função middleware que é usada
 * para analisar dados JSON enviados no corpo da requisição.
 * Isso permite ao express lidar com dados JSON codificados.
 */
app.use(express.json())

/*
Abaixo temos uma função middleware responsável por atender requisições
feitas via verbo http get para um determinado padrão de url
*/
app.get("/teste", (req, res) => {
     res.send()
})

/*
o diskStorage é um engine que oferece ao desenvolvedor total controle no armazenamento
de arquivos no disco.

Quando temos upload de arquivos, normalmente, acabamos por salvá-los em pastas do sistema
e não no banco de dados e também frequentemente muda-se o nome dos arquivos para que não haja
sobrescrita de arquivos.

Retorna a implementação do motor de armazenamento configurado para armazenar arquivos
no sistema de arquivos local.
*/
const storage = multer.diskStorage({
   /** A função destination é chamada no momento em que o multer for escolher a pasta de destino
    * do arquivo
    */
   destination: function(req, file, callback){
      /* setando pasta de destino do arquivo */
      callback(null, "./uploads")
   },
   
   /** A função filename é chamada no momento em que o multer for escolher o nome do arquivo */
   filename: function(req, file, callback) {
       /** setando o nome final do arquivo */
       callback(null, `${Date.now()}_${file.originalname}`)
   }
})

/**
 * Passando a configuração feita no diskStorage para o construtor do multer e depois
 * chamando a função single passando o nome do campo que virá do formulário.
 */
const upload  = multer({ storage }).single('arquivo')

app.post("/upload", (req, res) => {
   upload((req, res, err) => {
      if(err) {
         return res.end("Ocorreu um erro!")
      }

      res.end("Concluído com sucesso!")
   })

})


/*
Abaixo temos uma função middleware responsável por atender requisições
feitas via verbo http post para um determinado padrão de url
*/
app.post("/formulario", (req, res) => {
     res.send({
        ...req.body,
        id: 1
     })
})

app.get("/parOuImpar", (req, res) => {
    /**
     * Formas de receber dados no express
     * req.body -> dados de requisições via post -> dados vem no corpo da requisição
     * req.query -> url no seguinte padrão: http://localhost:8080/parOuImpar?nome=Alexandre&idade=18
     * req.params -> url no seguinte padrão: http://localhost:8080/parOuImpar/Alexandre/18
     */

    const par = (parseInt(req.query.num) % 2) === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    }) 
})


/**
 * Abaixo estamos dizendo ao servidor para começar
 * a escutar por requisições de visitantes numa porta(8080)
 * e endereço específicos(http://localhost).
 */
app.listen(8080, () => {
   console.log("Executando...")
})

/*
 http://localhost:8080 - esse é uma url que corresponde ao endereço ip de lookback 127.0.0.1:8080

 Ao colocarmos essa url no browser, ela é convertida para o endereço ip de lookback 127.0.0.1,
 e esse ip olha para a própria máquina e procura se há algum processo rodando na porta 8080, 
 e se achar esse processo, ocorre a comunicação com o mesmo, ou seja, a comunicação processo-a
 processo ou aplicação-a-aplicação, sendo a primeira aplicação o browser e a segunda a minha
 aplicação express.
*/

